document.querySelectorAll(".materia").forEach((materia) => {
  materia.addEventListener("click", () => {
    const info = materia.getAttribute("data-info");
    const box = document.getElementById("info-box");
    box.textContent = info;
    box.classList.remove("hidden");
  });
});
