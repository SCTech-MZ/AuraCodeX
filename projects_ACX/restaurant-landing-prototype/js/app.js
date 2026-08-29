document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  renderCart();
  const toggle = document.getElementById("menuToggle"),
    nav = document.getElementById("mainNav");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  document
    .querySelectorAll("[data-open-cart]")
    .forEach((b) => (b.onclick = openCart));
  document
    .querySelector("[data-close-cart]")
    ?.addEventListener("click", closeCart);
  document
    .querySelectorAll("[data-open-reservation]")
    .forEach((b) => (b.onclick = openReservation));
  document
    .querySelector("[data-close-reservation]")
    ?.addEventListener("click", closeReservation);
  document
    .getElementById("checkoutBtn")
    ?.addEventListener("click", checkoutWhatsApp);
  document
    .getElementById("reservationForm")
    ?.addEventListener("submit", submitReservation);
  document.getElementById("menuSearch")?.addEventListener("input", renderMenu);
  document
    .querySelector("[data-special-order]")
    ?.addEventListener("click", () => {
      const dish = getMenu().find((x) => x.name === "Truffle Tagliatelle");
      if (dish) {
        addToCart(dish.id);
        openCart();
      }
    });
  document
    .querySelectorAll(".main-nav a")
    .forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open")),
    );
});
function showToast(message) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}
