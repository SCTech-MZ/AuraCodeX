function renderAdmin() {
  const orders = getOrders(),
    reservations = getReservations(),
    menu = getMenu();
  document.getElementById("statOrders").textContent = orders.length;
  document.getElementById("statRevenue").textContent =
    "$" + orders.reduce((s, o) => s + Number(o.total || 0), 0).toFixed(0);
  document.getElementById("statReservations").textContent = reservations.length;
  document.getElementById("ordersTable").innerHTML = orders.length
    ? orders
        .map(
          (o) =>
            `<tr><td>#${String(o.id).slice(-4)}</td><td>${o.customer}</td><td>${o.items?.map((i) => `${i.qty}× ${i.name}`).join(", ") || "—"}</td><td>$${Number(o.total).toFixed(2)}</td><td><span class="status ${o.status === "Ready" ? "ready" : "pending"}">${o.status}</span></td></tr>`,
        )
        .join("")
    : `<tr><td colspan="5">No orders yet. Orders placed through the demo appear here.</td></tr>`;
  document.getElementById("reservationsTable").innerHTML = reservations.length
    ? reservations
        .map(
          (r) =>
            `<tr><td>${r.name}</td><td>${r.date}</td><td>${r.time}</td><td>${r.guests}</td><td>${r.occasion}</td></tr>`,
        )
        .join("")
    : `<tr><td colspan="5">No reservations yet.</td></tr>`;
  document.getElementById("adminDishes").innerHTML = menu
    .map(
      (d) =>
        `<div class="admin-dish"><strong>${d.name}</strong><small>${d.category} · $${Number(d.price).toFixed(2)} ${d.tag ? `· ${d.tag}` : ""}</small><div class="dish-actions"><button data-delete-dish="${d.id}">Delete</button><button data-feature-dish="${d.id}">Feature</button></div></div>`,
    )
    .join("");
  document.querySelectorAll("[data-delete-dish]").forEach(
    (b) =>
      (b.onclick = () => {
        if (confirm("Delete this dish?")) {
          setData(
            STORAGE_KEYS.menu,
            getMenu().filter((d) => d.id !== Number(b.dataset.deleteDish)),
          );
          renderAdmin();
        }
      }),
  );
}
document.addEventListener("DOMContentLoaded", () => {
  renderAdmin();
  document.getElementById("clearOrders").onclick = () => {
    if (confirm("Clear all demo orders?")) {
      saveOrders([]);
      renderAdmin();
    }
  };
  const modal = document.getElementById("dishModal");
  document.getElementById("addDishBtn").onclick = () => (modal.style.display = "block");
  document.getElementById("closeDish").onclick = () => (modal.style.display = "none");
  document.getElementById("dishForm").onsubmit = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target));
    d.id = Date.now();
    d.price = Number(d.price);
    d.image =
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80";
    setData(STORAGE_KEYS.menu, [...getMenu(), d]);
    e.target.reset();
    modal.style.display = "none";
    renderAdmin();
  };
  document.getElementById("saveSettings").onclick = () =>
    alert("Demo settings saved locally.");
});

  let dashboardMenuBtn = document.querySelectorAll(".nav-link");
  dashboardMenuBtn.forEach((btn) => {
	  btn.addEventListener("click", (e) => {
		dashboardMenuBtn.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
    });
  });


const sectionsbtn = document.querySelectorAll("[data-section]");

const sectionValue = sectionsbtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
	const sectionValue = e.target.dataset.section;

	  // add logic to show/hide sections based on the clicked button
	  const dashboard = document.getElementById("dashboard");
	  const orders = document.getElementById("orders");
	  const dishes = document.getElementById("dishes");
	  const reservations = document.getElementById("reservations");
	  const settings = document.getElementById("settings");
	  switch (sectionValue) {
	  case "dashboard":
		  dashboard.style.display = "block";
		  orders.style.display = "none";
		  dishes.style.display = "none";
		  reservations.style.display = "none";
		  settings.style.display = "none";
      break;
	  	case "orders":
			orders.style.display = "block";
			dashboard.style.display = "none";
			dishes.style.display = "none";
			reservations.style.display = "none";
			settings.style.display = "none";
			  break;
		case "dishes":
			dishes.style.display = "block";
			dashboard.style.display = "none";
			orders.style.display = "none";
			reservations.style.display = "none";
			settings.style.display = "none";
			  break;
		case "reservations":
			reservations.style.display = "block";
			dashboard.style.display = "none";
			orders.style.display = "none";
			dishes.style.display = "none";
			settings.style.display = "none";
			  break;
		case "settings":
			settings.style.display = "block";
			dashboard.style.display = "none";
			orders.style.display = "none";
			dishes.style.display = "none";
			reservations.style.display = "none";
			break;

		default:
			dashboard.style.display = "block";
			orders.style.display = "none";
			dishes.style.display = "none";
			reservations.style.display = "none";
			settings.style.display = "none";
		break;
  }
  });

  
})