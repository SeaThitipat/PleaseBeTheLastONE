const productDetail = document.getElementById("product-detail");

async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    }
};
