let activeCategory = "All";
function renderMenu() {
  const grid = document.getElementById("dishGrid"),
    tabs = document.getElementById("categoryTabs"),
    search = (document.getElementById("menuSearch")?.value || "").toLowerCase();
  if (!grid) return;
  const menu = getMenu();
  const categories = ["All", ...new Set(menu.map((d) => d.category))];
  tabs.innerHTML = categories
    .map(
      (c) =>
        `<button class="${c === activeCategory ? "active" : ""}" data-category="${c}">${c}</button>`,
    )
    .join("");
  let items = menu.filter(
    (d) =>
      (activeCategory === "All" || d.category === activeCategory) &&
      `${d.name} ${d.description}`.toLowerCase().includes(search),
  );
  grid.innerHTML = items.length
    ? items
        .map(
          (d) => `<article class="dish-card">
 <div class="dish-image" style="background-image:url('${d.image}')"></div><div class="dish-body">
 <div class="dish-top"><span class="dish-name">${d.name}</span><span class="dish-price">$${Number(d.price).toFixed(2)}</span></div>
 <p class="dish-desc">${d.description}</p><div class="dish-footer"><span class="tag">${d.tag || d.category}</span><button class="add-btn" data-add="${d.id}" aria-label="Add ${d.name}">+</button></div>
 </div></article>`,
        )
        .join("")
    : `<p class="muted">No dishes found.</p>`;
  tabs.querySelectorAll("button").forEach(
    (b) =>
      (b.onclick = () => {
        activeCategory = b.dataset.category;
        renderMenu();
      }),
  );
  grid
    .querySelectorAll("[data-add]")
    .forEach((b) => (b.onclick = () => addToCart(Number(b.dataset.add))));
}
