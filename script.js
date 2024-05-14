// script.js
const menuButton = document.getElementById("menu-button");
const fullPageMenu = document.getElementById("full-page-menu");
const closeButton = document.getElementById("close-button");

// Muestra el menú cuando se hace clic en el botón
menuButton.addEventListener("click", () => {
    fullPageMenu.classList.add("show"); // Usamos clases para transiciones suaves
});

// Cierra el menú cuando se hace clic en el botón de cierre
closeButton.addEventListener("click", () => {
    fullPageMenu.classList.remove("show");
});

// Cierra el menú cuando se hace clic fuera del menú
document.addEventListener("click", (event) => {
    if (!fullPageMenu.contains(event.target) && event.target !== menuButton) {
        fullPageMenu.classList.remove("show");
    }
});

