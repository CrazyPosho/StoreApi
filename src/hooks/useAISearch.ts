import { useState, useCallback } from "react";
import { GoogleGenAI, Type } from "@google/genai";
import { getAllProduct } from "../services/api";
import type { Product } from "../types";

// Configuración de la API de Gemini
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

interface UseAISearchResult {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  hasSearched: boolean;
  searchProducts: (query: string) => Promise<void>;
  clearSearch: () => void;
}

export const useAISearch = (): UseAISearchResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const searchProducts = useCallback(async (query: string) => {
    if (!query.trim()) {
      setError("Por favor ingresa una consulta de búsqueda.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setProducts([]);

    try {
      // Schema para la respuesta de Gemini
      const schema = {
        type: Type.OBJECT,
        properties: {
          categories: {
            type: Type.ARRAY,
            description:
              "Una lista de categorías de productos relevantes basada en la consulta del usuario.",
            items: { type: Type.STRING },
          },
        },
      };

      const geminiPrompt = `Analiza la consulta del usuario: "${query}". Identifica a cuál de las categorías de productos disponibles se relaciona. Las categorías disponibles son: "electronics", "jewelery", "men's clothing", y "women's clothing". Responde con un objeto JSON que contenga una sola clave "categories" que sea un array con los nombres de las categorías coincidentes. Si no hay categorías que coincidan, devuelve un array vacío. Por ejemplo: {"categories": ["electronics", "jewelery"]}`;

      // Ejecutar búsquedas en paralelo
      const [productsResponse, geminiResponse] = await Promise.all([
        getAllProduct(),
        ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: geminiPrompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: schema,
          },
        }),
      ]);

      const allProducts: Product[] = productsResponse;
      let identifiedCategories: string[] = [];

      try {
        let cleanedJson = geminiResponse.text?.trim() || "";
        if (cleanedJson.startsWith("```json")) {
          cleanedJson = cleanedJson.substring(7, cleanedJson.length - 3).trim();
        } else if (cleanedJson.startsWith("```")) {
          cleanedJson = cleanedJson.substring(3, cleanedJson.length - 3).trim();
        }

        const result = JSON.parse(cleanedJson);
        identifiedCategories =
          result.categories && Array.isArray(result.categories)
            ? result.categories
            : [];
      } catch (e) {
        console.error(
          "Error al parsear la respuesta de Gemini:",
          e,
          "Respuesta cruda:",
          geminiResponse.text
        );
        throw new Error(
          "Tuve problemas para entender la respuesta de la IA. Por favor intenta reformular tu búsqueda."
        );
      }

      if (identifiedCategories.length > 0) {
        const filteredProducts = allProducts.filter(
          (p: Product) =>
            p.category && identifiedCategories.includes(p.category)
        );
        setProducts(filteredProducts);
      } else {
        setProducts([]);
      }
    } catch (err) {
      console.error("Ocurrió un error durante la búsqueda:", err);
      let errorMessage =
        "Ocurrió un error inesperado. Por favor intenta de nuevo.";
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === "string") {
        errorMessage = err;
      }
      setError(errorMessage);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearSearch = useCallback(() => {
    setProducts([]);
    setError(null);
    setHasSearched(false);
  }, []);

  return {
    products,
    isLoading,
    error,
    hasSearched,
    searchProducts,
    clearSearch,
  };
};
