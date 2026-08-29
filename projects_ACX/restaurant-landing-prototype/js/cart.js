function addToCart(id, qty = 1) {
  const dish = getMenu().find((d) => d.id === id);
  if (!dish) return;
  const cart = getCart();
  const row = cart.find((x) => x.id === id);
  if (row) row.qty += qty;
  else
    cart.push({ id: dish.id, name: dish.name, price: Number(dish.price), qty });
  saveCart(cart);
  renderCart();
  showToast(`${dish.name} added to your order`);
}
function changeQty(id, delta) {
  const cart = getCart();
  const row = cart.find((x) => x.id === id);
  if (!row) return;
  row.qty += delta;
  saveCart(row.qty <= 0 ? cart.filter((x) => x.id !== id) : cart);
  renderCart();
}
function cartTotal() {
  return getCart().reduce((s, x) => s + x.price * x.qty, 0);
}
function renderCart() {
  const cart = getCart(),
    el = document.getElementById("cartItems"),
    total = document.getElementById("cartTotal"),
    count = document.getElementById("cartCount");
  if (!el) return;
  count.textContent = cart.reduce((s, x) => s + x.qty, 0);
  total.textContent = `$${cartTotal().toFixed(2)}`;
  el.innerHTML = cart.length
    ? cart
        .map(
          (x) =>
            `<div class="cart-row"><div><strong>${x.name}</strong><small>$${x.price.toFixed(2)} each</small></div><div class="qty"><button data-minus="${x.id}">−</button><span>${x.qty}</span><button data-plus="${x.id}">+</button></div><button class="remove" data-remove="${x.id}">Remove</button></div>`,
        )
        .join("")
    : `<p class="muted">Your cart is empty. Add something delicious from the menu.</p>`;
  el.querySelectorAll("[data-minus]").forEach(
    (b) => (b.onclick = () => changeQty(Number(b.dataset.minus), -1)),
  );
  el.querySelectorAll("[data-plus]").forEach(
    (b) => (b.onclick = () => changeQty(Number(b.dataset.plus), 1)),
  );
  el.querySelectorAll("[data-remove]").forEach(
    (b) =>
      (b.onclick = () => {
        changeQty(Number(b.dataset.remove), -99);
      }),
  );
}
function openCart() {
  document.getElementById("cartModal").style.display = "block";
  renderCart();
}
function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}
function checkoutWhatsApp() {
  const cart = getCart();
  if (!cart.length) return showToast("Add an item first");
  const lines = cart
    .map((x) => `${x.qty}x ${x.name} — $${(x.price * x.qty).toFixed(2)}`)
    .join("\n");
  const order = {
    id: Date.now(),
    customer: "Website guest",
    items: cart,
    total: cartTotal(),
    status: "Pending",
    createdAt: new Date().toISOString(),
  };
  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);
  const msg = `Hello ACX restaurant! I'd like to place an order:\n\n${lines}\n\nTotal: $${cartTotal().toFixed(2)}\n\nName: \nPickup or delivery: \nAddress: `;
  window.open(
    `https://wa.me/258841074767?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
  saveCart([]);
  renderCart();
  closeCart();
  showToast("Order prepared for WhatsApp");
}
