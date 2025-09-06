import { useAISearch } from "../hooks/useAISearch";
import { SearchInput } from "../components/SearchInput";
import { SearchResults } from "../components/SearchResults";

export const Explore = () => {
  const { products, isLoading, error, hasSearched, searchProducts } =
    useAISearch();

  return (
    <div className="min-h-[83vh] px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extralight dark:text-white mb-4">
            Explorador con IA
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Describe lo que buscas y nuestra inteligencia artificial encontrará
            los productos perfectos para ti
          </p>
        </div>

        <SearchInput onSearch={searchProducts} isLoading={isLoading} />

        <SearchResults
          products={products}
          isLoading={isLoading}
          error={error}
          hasSearched={hasSearched}
        />
      </div>
    </div>
  );
};
