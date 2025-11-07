const modal = document.getElementById("menuModal");
const btn = document.getElementById("openMenuBtn");
const span = document.querySelector(".close");

  btn.onclick = () => modal.style.display = "flex";
  span.onclick = () => modal.style.display = "none";
  window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
