// Modificado por David Gavidia | 20/01/2026 | Ajuste de lógica de botones toggle

const toggleButtons = document.querySelectorAll(".toggle-btn"); // David Gavidia | 20/01/2026 | Selecciona todos los botones toggle

const setActiveToggle = (target) => { // David Gavidia | 20/01/2026 | Función para activar un solo botón
    toggleButtons.forEach((button) => { // David Gavidia | 20/01/2026 | Recorre cada botón
        button.classList.toggle("active", button === target); // David Gavidia | 20/01/2026 | Activa solo el botón seleccionado
    });
};

document.addEventListener("DOMContentLoaded", () => { // David Gavidia | 20/01/2026 | Espera a que cargue el DOM
    toggleButtons.forEach((button) => { // David Gavidia | 20/01/2026 | Recorre los botones toggle
        button.addEventListener("click", () => setActiveToggle(button)); // David Gavidia | 20/01/2026 | Cambia el estado activo al hacer clic
    });
});
