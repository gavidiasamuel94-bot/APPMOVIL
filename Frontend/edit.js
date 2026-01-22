const saveButton = document.querySelector(".save-btn"); // David Gavidia | 20/01/2026 | Selecciona el botón de guardar

document.addEventListener("DOMContentLoaded", () => { // David Gavidia | 20/01/2026 | Espera a que cargue el DOM
    if (!saveButton) { // David Gavidia | 20/01/2026 | Verifica que el botón exista
        return; // David Gavidia | 20/01/2026 | Detiene el script si no existe
    }

    saveButton.addEventListener("click", () => { // David Gavidia | 20/01/2026 | Detecta clic en el botón
        saveButton.classList.add("clicked"); // David Gavidia | 20/01/2026 | Agrega animación visual
        window.setTimeout(() => saveButton.classList.remove("clicked"), 180); // David Gavidia | 20/01/2026 | Quita animación tras 180 ms
    });
});