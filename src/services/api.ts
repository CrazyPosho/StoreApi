export const getAllProduct = () =>
  fetch("https://fakestoreapi.com/products").then((response) =>
    response.json()
  );

export const getProductById = (id: number) =>
  fetch(`https://fakestoreapi.com/products/${id}`).then((response) =>
    response.json()
  );
