const STORAGE_KEYS = {
  menu: "lt_menu",
  cart: "lt_cart",
  orders: "lt_orders",
  reservations: "lt_reservations",
  settings: "lt_settings",
};
const defaultMenu = [
  {
    id: 1,
    name: "Truffle Tagliatelle",
    category: "Popular",
    price: 19,
    description:
      "Hand-cut pasta, parmesan cream, black truffle and fresh herbs.",
    tag: "Chef's choice",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Classic Burger",
    category: "Main",
    price: 15,
    description: "Angus beef, cheddar, lettuce, tomato and house sauce.",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    category: "Main",
    price: 14,
    description: "San Marzano tomato, mozzarella and fresh basil.",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Burrata & Tomatoes",
    category: "Starters",
    price: 12,
    description: "Creamy burrata, heirloom tomatoes, basil oil and sea salt.",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Grilled Salmon",
    category: "Main",
    price: 22,
    description: "Roasted vegetables, lemon butter and fresh garden herbs.",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Tiramisu",
    category: "Desserts",
    price: 9,
    description: "Espresso-soaked ladyfingers, mascarpone and cocoa.",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Lemon Cheesecake",
    category: "Desserts",
    price: 8,
    description: "Silky cheesecake, lemon curd and almond crumble.",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "House Lemonade",
    category: "Drinks",
    price: 5,
    description: "Fresh lemon, mint and a touch of wildflower honey.",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80",
  },
];
function getData(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}
function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getMenu() {
  return getData(STORAGE_KEYS.menu, defaultMenu);
}
function getCart() {
  return getData(STORAGE_KEYS.cart, []);
}
function saveCart(v) {
  setData(STORAGE_KEYS.cart, v);
}
function getOrders() {
  return getData(STORAGE_KEYS.orders, []);
}
function saveOrders(v) {
  setData(STORAGE_KEYS.orders, v);
}
function getReservations() {
  return getData(STORAGE_KEYS.reservations, []);
}
function saveReservations(v) {
  setData(STORAGE_KEYS.reservations, v);
}
