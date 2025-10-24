/* transition duration-300 hover:ease-(--move-right)
==> we gonna continue this thing later tmr (24/10/68)
==> i want that card expand to right smoothly when hover! */



//this file insert into try_to_build_web.html in listing products section!
const productList = document.getElementById("product-list");

async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    //show fking products
    productList.innerHTML = "";
    products.forEach(product => {
      const card = document.createElement("div");
      card.id = `product-${product.id}`;
      card.className = "w-2/3 bg-sky-100/70 rounded-2xl shadow-2xl snap-start transition duration-300 hover:ease-(--move-right) hover:shadow-cyan-50/50 hover:bg-sky-100 hover:w-full";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="w-full h-[200px] object-contain mb-3"/>
        <h2 class="text-lg font-semibold line-clamp-2">${product.title}</h2>
        <div class="flex justify-between items-center mt-2">
          <span class="text-blue-600 font-bold ">$${product.price}</span>
          <span class="text-sm text-gray-500">${product.category}</span>
        </div>
        <button class="w-full mt-4 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">Add to Cart
        </button>
      `;
      productList.appendChild(card);
    });
  } catch (error) {
    console.error("fail to load product:", error);
    productList.innerHTML = `<p class="text-center text-red-500">error can't load product</p>`;
  }
}


fetchProducts();