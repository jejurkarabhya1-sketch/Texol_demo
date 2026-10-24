const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}
document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
const projectFilters = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card[data-category]");
projectFilters.forEach(button => button.addEventListener("click", () => {
  projectFilters.forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const filter = button.dataset.filter;
  projectCards.forEach(card => { card.hidden = filter !== "all" && card.dataset.category !== filter; });
}));
const form = document.getElementById("enquiry-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent("TEXOL website enquiry — " + (data.get("interest") || "Project enquiry"));
  const body = encodeURIComponent(
    "Name: " + data.get("name") + "\n" +
    "Email: " + data.get("email") + "\n" +
    "Company: " + (data.get("company") || "Not provided") + "\n" +
    "Interest: " + data.get("interest") + "\n\n" +
    "Project overview:\n" + data.get("message")
  );
  const status = document.getElementById("form-status");
  if (status) status.textContent = "Opening your email app. No data has been sent by this prototype.";
  window.location.href = "mailto:ashutosh@texol.in?subject=" + subject + "&body=" + body;
});
