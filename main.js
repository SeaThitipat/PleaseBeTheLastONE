
const productList = document.getElementById("product-list");

async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    //show products
    productList.innerHTML = "";
    products.forEach(product => {
      const card = document.createElement("div");
      card.id = `product-${product.id}`;
      card.className = "bg-sky-100/70 rounded-2xl shadow-2xl snap-start transition ease-in-out hover:scale-105 hover:shadow-cyan-50/50 hover:bg-sky-100 ";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class=" w-full h-[200px] object-contain mb-3"/>
        <h2 class="ml-[5px] text-lg font-semibold line-clamp-2">${product.title}</h2>
        <div class="ml-[5px] flex justify-between items-center mt-2">
          <span class="text-blue-600 font-bold ">$${product.price}</span>
          <span class="text-sm text-gray-500">${product.category}</span>
        </div>
        <div class="flex justify-center">
          <button class="w-1/2 mt-2 content-end bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">Add to Cart
          </button>
          <button class="w-1/2 mt-2 content-end bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
            onclick="location.href='more_detail_product.html?id=${product.id}'">View Detail
          </button>
        </div>
      `;
      productList.appendChild(card);
    });
  } catch (error) {
    console.error("fail to load product:", error);
    productList.innerHTML = `<p class="text-center text-red-500">error can't load product</p>`;
  }
}

fetchProducts();
