const products = [
  { id: "soundwave-headphones", name: "Soundwave Wireless Headphones", category: "Audio", price: 12999, description: "Comfortable over-ear sound with all-day battery life.", details: "Settle into your favorite playlist, podcast, or focus time with comfortable over-ear headphones designed for everyday listening.", highlights: ["Over-ear design for comfortable listening", "Wireless listening for everyday convenience", "A practical pick for music, calls, and focus time"], image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1100&q=85", alt: "Wireless headphones" },
  { id: "mini-bluetooth-speaker", name: "Pocket Bluetooth Speaker", category: "Audio", price: 6499, description: "Room-filling sound in a compact, travel-ready design.", details: "Bring music into your room or take it along for the day. This compact speaker keeps your listening setup simple and portable.", highlights: ["Compact size that is easy to take along", "Wireless Bluetooth listening", "Made for music at home or on the go"], image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1100&q=85", alt: "Portable Bluetooth speaker" },
  { id: "everyday-laptop-stand", name: "Everyday Laptop Stand", category: "Computing", price: 3499, description: "A sturdy adjustable stand for a more comfortable desk.", details: "Give your laptop a dedicated place on your desk. The adjustable design helps you create a more comfortable, organized workspace.", highlights: ["Adjustable stand for your laptop", "Helps keep your desk setup organized", "Useful for a home or office workspace"], image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1100&q=85", alt: "Laptop on a desk" },
  { id: "wireless-keyboard", name: "Quiet Wireless Keyboard", category: "Computing", price: 5999, description: "A clean, comfortable typing experience without the clutter.", details: "Keep your desk feeling calm and uncluttered with a wireless keyboard for everyday typing, study, and work.", highlights: ["Wireless design for a tidy desk", "Comfortable everyday typing", "A practical partner for a computer workspace"], image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1100&q=85", alt: "Keyboard and computer setup" },
  { id: "fast-charge-power-bank", name: "Fast-Charge Power Bank", category: "Mobile", price: 2999, description: "A dependable pocket-sized boost for busy days out.", details: "Keep a portable charging option close when you are away from your usual outlet. Its compact design is easy to pack for a busy day.", highlights: ["Portable size for bags and backpacks", "Convenient charging away from home", "Useful for everyday travel and commutes"], image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1100&q=85", alt: "Portable power bank" },
  { id: "desk-light", name: "Glow LED Desk Light", category: "Home", price: 4499, description: "Soft, adjustable light for late-night reading and work.", details: "Add a focused light source to your desk or reading corner. Adjust the lamp to suit the way you work, study, or unwind.", highlights: ["Adjustable light for different tasks", "A helpful addition to a desk or reading nook", "LED lighting for everyday use"], image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1100&q=85", alt: "Modern desk lamp" },
  { id: "smart-led-lamp", name: "Soft Glow Smart Lamp", category: "Home", price: 2799, description: "A warm, dimmable glow for quiet evenings and focused mornings.", details: "Make your room feel a little more welcoming with a soft-glow lamp for evening wind-downs, reading, or a gentle start to the day.", highlights: ["Warm light for a relaxed atmosphere", "Dimmable brightness to suit your space", "Designed for everyday home use"], image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1100&q=85", alt: "Warm light in a comfortable home" },
  { id: "usb-c-hub", name: "Everyday USB-C Hub", category: "Computing", price: 3999, description: "Add handy everyday connections to your laptop setup.", details: "Keep useful connections together in a compact hub that helps make a laptop workspace more flexible and organized.", highlights: ["Compact accessory for your laptop setup", "Helps bring everyday connections together", "Useful at a desk or while travelling"], image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1100&q=85", alt: "USB-C adapter and laptop" },
  { id: "true-wireless-earbuds", name: "True Wireless Earbuds", category: "Audio", price: 4999, description: "Lightweight earbuds for music, calls, and daily commutes.", details: "Enjoy a compact listening option for commuting, working, or relaxing. The small charging case makes it easy to keep your earbuds together between uses.", highlights: ["Compact true wireless design", "Portable charging case", "Suitable for music and everyday calls"], image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1100&q=85", alt: "Wireless earbuds and charging case" },
  { id: "home-theatre-soundbar", name: "Home Theatre Soundbar", category: "Audio", price: 14999, description: "Bring fuller sound to movie nights and favorite shows.", details: "Give your television a dedicated audio companion. This streamlined soundbar is made for a neat setup and more enjoyable everyday viewing.", highlights: ["Low-profile soundbar design", "Made to complement a television", "A simple upgrade for movie and music time"], image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1100&q=85", alt: "Home entertainment system and television" },
  { id: "studio-gaming-headset", name: "Studio Gaming Headset", category: "Audio", price: 8999, description: "An over-ear headset for gaming, voice chat, and focused listening.", details: "Settle in for a gaming session or a video call with a comfortable over-ear headset designed to keep your audio close at hand.", highlights: ["Over-ear headset for immersive listening", "Built-in microphone for voice chat", "Comfortable choice for longer sessions"], image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1100&q=85", alt: "Over-ear gaming headset" },
  { id: "vinyl-record-player", name: "Classic Vinyl Record Player", category: "Audio", price: 11999, description: "Enjoy your record collection with a classic turntable setup.", details: "Give your favorite records a place in your listening routine. This turntable brings a tactile, hands-on feel to playing music at home.", highlights: ["Turntable for vinyl records", "A classic addition to a home audio setup", "Enjoy the ritual of playing a record"], image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1100&q=85", alt: "Vinyl record and turntable" },
  { id: "desktop-monitor", name: "Everyday 24-inch Monitor", category: "Computing", price: 18999, description: "A clear, roomy display for work, study, and entertainment.", details: "Add more screen space to your desk for documents, browsing, and video. A versatile monitor is a helpful centrepiece for a home or office setup.", highlights: ["Roomy desktop display", "Suitable for work, study, and entertainment", "Pairs with a compatible computer"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1100&q=85", alt: "Desktop computer monitor on a desk" },
  { id: "wireless-mouse", name: "Comfort Wireless Mouse", category: "Computing", price: 2499, description: "A comfortable wireless mouse for your everyday desk.", details: "Keep your workspace free of extra cable clutter with a practical mouse for everyday browsing, office work, or study.", highlights: ["Wireless design for a tidy desk", "Comfortable shape for everyday use", "A handy computer desk accessory"], image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1100&q=85", alt: "Wireless computer mouse" },
  { id: "portable-laptop", name: "Everyday 14-inch Laptop", category: "Computing", price: 64999, description: "A portable computer for everyday work, study, and browsing.", details: "Bring your everyday computing to a desk, a class, or a quiet corner. This portable laptop is a convenient starting point for work and study.", highlights: ["Portable laptop form factor", "Useful for everyday work and study", "A flexible computer for home or travel"], image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1100&q=85", alt: "Open laptop computer" },
  { id: "everyday-smartphone", name: "Everyday Smartphone", category: "Mobile", price: 24999, description: "Keep useful apps, photos, and communication close at hand.", details: "A versatile smartphone for staying in touch, taking everyday photos, and keeping the apps you use most within reach.", highlights: ["Made for everyday communication", "Keep apps and photos close at hand", "Portable companion for daily life"], image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1100&q=85", alt: "Smartphone held in one hand" },
  { id: "portable-tablet", name: "Portable 10-inch Tablet", category: "Mobile", price: 19999, description: "A handy screen for reading, browsing, and streaming.", details: "Enjoy a little more screen space for reading, catching up on shows, and browsing at home or on the go.", highlights: ["Portable touchscreen design", "Useful for reading and browsing", "A convenient screen for streaming"], image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1100&q=85", alt: "Tablet computer on a desk" },
  { id: "fitness-smartwatch", name: "Everyday Smartwatch", category: "Mobile", price: 9999, description: "A wrist-worn companion for notifications and daily routines.", details: "Keep a few useful reminders and notifications close by with a smartwatch designed to fit into your everyday routine.", highlights: ["Wearable everyday design", "Convenient wrist notifications", "Pairs with a compatible smartphone"], image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1100&q=85", alt: "Wristwatch on a clean background" },
  { id: "usb-c-wall-charger", name: "Compact USB-C Wall Charger", category: "Mobile", price: 1999, description: "A compact wall charger for compatible everyday devices.", details: "Keep a charger ready at home, at work, or in your travel bag. Check your device requirements to ensure compatibility before use.", highlights: ["Compact wall-plug design", "USB-C charging for compatible devices", "Handy as a spare or travel charger"], image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1100&q=85", alt: "Compact phone wall charger" },
  { id: "protective-phone-case", name: "Everyday Phone Case", category: "Mobile", price: 1499, description: "A simple protective cover for your compatible smartphone.", details: "Add a practical layer around your phone and keep it easier to grip as you move through the day. Check your phone model before choosing a case.", highlights: ["Protective everyday cover", "Designed for a compatible phone model", "Lightweight and easy to carry"], image: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=1100&q=85", alt: "Smartphone with a protective case" },
  { id: "digital-microwave", name: "Digital Microwave Oven", category: "Home", price: 12999, description: "A practical countertop microwave for quick everyday meals.", details: "Warm leftovers, prepare a snack, or defrost ingredients with a convenient countertop appliance. Check the available space in your kitchen before ordering.", highlights: ["Countertop kitchen appliance", "Useful for reheating and defrosting", "Practical everyday kitchen convenience"], image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=1100&q=85", alt: "Microwave oven in a modern kitchen" },
  { id: "family-air-fryer", name: "Family Air Fryer", category: "Home", price: 9999, description: "A handy countertop appliance for easy everyday cooking.", details: "Add a versatile appliance to your kitchen for preparing a variety of everyday meals. Review the capacity and care instructions before use.", highlights: ["Countertop cooking appliance", "Useful for a range of everyday meals", "Compact alternative to a full-size oven"], image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1100&q=85", alt: "Air fryer cooking appliance" },
  { id: "front-load-washer", name: "Front Load Washing Machine", category: "Home", price: 54999, description: "A dependable laundry appliance for the family home.", details: "Make laundry day easier with a front-loading washing machine. Confirm the available installation space and connections before purchase.", highlights: ["Front-load laundry appliance", "Designed for regular household laundry", "Check dimensions and installation requirements"], image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1100&q=85", alt: "Front-load washing machine in a laundry room" },
  { id: "upright-vacuum-cleaner", name: "Upright Vacuum Cleaner", category: "Home", price: 15999, description: "A practical cleaning appliance for floors and carpets.", details: "Tackle routine home cleaning with a dedicated vacuum cleaner. Review the product's floor compatibility and maintenance instructions for your home.", highlights: ["Upright vacuum cleaner design", "Made for regular home cleaning", "Check floor compatibility and care instructions"], image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1100&q=85", alt: "Vacuum cleaner ready for home cleaning" }
];

const storageKey = "volt-and-co-cart";
const savedKey = "volt-and-co-saved";
const compareKey = "volt-and-co-compare";
const offerProductIds = new Set([
  "soundwave-headphones",
  "studio-gaming-headset",
  "wireless-keyboard",
  "desktop-monitor",
  "fast-charge-power-bank",
  "fitness-smartwatch",
  "family-air-fryer",
  "front-load-washer"
]);
const page = document.body.dataset.page;
const currency = new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 });
const categoryImages = [
  { name: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80", alt: "Wireless headphones" },
  { name: "Computing", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80", alt: "Laptop computer on a desk" },
  { name: "Mobile", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80", alt: "Smartphone" },
  { name: "Home", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=700&q=80", alt: "Comfortable modern home" }
];

function readStoredIds(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    if (!Array.isArray(saved)) return [];
    return [...new Set(saved.filter((id) => products.some((product) => product.id === id)))];
  } catch (error) {
    console.error(`Could not read saved data (${key}).`, error);
    return [];
  }
}

function writeStoredIds(key, ids) {
  try {
    localStorage.setItem(key, JSON.stringify(ids));
    updateHeaderCounts();
    updateCompareDock();
  } catch (error) {
    console.error(`Could not save data (${key}).`, error);
    window.alert("Your selection could not be saved in this browser. Please check your browser storage settings.");
  }
}

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved
      .filter((item) => products.some((product) => product.id === item.id) && Number.isInteger(item.quantity) && item.quantity > 0)
      .map((item) => ({ id: item.id, quantity: item.quantity }));
  } catch (error) {
    console.error("Could not read the saved cart.", error);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(cart));
    updateCartCount();
  } catch (error) {
    console.error("Could not save the cart.", error);
    window.alert("Your cart could not be saved in this browser. Please check your browser storage settings.");
  }
}

function formatPrice(value) {
  return currency.format(value);
}

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function isOffer(product) {
  return offerProductIds.has(product.id);
}

function cartTotals(cart = readCart()) {
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + getProduct(item.id).price * item.quantity, 0);
  return { quantity, total };
}

function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) count.textContent = String(cartTotals().quantity);
}

function updateHeaderCounts() {
  const cartCount = document.getElementById("cart-count");
  const savedCount = document.getElementById("saved-count");
  if (cartCount) cartCount.textContent = String(cartTotals().quantity);
  if (savedCount) savedCount.textContent = String(readStoredIds(savedKey).length);
}

function updateCompareDock() {
  let dock = document.getElementById("compare-dock");
  const compared = readStoredIds(compareKey);
  if (!compared.length) {
    dock?.remove();
    return;
  }
  if (!dock) {
    dock = document.createElement("div");
    dock.id = "compare-dock";
    dock.className = "compare-dock";
    dock.setAttribute("role", "region");
    dock.setAttribute("aria-label", "Product comparison");
    document.body.append(dock);
  }
  dock.innerHTML = `<span>${compared.length} product${compared.length === 1 ? "" : "s"} selected</span><button type="button" class="btn btn-light btn-sm" data-show-compare>Compare now</button><button type="button" class="btn btn-link link-light btn-sm" data-clear-compare>Clear</button>`;
}

function showComparison() {
  const compared = readStoredIds(compareKey).map(getProduct);
  if (!compared.length) return;
  const modalContent = document.getElementById("compare-content");
  modalContent.innerHTML = `<div class="table-responsive"><table class="table align-middle mb-0">
    <thead><tr><th scope="col">Product detail</th>${compared.map((product) => `<th scope="col">${product.name}</th>`).join("")}</tr></thead>
    <tbody>
      <tr><th scope="row">Image</th>${compared.map((product) => `<td><img src="${product.image}" alt="${product.alt}" class="compare-image"></td>`).join("")}</tr>
      <tr><th scope="row">Category</th>${compared.map((product) => `<td>${product.category}</td>`).join("")}</tr>
      <tr><th scope="row">Price</th>${compared.map((product) => `<td class="fw-bold">${formatPrice(product.price)}</td>`).join("")}</tr>
      <tr><th scope="row">Details</th>${compared.map((product) => `<td>${product.description}</td>`).join("")}</tr>
      <tr><th scope="row">Add to cart</th>${compared.map((product) => `<td><button class="btn btn-dark btn-sm" type="button" data-add-to-cart="${product.id}">Add</button></td>`).join("")}</tr>
    </tbody>
  </table></div>`;
  bootstrap.Modal.getOrCreateInstance(document.getElementById("compare-modal")).show();
}

function initializeAddToCart() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-to-cart]");
    if (!button) return;
    const cart = readCart();
    const existing = cart.find((item) => item.id === button.dataset.addToCart);
    const quantityInputId = button.dataset.quantityInput;
    const quantityInput = quantityInputId ? document.getElementById(quantityInputId) : null;
    const quantity = quantityInput ? Number(quantityInput.value) : 1;
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
      window.alert("Choose a quantity between 1 and 99.");
      return;
    }
    if (existing && existing.quantity + quantity > 99) {
      window.alert("You can add up to 99 of this product.");
      return;
    }
    if (existing) existing.quantity += quantity;
    else cart.push({ id: button.dataset.addToCart, quantity });
    saveCart(cart);
    button.textContent = "Added";
    button.disabled = true;
    window.setTimeout(() => {
      button.textContent = "Add to cart";
      button.disabled = false;
    }, 900);
  });
}

function initializeProductActions() {
  document.addEventListener("click", (event) => {
    const saveButton = event.target.closest("[data-save-product]");
    if (saveButton) {
      const id = saveButton.dataset.saveProduct;
      const saved = readStoredIds(savedKey);
      const next = saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id];
      writeStoredIds(savedKey, next);
      updateProductActionButtons();
      if (page === "home") renderSavedProducts();
      if (page === "products" && new URLSearchParams(window.location.search).get("saved") === "true") filterVisibleProducts();
      return;
    }
    const compareButton = event.target.closest("[data-compare-product]");
    if (compareButton) {
      const id = compareButton.dataset.compareProduct;
      const compared = readStoredIds(compareKey);
      if (compared.includes(id)) {
        writeStoredIds(compareKey, compared.filter((item) => item !== id));
      } else if (compared.length >= 3) {
        window.alert("Compare up to three products at a time. Remove one to add another.");
      } else {
        writeStoredIds(compareKey, [...compared, id]);
      }
      updateProductActionButtons();
      return;
    }
    if (event.target.closest("[data-show-compare]")) showComparison();
    if (event.target.closest("[data-clear-compare]")) {
      writeStoredIds(compareKey, []);
      updateProductActionButtons();
    }
  });
}

function updateProductActionButtons() {
  const saved = readStoredIds(savedKey);
  const compared = readStoredIds(compareKey);
  document.querySelectorAll("[data-save-product]").forEach((button) => {
    const isSaved = saved.includes(button.dataset.saveProduct);
    button.textContent = isSaved ? "♥ Saved" : "♡ Save";
    button.setAttribute("aria-pressed", String(isSaved));
  });
  document.querySelectorAll("[data-compare-product]").forEach((button) => {
    const isCompared = compared.includes(button.dataset.compareProduct);
    button.textContent = isCompared ? "Selected" : "Compare";
    button.setAttribute("aria-pressed", String(isCompared));
  });
}

function renderHeader() {
  const active = page === "home" ? "index.html" : `${page}.html`;
  const links = [
    ["Shop", "products.html"],
    ["About", "about.html"],
    ["Contact", "contact.html"]
  ];
  document.getElementById("site-header").innerHTML = `
    <div class="store-topbar">
      <div class="container d-flex justify-content-between align-items-center">
        <span>Good tech, thoughtfully picked.</span>
        <a href="contact.html">Need a hand? Talk to us <span aria-hidden="true">→</span></a>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div class="container">
        <a class="navbar-brand d-inline-flex align-items-center gap-2 fw-bold fs-4" href="index.html" aria-label="VOLTIVA home">
          <img class="brand-logo" src="https://images.openai.com/static-rsc-4/Ka4wd1jZ69kz0v2vWTgJfWMlP3QeKAgVXAaN-hX8WtqBAabj5jgPV0B-SW_pbdKqtwPfYA7DzMZT2qeqVxgECkDkZeAmbzmstaB69Ljfw2Mx8nay5tC9r0100GLF1SdZCd5V9L5OmV8olL-e5uHnyxSSisyiTTlnVT4IQH7fWf8TIWxnI7l9wOMWN2n0KJ3k?purpose=fullsize" alt="">
          <span>VOLTIVA</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navigation" aria-controls="main-navigation" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <form id="site-search" class="store-search mx-lg-4 my-3 my-lg-0" action="products.html" method="get" role="search">
          <label class="visually-hidden" for="store-search-input">Search the shop</label>
          <input id="store-search-input" name="q" type="search" class="form-control" placeholder="Search products, brands and more">
          <button class="btn btn-dark" type="submit" aria-label="Search">Search</button>
        </form>
        <div class="collapse navbar-collapse" id="main-navigation">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            ${links.map(([label, href]) => `<li class="nav-item"><a class="nav-link${active === href ? " active fw-semibold" : ""}" href="${href}"${active === href ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}
            <li class="nav-item"><a class="nav-link" href="products.html?saved=true">Saved <span class="badge rounded-pill text-bg-light" id="saved-count">0</span></a></li>
            <li class="nav-item"><a class="btn btn-dark ms-lg-2" href="cart.html">Cart <span class="badge text-bg-light ms-1" id="cart-count" aria-label="items in cart">0</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="category-nav border-bottom" aria-label="Product categories">
      <div class="container d-flex gap-4 overflow-x-auto py-2">
        ${["Audio", "Computing", "Mobile", "Home"].map((category) => `<a href="products.html?category=${encodeURIComponent(category)}">${category}</a>`).join("")}
        <a href="products.html">Shop all</a>
      </div>
    </nav>`;
  document.getElementById("site-search").addEventListener("submit", (event) => {
    const input = document.getElementById("store-search-input");
    if (!input.value.trim()) {
      event.preventDefault();
      input.focus();
    }
  });
  updateHeaderCounts();
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <footer class="container py-4">
      <div class="row align-items-center gy-3">
        <div class="col-md-6"><a class="text-decoration-none fw-bold fs-5" href="index.html">VOLTIVA</a><p class="mb-0 mt-1 text-white-50">Thoughtful tech for everyday life.</p></div>
        <div class="col-md-6 text-md-end"><a href="products.html" class="me-3">Shop</a><a href="about.html" class="me-3">About</a><a href="contact.html">Contact</a><p class="mb-0 mt-2 text-white-50">© ${new Date().getFullYear()} VOLTIVA</p></div>
      </div>
    </footer>`;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal fade" id="compare-modal" tabindex="-1" aria-labelledby="compare-modal-title" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header"><h2 class="modal-title fs-5 fw-bold" id="compare-modal-title">Compare products</h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
          <div id="compare-content" class="modal-body"></div>
        </div>
      </div>
    </div>`);
}

function productCard(product) {
  const onOffer = isOffer(product);
  const saved = readStoredIds(savedKey).includes(product.id);
  const compared = readStoredIds(compareKey).includes(product.id);
  return `<div class="col-sm-6 col-lg-4">
    <article data-product="${product.id}" class="card h-100 border-0 shadow-sm overflow-hidden">
      <div class="product-image-wrap">
        ${onOffer ? '<span class="sale-badge">Special offer</span>' : ""}
        <a href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View details for ${product.name}">
          <img src="${product.image}" class="card-img-top" alt="${product.alt}" loading="lazy">
        </a>
      </div>
      <div class="card-body d-flex flex-column p-3 p-lg-4">
        <p class="small text-uppercase fw-semibold text-secondary mb-2">${product.category}</p>
        <h3 class="h5 fw-bold"><a class="product-title-link" href="product.html?id=${encodeURIComponent(product.id)}">${product.name}</a></h3>
        <p class="text-secondary">${product.description}</p>
        <div class="mt-auto">
          <div class="d-flex align-items-center gap-2 mb-3"><span class="fw-bold fs-5">${formatPrice(product.price)}</span></div>
          <div class="d-flex flex-wrap align-items-center gap-2">
            <button class="btn btn-dark flex-grow-1" type="button" data-add-to-cart="${product.id}">Add to cart</button>
            <button class="btn btn-outline-secondary" type="button" data-save-product="${product.id}" aria-pressed="${saved}">${saved ? "♥ Saved" : "♡ Save"}</button>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <a class="btn btn-link link-secondary btn-sm px-0 mt-2" href="product.html?id=${encodeURIComponent(product.id)}">View details <span aria-hidden="true">→</span></a>
            <button class="btn btn-link link-secondary btn-sm px-0 mt-2" type="button" data-compare-product="${product.id}" aria-pressed="${compared}">${compared ? "Selected" : "Compare"}</button>
          </div>
        </div>
      </div>
    </article>
  </div>`;
}

function renderProductGrid(target, items, emptyMessage = "No products match your search. Try another name or category.") {
  target.innerHTML = items.length
    ? items.map(productCard).join("")
    : `<div class="col-12"><p class="border rounded-4 p-4 mb-0">${emptyMessage}</p></div>`;
  updateCompareDock();
}

function filterVisibleProducts() {
  const search = document.getElementById("product-search");
  const category = document.getElementById("category-filter");
  const list = document.getElementById("product-list");
  const count = document.getElementById("product-count");
  if (!search || !category || !list || !count) return;
  const query = search.value.trim().toLowerCase();
  const selectedCategory = category.value;
  const savedOnly = new URLSearchParams(window.location.search).get("saved") === "true";
  const saved = savedOnly ? readStoredIds(savedKey) : [];
  const filtered = products.filter((product) => {
    const matchesText = `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(query);
    return matchesText && (selectedCategory === "all" || product.category === selectedCategory) && (!savedOnly || saved.includes(product.id));
  });
  count.textContent = savedOnly ? `Showing ${filtered.length} saved product${filtered.length === 1 ? "" : "s"}` : `Showing ${filtered.length} of ${products.length} products`;
  const emptyMessage = savedOnly && !saved.length
    ? "You haven’t saved any products yet. Choose Save on a product to keep it here."
    : "No products match your search. Try another name or category.";
  renderProductGrid(list, filtered, emptyMessage);
}

function initializeProducts() {
  const search = document.getElementById("product-search");
  const category = document.getElementById("category-filter");
  const params = new URLSearchParams(window.location.search);
  search.value = params.get("q") || "";
  if (products.some((product) => product.category === params.get("category"))) {
    category.value = params.get("category");
  }
  search.addEventListener("input", filterVisibleProducts);
  category.addEventListener("change", filterVisibleProducts);
  document.getElementById("product-filters").addEventListener("reset", () => {
    window.setTimeout(filterVisibleProducts, 0);
  });
  filterVisibleProducts();
}

function initializeProductDetails() {
  const container = document.getElementById("product-detail");
  const params = new URLSearchParams(window.location.search);
  const product = getProduct(params.get("id"));
  if (!product) {
    document.title = "Product not found | VOLTIVA";
    container.innerHTML = `<div class="border rounded-4 p-5 text-center"><p class="text-uppercase fw-semibold text-secondary">Not found</p><h1 class="h3 fw-bold">We couldn’t find that product.</h1><p class="text-secondary">It may have moved, or the link may be out of date.</p><a class="btn btn-dark" href="products.html">Back to all products</a></div>`;
    document.getElementById("related-products-section").classList.add("d-none");
    return;
  }

  document.title = `${product.name} | VOLTIVA`;
  const onOffer = isOffer(product);
  const isSaved = readStoredIds(savedKey).includes(product.id);
  container.innerHTML = `
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item"><a href="products.html?category=${encodeURIComponent(product.category)}">${product.category}</a></li>
        <li class="breadcrumb-item active" aria-current="page">${product.name}</li>
      </ol>
    </nav>
    <div class="row g-4 g-lg-5 align-items-start">
      <div class="col-lg-6">
        <div class="detail-image-frame">
          ${onOffer ? '<span class="sale-badge">Special offer</span>' : ""}
          <img src="${product.image}" class="img-fluid" alt="${product.alt}">
        </div>
      </div>
      <div class="col-lg-6">
        <p class="text-uppercase fw-semibold text-secondary mb-2">${product.category}</p>
        <h1 class="display-6 fw-bold">${product.name}</h1>
        <p class="lead text-secondary">${product.description}</p>
        <div class="d-flex align-items-center flex-wrap gap-3 my-4">
          <span class="display-6 fw-bold">${formatPrice(product.price)}</span>
          ${onOffer ? '<span class="badge rounded-pill text-bg-success">Special offer</span>' : ""}
        </div>
        <p class="detail-description">${product.details}</p>
        <div class="border rounded-4 p-4 my-4">
          <h2 class="h5 fw-bold mb-3">Why you’ll like it</h2>
          <ul class="detail-highlights mb-0">${product.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}</ul>
        </div>
        <div class="d-flex flex-wrap align-items-end gap-3">
          <div>
            <label for="product-quantity" class="form-label fw-semibold">Quantity</label>
            <input id="product-quantity" class="form-control form-control-lg detail-quantity" type="number" min="1" max="99" value="1" inputmode="numeric">
          </div>
          <button class="btn btn-dark btn-lg flex-grow-1" type="button" data-add-to-cart="${product.id}" data-quantity-input="product-quantity">Add to cart</button>
          <button class="btn btn-outline-secondary btn-lg" type="button" data-save-product="${product.id}" aria-pressed="${isSaved}">${isSaved ? "♥ Saved" : "♡ Save"}</button>
        </div>
        <p class="small text-secondary mt-3 mb-0">Product reference: ${product.id}</p>
      </div>
    </div>`;

  const related = products.filter((item) => item.category === product.category && item.id !== product.id);
  const recommendations = related.length ? related : products.filter((item) => item.id !== product.id).slice(0, 3);
  renderProductGrid(document.getElementById("related-products"), recommendations.slice(0, 3));
}

function initializeHome() {
  renderCategoryTiles();
  renderProductGrid(document.getElementById("deal-products"), products.filter(isOffer).slice(0, 4));
  renderProductGrid(document.getElementById("featured-products"), products.slice(2, 8));
  renderSavedProducts();
}

function renderCategoryTiles() {
  document.getElementById("category-tiles").innerHTML = categoryImages.map((category) => `
    <div class="col-6 col-lg-3">
      <a class="category-tile" href="products.html?category=${encodeURIComponent(category.name)}">
        <img src="${category.image}" alt="${category.alt}" loading="lazy">
        <span>${category.name}<span aria-hidden="true"> →</span></span>
      </a>
    </div>`).join("");
}

function renderSavedProducts() {
  const section = document.getElementById("saved-section");
  const saved = readStoredIds(savedKey).map(getProduct);
  section.classList.toggle("d-none", saved.length === 0);
  renderProductGrid(document.getElementById("saved-products"), saved);
}

function initializeCart() {
  const container = document.getElementById("cart-content");
  function render() {
    const cart = readCart();
    const { total } = cartTotals(cart);
    if (!cart.length) {
      container.innerHTML = `<div class="border rounded-4 p-5 text-center"><h2 class="h4 fw-bold">Your cart is ready for something good.</h2><p class="text-secondary">Browse the shop and add a few favorites to get started.</p><a class="btn btn-dark" href="products.html">Browse products</a></div>`;
      return;
    }
    container.innerHTML = `<div class="row g-4">
      <div class="col-lg-8"><div class="border rounded-4 p-3 p-md-4">
        ${cart.map((item) => {
          const product = getProduct(item.id);
          return `<div class="row align-items-center g-3 py-3 border-bottom" data-cart-row="${product.id}">
            <div class="col-3 col-md-2"><img src="${product.image}" alt="${product.alt}" class="img-fluid rounded-3"></div>
            <div class="col-9 col-md-4"><h2 class="h6 fw-bold mb-1">${product.name}</h2><span class="text-secondary">${formatPrice(product.price)}</span></div>
            <div class="col-7 col-md-3"><label class="visually-hidden" for="quantity-${product.id}">Quantity for ${product.name}</label><input class="form-control" id="quantity-${product.id}" type="number" min="1" max="99" value="${item.quantity}" data-quantity="${product.id}"></div>
            <div class="col-5 col-md-3 text-end"><button class="btn btn-link link-danger p-0" type="button" data-remove="${product.id}">Remove</button></div>
          </div>`;
        }).join("")}
      </div></div>
      <div class="col-lg-4"><div class="border rounded-4 p-4">
        <h2 class="h5 fw-bold">Order summary</h2><div class="d-flex justify-content-between py-3 border-bottom"><span>Subtotal</span><strong>${formatPrice(total)}</strong></div>
        <p class="small text-secondary mt-3">Shipping and any applicable taxes are calculated at checkout.</p>
        <a class="btn btn-dark btn-lg w-100" href="checkout.html">Continue to checkout</a>
        <a class="btn btn-outline-dark w-100 mt-2" href="products.html">Continue shopping</a>
      </div></div>
    </div>`;
  }
  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove]");
    if (!button) return;
    saveCart(readCart().filter((item) => item.id !== button.dataset.remove));
    render();
  });
  container.addEventListener("change", (event) => {
    const input = event.target.closest("[data-quantity]");
    if (!input) return;
    const quantity = Number(input.value);
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
      input.setCustomValidity("Enter a quantity from 1 to 99.");
      input.reportValidity();
      input.setCustomValidity("");
      input.value = readCart().find((item) => item.id === input.dataset.quantity)?.quantity || 1;
      return;
    }
    saveCart(readCart().map((item) => item.id === input.dataset.quantity ? { ...item, quantity } : item));
    render();
  });
  render();
}

function initializeCheckout() {
  const container = document.getElementById("checkout-content");
  const cart = readCart();
  if (!cart.length) {
    container.innerHTML = `<div class="border rounded-4 p-5 text-center"><h2 class="h4 fw-bold">Your cart is empty.</h2><p class="text-secondary">Add an item before starting checkout.</p><a class="btn btn-dark" href="products.html">Browse products</a></div>`;
    return;
  }
  const { total } = cartTotals(cart);
  container.innerHTML = `<div class="row g-4">
    <div class="col-lg-7">
      <form id="checkout-form" class="border rounded-4 p-4 p-lg-5">
        <h2 class="h4 fw-bold mb-4">Delivery details</h2>
        <div class="row g-3">
          <div class="col-md-6"><label class="form-label" for="checkout-name">Full name</label><input class="form-control" id="checkout-name" name="name" autocomplete="name" required></div>
          <div class="col-md-6"><label class="form-label" for="checkout-email">Email address</label><input class="form-control" id="checkout-email" name="email" type="email" autocomplete="email" required></div>
          <div class="col-12"><label class="form-label" for="checkout-address">Street address</label><input class="form-control" id="checkout-address" name="address" autocomplete="street-address" required></div>
          <div class="col-md-6"><label class="form-label" for="checkout-city">City</label><input class="form-control" id="checkout-city" name="city" autocomplete="address-level2" required></div>
          <div class="col-md-6"><label class="form-label" for="checkout-postcode">Postal code</label><input class="form-control" id="checkout-postcode" name="postcode" autocomplete="postal-code" required></div>
          <div class="col-12"><label class="form-label" for="checkout-payment">Payment method</label><select id="checkout-payment" name="payment" class="form-select" required><option value="">Choose a payment method</option><option>Card on delivery</option><option>Cash on delivery</option></select></div>
        </div>
        <p class="small text-secondary mt-3">Demo checkout only: no payment is collected and no order is sent to a server.</p>
        <button class="btn btn-dark btn-lg w-100 mt-2" type="submit">Place demo order · ${formatPrice(total)}</button>
      </form>
    </div>
    <div class="col-lg-5"><div class="border rounded-4 p-4">
      <h2 class="h5 fw-bold">Your order</h2>
      ${cart.map((item) => { const product = getProduct(item.id); return `<div class="d-flex justify-content-between gap-3 py-2 border-bottom"><span>${product.name} <span class="text-secondary">× ${item.quantity}</span></span><strong>${formatPrice(product.price * item.quantity)}</strong></div>`; }).join("")}
      <div class="d-flex justify-content-between pt-3"><strong>Total</strong><strong>${formatPrice(total)}</strong></div>
    </div></div>
  </div>`;
  container.querySelector("#checkout-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const reference = `VC-${Date.now().toString().slice(-6)}`;
    saveCart([]);
    container.innerHTML = `<div class="border rounded-4 p-5 text-center"><p class="text-uppercase fw-semibold text-secondary">Order received</p><h2 class="display-6 fw-bold">Thanks for shopping with us!</h2><p class="lead">Your demo order reference is <strong>${reference}</strong>.</p><p class="text-secondary">This was a front-end demonstration; your order was not transmitted and no payment was taken.</p><a href="products.html" class="btn btn-dark">Back to the shop</a></div>`;
  });
}

function initializeContact() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    document.getElementById("contact-feedback").textContent = "Thanks for reaching out! This demo form does not send messages to a server.";
    form.reset();
  });
}

renderHeader();
renderFooter();
initializeAddToCart();
initializeProductActions();

if (page === "home") initializeHome();
if (page === "products") initializeProducts();
if (page === "product") initializeProductDetails();
if (page === "cart") initializeCart();
if (page === "checkout") initializeCheckout();
if (page === "contact") initializeContact();
