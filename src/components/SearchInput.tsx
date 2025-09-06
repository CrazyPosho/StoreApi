import { useState } from "react";
import { Button } from "./Button";

interface SearchInputProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

export const SearchInput = ({
  onSearch,
  isLoading,
  placeholder = "ej. 'un anillo de diamante' o 'gadgets tecnológicos nuevos'",
}: SearchInputProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 items-center"
      >
        <div className="relative flex-1 w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            disabled={isLoading}
            className="w-full px-4 py-3 text-lg rounded-lg border-2 border-gray-300 dark:border-gray-600
                     bg-white dark:bg-gray-800 text-black dark:text-white
                     focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-colors duration-200"
            aria-label="Búsqueda de productos con IA"
          />
        </div>

        <Button
          label={isLoading ? "Buscando..." : "Buscar"}
          variant={isLoading ? "disabled" : "primary"}
          size="base"
          className="px-8 py-3 whitespace-nowrap"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};
