const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");
const hovereffect = document.querySelector(".top-text");

document.onclick = function (e) {
  if (e.target.id !== "sidebar" && e.target.id !== "toggle") {
    toggle.classList.remove("active");
    sidebar.classList.remove("active");
  }
};

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
});

hovereffect.addEventListener("touchstart", function () {}, true);
