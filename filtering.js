const products = [
  { name: "Sony WH-1000XM4", price: 22999, rating: 4.8, category: "electronics", image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg" },
  { name: "iPhone 13", price: 52999, rating: 4.7, category: "electronics", image: "https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg" },
  { name: "Logitech G502 Mouse", price: 4495, rating: 4.6, category: "electronics", image: "https://m.media-amazon.com/images/I/61mpMH5TzkL._SL1500_.jpg" },
  { name: "Dell XPS 13", price: 139999, rating: 4.5, category: "electronics", image: "https://m.media-amazon.com/images/I/71fJ-gFTq2L._SL1500_.jpg" },
  { name: "Nike Windrunner Jacket", price: 4995, rating: 4.3, category: "clothing", image: "https://m.media-amazon.com/images/I/61l8nMy1qGL._SL1500_.jpg" },
  { name: "Uniqlo Cotton T-shirt", price: 990, rating: 4.2, category: "clothing", image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455719/item/goods_09_455719.jpg" },
  { name: "Levi’s 511 Slim Jeans", price: 2699, rating: 4.4, category: "clothing", image: "https://m.media-amazon.com/images/I/71fQZbQ5tTL._SL1500_.jpg" },
  { name: "Adidas Ultraboost", price: 15999, rating: 4.6, category: "clothing", image: "https://m.media-amazon.com/images/I/61+Q6n5S3dL._SL1500_.jpg" },
  { name: "H&M Oversized Hoodie", price: 1999, rating: 4.1, category: "clothing", image: "https://lp2.hm.com/hmgoepprod?set=source[/5c/bf/5cbf16dc934324396e0bb06539a98ac3df4d05e4.jpg],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" },
  { name: "Moleskine Classic Notebook", price: 1349, rating: 4.7, category: "books", image: "https://m.media-amazon.com/images/I/61+tJ25n6ZL._SL1000_.jpg" },
  { name: "Dune by Frank Herbert", price: 499, rating: 4.6, category: "books", image: "https://m.media-amazon.com/images/I/91tNtcZpYyL.jpg" },
  { name: "Milk and Honey by Rupi Kaur", price: 299, rating: 4.4, category: "books", image: "https://m.media-amazon.com/images/I/61lUwHlcBHL.jpg" },
  { name: "The Lean Startup", price: 429, rating: 4.5, category: "books", image: "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg" },
  { name: "Clean Code by Robert C. Martin", price: 799, rating: 4.8, category: "books", image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg" },
  { name: "ASUS ROG Zephyrus G14", price: 124990, rating: 4.6, category: "electronics", image: "https://m.media-amazon.com/images/I/81kDY+fllFL._SL1500_.jpg" },
  { name: "Samsung Galaxy Tab S9", price: 72999, rating: 4.5, category: "electronics", image: "https://m.media-amazon.com/images/I/71JZ9hG8H2L._SL1500_.jpg" },
  { name: "Under Armour Sports Shorts", price: 1995, rating: 4.3, category: "clothing", image: "https://m.media-amazon.com/images/I/41B8yksq6gL.jpg" },
  { name: "Think and Grow Rich", price: 199, rating: 4.6, category: "books", image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg" },
  { name: "Apple AirPods Pro (2nd Gen)", price: 24999, rating: 4.7, category: "electronics", image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._SL1500_.jpg" }
];

function displayProducts(list) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";
  list.forEach(p => {
    const starCount = "⭐".repeat(Math.floor(p.rating));
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price.toLocaleString()}</p>
        <div class="rating">${starCount}</div>
        <p><strong>${p.category}</strong></p>
      </div>
    `;
  });
}

function filterByCategory(category) {
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function setView(view) {
  const container = document.getElementById("product-container");
  container.classList.remove("grid", "list");
  container.classList.add(view);
}

// Initialize
setView("grid");
displayProducts(products);
