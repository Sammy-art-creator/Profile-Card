document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Cambia el texto del botón según el modo
        if (body.classList.contains("dark-mode")) {
            themeToggle.textContent = "Light Mode ☀️";
        } else {
            themeToggle.textContent = "Dark Mode 🌙";
        }
    });
});
