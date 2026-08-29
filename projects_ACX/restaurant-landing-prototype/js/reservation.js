const reservationButton = document.querySelector(".modal-close");
reservationButton?.addEventListener("click", () => {
  document.getElementById("reservationModal").style.display = "none";
});

function openReservation() {
  document.getElementById("reservationModal").style.display = "block";
  document.getElementById("reservationSuccess").style.display = "none";
}
function closeReservation() {
    document.getElementById("reservationModal").style.display = "none";
}
function submitReservation(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  data.id = Date.now();
  data.createdAt = new Date().toISOString();
  const reservations = getReservations();
  reservations.unshift(data);
  saveReservations(reservations);
  e.target.style.display = "none";
  const success = document.getElementById("reservationSuccess");
  success.style.display = "block";
  success.innerHTML = `<strong>Reservation received.</strong><br>Thanks ${data.name}. Your table request for ${data.date} at ${data.time} is saved in the demo dashboard.`;
  showToast("Reservation saved");
}
