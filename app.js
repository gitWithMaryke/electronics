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
    updateHeaderCounts();
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
  dock.innerHTML = `<span>${compared.length} product${compared.length === 1 ? "" : "s"} selected</span><button type="button" class="button button-light button-small" data-show-compare>Compare now</button><button type="button" class="button button-quiet button-small" data-clear-compare>Clear</button>`;
}

function showComparison() {
  const compared = readStoredIds(compareKey).map(getProduct);
  if (!compared.length) return;
  const modalContent = document.getElementById("compare-content");
  modalContent.innerHTML = `<div class="comparison-table-wrap"><table class="comparison-table">
    <thead><tr><th scope="col">Product detail</th>${compared.map((product) => `<th scope="col">${product.name}</th>`).join("")}</tr></thead>
    <tbody>
      <tr><th scope="row">Image</th>${compared.map((product) => `<td><img src="${product.image}" alt="${product.alt}" class="compare-image"></td>`).join("")}</tr>
      <tr><th scope="row">Category</th>${compared.map((product) => `<td>${product.category}</td>`).join("")}</tr>
      <tr><th scope="row">Price</th>${compared.map((product) => `<td class="price-text">${formatPrice(product.price)}</td>`).join("")}</tr>
      <tr><th scope="row">Details</th>${compared.map((product) => `<td>${product.description}</td>`).join("")}</tr>
      <tr><th scope="row">Add to cart</th>${compared.map((product) => `<td><button class="button button-dark button-small" type="button" data-add-to-cart="${product.id}">Add</button></td>`).join("")}</tr>
    </tbody>
  </table></div>`;
  document.getElementById("comparison-dialog").showModal();
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
      updateCompareDock();
      return;
    }
    if (event.target.closest("[data-show-compare]")) showComparison();
    if (event.target.closest("[data-close-compare]")) document.getElementById("comparison-dialog").close();
    if (event.target.closest("[data-clear-compare]")) {
      writeStoredIds(compareKey, []);
      updateProductActionButtons();
      updateCompareDock();
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
      <div class="page-width topbar-content">
        <span>Good tech, thoughtfully picked.</span>
        <a href="contact.html">Need a hand? Talk to us <span aria-hidden="true">→</span></a>
      </div>
    </div>
    <nav class="main-navigation" aria-label="Main navigation">
      <div class="page-width navigation-content">
        <a class="brand-link" href="index.html" aria-label="VOLTIVA home">
          <img class="brand-logo" src="https://images.openai.com/static-rsc-4/Ka4wd1jZ69kz0v2vWTgJfWMlP3QeKAgVXAaN-hX8WtqBAabj5jgPV0B-SW_pbdKqtwPfYA7DzMZT2qeqVxgECkDkZeAmbzmstaB69Ljfw2Mx8nay5tC9r0100GLF1SdZCd5V9L5OmV8olL-e5uHnyxSSisyiTTlnVT4IQH7fWf8TIWxnI7l9wOMWN2n0KJ3k?purpose=fullsize" alt="">
          <span>VOLTIVA</span>
        </a>
        <button class="menu-toggle" type="button" aria-controls="main-navigation-links" aria-expanded="false" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
        <form id="site-search" class="store-search" action="products.html" method="get" role="search">
          <label class="screen-reader-only" for="store-search-input">Search the shop</label>
          <input id="store-search-input" name="q" type="search" placeholder="Search products, brands and more">
          <button class="button button-dark" type="submit" aria-label="Search">Search</button>
        </form>
        <div class="navigation-links" id="main-navigation-links">
          <ul>
            ${links.map(([label, href]) => `<li><a class="nav-link${active === href ? " is-current" : ""}" href="${href}"${active === href ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}
            <li><a class="nav-link" href="products.html?saved=true">Saved <span class="count-badge" id="saved-count">0</span></a></li>
            <li><a class="button button-dark cart-link" href="cart.html">Cart <span class="count-badge" id="cart-count" aria-label="items in cart">0</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="category-nav" aria-label="Product categories">
      <div class="page-width category-nav-links">
        ${["Audio", "Computing", "Mobile", "Home"].map((category) => `<a href="products.html?category=${encodeURIComponent(category)}">${category}</a>`).join("")}
        <a href="products.html">Shop all</a>
      </div>
    </nav>`;
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("main-navigation-links");
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
  });
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
    <footer class="page-width footer-content">
      <div><a class="footer-brand" href="index.html">VOLTIVA</a><p>Thoughtful tech for everyday life.</p></div>
      <div class="footer-links"><div><a href="products.html">Shop</a><a href="about.html">About</a><a href="contact.html">Contact</a></div><p>© ${new Date().getFullYear()} VOLTIVA</p></div>
    </footer>`;
  document.body.insertAdjacentHTML("beforeend", `
    <dialog class="comparison-dialog" id="comparison-dialog" aria-labelledby="comparison-dialog-title">
      <div class="dialog-heading"><h2 id="comparison-dialog-title">Compare products</h2><button class="dialog-close" type="button" data-close-compare aria-label="Close">×</button></div>
      <div id="compare-content"></div>
    </dialog>`);
}

function productCard(product) {
  const onOffer = isOffer(product);
  const saved = readStoredIds(savedKey).includes(product.id);
  const compared = readStoredIds(compareKey).includes(product.id);
  return `<article data-product="${product.id}" class="product-card">
      <div class="product-image-wrap">
        ${onOffer ? '<span class="sale-badge">Special offer</span>' : ""}
        <a href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View details for ${product.name}">
          <img src="${product.image}" alt="${product.alt}" loading="lazy">
        </a>
      </div>
      <div class="product-card-content">
        <p class="eyebrow">${product.category}</p>
        <h3><a class="product-title-link" href="product.html?id=${encodeURIComponent(product.id)}">${product.name}</a></h3>
        <p class="muted-copy">${product.description}</p>
        <div class="product-card-actions">
          <p class="price-text">${formatPrice(product.price)}</p>
          <div class="button-row">
            <button class="button button-dark grow-button" type="button" data-add-to-cart="${product.id}">Add to cart</button>
            <button class="button button-outline" type="button" data-save-product="${product.id}" aria-pressed="${saved}">${saved ? "♥ Saved" : "♡ Save"}</button>
          </div>
          <div class="card-secondary-actions">
            <a class="text-link" href="product.html?id=${encodeURIComponent(product.id)}">View details <span aria-hidden="true">→</span></a>
            <button class="text-button" type="button" data-compare-product="${product.id}" aria-pressed="${compared}">${compared ? "Selected" : "Compare"}</button>
          </div>
        </div>
      </div>
    </article>`;
}

function renderProductGrid(target, items, emptyMessage = "No products match your search. Try another name or category.") {
  target.innerHTML = items.length
    ? items.map(productCard).join("")
    : `<p class="empty-state">${emptyMessage}</p>`;
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
    container.innerHTML = `    <div class="empty-state centered-panel"><p class="eyebrow">Not found</p><h1>We couldn’t find that product.</h1><p class="muted-copy">It may have moved, or the link may be out of date.</p><a class="button button-dark" href="products.html">Back to all products</a></div>`;
    document.getElementById("related-products-section").classList.add("is-hidden");
    return;
  }

  document.title = `${product.name} | VOLTIVA`;
  const onOffer = isOffer(product);
  const isSaved = readStoredIds(savedKey).includes(product.id);
  container.innerHTML = `
    <nav aria-label="Breadcrumb" class="breadcrumbs">
      <ol>
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html?category=${encodeURIComponent(product.category)}">${product.category}</a></li>
        <li aria-current="page">${product.name}</li>
      </ol>
    </nav>
    <div class="product-detail-layout">
      <div>
        <div class="detail-image-frame">
          ${onOffer ? '<span class="sale-badge">Special offer</span>' : ""}
          <img src="${product.image}" alt="${product.alt}">
        </div>
      </div>
      <div class="product-detail-copy">
        <p class="eyebrow">${product.category}</p>
        <h1>${product.name}</h1>
        <p class="intro muted-copy">${product.description}</p>
        <div class="detail-price-row">
          <span class="price-text large-price">${formatPrice(product.price)}</span>
          ${onOffer ? '<span class="offer-pill">Special offer</span>' : ""}
        </div>
        <p class="detail-description">${product.details}</p>
        <div class="info-panel highlights-panel">
          <h2>Why you’ll like it</h2>
          <ul class="detail-highlights">${product.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}</ul>
        </div>
        <div class="detail-actions">
          <div class="quantity-field">
            <label for="product-quantity">Quantity</label>
            <input id="product-quantity" type="number" min="1" max="99" value="1" inputmode="numeric">
          </div>
          <button class="button button-dark button-large grow-button" type="button" data-add-to-cart="${product.id}" data-quantity-input="product-quantity">Add to cart</button>
          <button class="button button-outline button-large" type="button" data-save-product="${product.id}" aria-pressed="${isSaved}">${isSaved ? "♥ Saved" : "♡ Save"}</button>
        </div>
        <p class="fine-print">Product reference: ${product.id}</p>
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
    <a class="category-tile" href="products.html?category=${encodeURIComponent(category.name)}">
      <img src="${category.image}" alt="${category.alt}" loading="lazy">
      <span>${category.name}<span aria-hidden="true"> →</span></span>
    </a>`).join("");
}

function renderSavedProducts() {
  const section = document.getElementById("saved-section");
  const saved = readStoredIds(savedKey).map(getProduct);
  section.classList.toggle("is-hidden", saved.length === 0);
  renderProductGrid(document.getElementById("saved-products"), saved);
}

function initializeCart() {
  const container = document.getElementById("cart-content");
  function render() {
    const cart = readCart();
    const { total } = cartTotals(cart);
    if (!cart.length) {
      container.innerHTML = `<div class="empty-state centered-panel"><h2>Your cart is ready for something good.</h2><p class="muted-copy">Browse the shop and add a few favorites to get started.</p><a class="button button-dark" href="products.html">Browse products</a></div>`;
      return;
    }
    container.innerHTML = `<div class="cart-layout">
      <div class="info-panel cart-items">
        ${cart.map((item) => {
          const product = getProduct(item.id);
          return `<div class="cart-row" data-cart-row="${product.id}">
            <img src="${product.image}" alt="${product.alt}">
            <div class="cart-product-name"><h2>${product.name}</h2><span class="muted-copy">${formatPrice(product.price)}</span></div>
            <div class="cart-quantity"><label class="screen-reader-only" for="quantity-${product.id}">Quantity for ${product.name}</label><input id="quantity-${product.id}" type="number" min="1" max="99" value="${item.quantity}" data-quantity="${product.id}"></div>
            <div class="cart-remove"><button class="text-button danger-link" type="button" data-remove="${product.id}">Remove</button></div>
          </div>`;
        }).join("")}
      </div>
      <div class="info-panel order-summary">
        <h2>Order summary</h2><div class="summary-line"><span>Subtotal</span><strong>${formatPrice(total)}</strong></div>
        <p class="fine-print">Shipping and any applicable taxes are calculated at checkout.</p>
        <a class="button button-dark button-full" href="checkout.html">Continue to checkout</a>
        <a class="button button-outline button-full" href="products.html">Continue shopping</a>
      </div>
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
    container.innerHTML = `<div class="empty-state centered-panel"><h2>Your cart is empty.</h2><p class="muted-copy">Add an item before starting checkout.</p><a class="button button-dark" href="products.html">Browse products</a></div>`;
    return;
  }
  const { total } = cartTotals(cart);
  container.innerHTML = `<div class="checkout-layout">
    <div>
      <form id="checkout-form" class="form-panel">
        <h2>Delivery details</h2>
        <div class="checkout-fields">
          <div class="field-group"><label for="checkout-name">Full name</label><input id="checkout-name" name="name" autocomplete="name" required></div>
          <div class="field-group"><label for="checkout-email">Email address</label><input id="checkout-email" name="email" type="email" autocomplete="email" required></div>
          <div class="field-group field-wide"><label for="checkout-address">Street address</label><input id="checkout-address" name="address" autocomplete="street-address" required></div>
          <div class="field-group"><label for="checkout-city">City</label><input id="checkout-city" name="city" autocomplete="address-level2" required></div>
          <div class="field-group"><label for="checkout-postcode">Postal code</label><input id="checkout-postcode" name="postcode" autocomplete="postal-code" required></div>
          <div class="field-group field-wide"><label for="checkout-payment">Payment method</label><select id="checkout-payment" name="payment" required><option value="">Choose a payment method</option><option>Card on delivery</option><option>Cash on delivery</option></select></div>
        </div>
        <p class="fine-print">Demo checkout only: no payment is collected and no order is sent to a server.</p>
        <button class="button button-dark button-large button-full" type="submit">Place demo order · ${formatPrice(total)}</button>
      </form>
    </div>
    <div class="info-panel order-summary">
      <h2>Your order</h2>
      ${cart.map((item) => { const product = getProduct(item.id); return `<div class="summary-line"><span>${product.name} <span class="muted-copy">× ${item.quantity}</span></span><strong>${formatPrice(product.price * item.quantity)}</strong></div>`; }).join("")}
      <div class="summary-line summary-total"><strong>Total</strong><strong>${formatPrice(total)}</strong></div>
    </div>
  </div>`;
  container.querySelector("#checkout-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const reference = `VC-${Date.now().toString().slice(-6)}`;
    saveCart([]);
    container.innerHTML = `<div class="empty-state centered-panel"><p class="eyebrow">Order received</p><h2>Thanks for shopping with us!</h2><p class="intro">Your demo order reference is <strong>${reference}</strong>.</p><p class="muted-copy">This was a front-end demonstration; your order was not transmitted and no payment was taken.</p><a href="products.html" class="button button-dark">Back to the shop</a></div>`;
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

function initializeCarousel() {
  const carousel = document.getElementById("home-carousel");
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll(".hero-slide")];
  const indicators = [...carousel.querySelectorAll("[data-slide-to]")];
  let activeIndex = 0;

  function showSlide(index) {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
      indicators[slideIndex].classList.toggle("is-active", isActive);
      if (isActive) indicators[slideIndex].setAttribute("aria-current", "true");
      else indicators[slideIndex].removeAttribute("aria-current");
    });
  }

  carousel.addEventListener("click", (event) => {
    const control = event.target.closest("[data-slide]");
    const indicator = event.target.closest("[data-slide-to]");
    if (indicator) showSlide(Number(indicator.dataset.slideTo));
    if (control) showSlide(activeIndex + (control.dataset.slide === "next" ? 1 : -1));
  });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setInterval(() => showSlide(activeIndex + 1), 6000);
  }
  showSlide(0);
}

renderHeader();
renderFooter();
initializeAddToCart();
initializeProductActions();

if (page === "home") {
  initializeHome();
  initializeCarousel();
}
if (page === "products") initializeProducts();
if (page === "product") initializeProductDetails();
if (page === "cart") initializeCart();
if (page === "checkout") initializeCheckout();
if (page === "contact") initializeContact();
