const faqButtons = document.querySelectorAll(".faq-entry .faq-item"); // David Gavidia | 20/01/2026 | Selecciona los botones de preguntas FAQ

document.addEventListener("DOMContentLoaded", () => { // David Gavidia | 20/01/2026 | Espera a que cargue el DOM
    faqButtons.forEach((button) => { // David Gavidia | 20/01/2026 | Recorre cada pregunta
        button.addEventListener("click", () => { // David Gavidia | 20/01/2026 | Detecta clic en la pregunta
            const entry = button.closest(".faq-entry"); // David Gavidia | 20/01/2026 | Obtiene el contenedor FAQ
            if (!entry) { // David Gavidia | 20/01/2026 | Verifica que exista el contenedor
                return; // David Gavidia | 20/01/2026 | Sale si no existe
            }

            document.querySelectorAll(".faq-entry.open").forEach((openEntry) => { // David Gavidia | 20/01/2026 | Busca FAQs abiertas
                if (openEntry !== entry) { // David Gavidia | 20/01/2026 | Evita cerrar la actual
                    openEntry.classList.remove("open"); // David Gavidia | 20/01/2026 | Cierra las demás FAQs
                }
            });

            entry.classList.toggle("open"); // David Gavidia | 20/01/2026 | Abre o cierra la FAQ seleccionada
        });
    });
});
