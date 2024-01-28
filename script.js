document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle");
    const modeText = document.getElementById("mode-text");

    toggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
        modeText.innerText = document.body.classList.contains("dark-mode") ? "Dark Mode" : "Light Mode";
    });
});