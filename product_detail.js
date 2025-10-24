const productDetailContainer = document.getElementById("product-detail");
const imgEl = document.getElementById("product-image");
const idEl = document.getElementById("product-id");
const titleEl = document.getElementById("product-title");
const priceEl = document.getElementById("product-price");
const categoryEl = document.getElementById("product-category");
const descEl = document.getElementById("product-description");

function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

async function loadProductDetail() {
  const id = getProductIdFromUrl();
  if (!id) {
    productDetailContainer.innerHTML = `<p class="text-white">No product id provided.</p>`;
    return;
  }

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Product not found");
    const product = await res.json();

    // populate DOM
    if (imgEl) {
      imgEl.src = product.image;
      imgEl.alt = product.title;
      imgEl.width = 100;
      imgEl.height = 100;
    }
    if (idEl) idEl.textContent = `product id : ${product.id}`;
    if (titleEl) titleEl.textContent = product.title;
    if (priceEl) priceEl.textContent = `$${product.price}`;
    if (categoryEl) categoryEl.textContent = product.category;
    if (descEl) descEl.textContent = product.description;
  } catch (err) {
    console.error(err);
    productDetailContainer.innerHTML = `<p class="text-red-400">Failed to load product detail.</p>`;
  }
}

document.addEventListener("DOMContentLoaded", loadProductDetail);