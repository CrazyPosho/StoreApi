export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4 animate-bounce">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        ¡Vaya! La página que buscas no se encuentra.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Volver a la página principal
      </a>
    </div>
  );
};

export default NotFound;
