// David Gavidia | Implementación módulo Perfil

const navItems = document.querySelectorAll(".bottom-nav .nav-item"); // Obtiene los botones del menú inferior

const setActiveNav = (activeItem) => { // Función para marcar un botón como activo
    navItems.forEach((item) => { // Recorre cada botón del menú
        const icon = item.querySelector("img[data-icon]"); // Obtiene el ícono del botón
        const isActive = item === activeItem; // Verifica si es el botón seleccionado
        item.classList.toggle("active", isActive); // Activa o desactiva la clase CSS
        if (icon) { // Verifica que exista el ícono
            icon.src = isActive ? icon.dataset.iconActive : icon.dataset.icon; // Cambia el ícono según estado
        }
    });
};

document.addEventListener("DOMContentLoaded", () => { // Espera a que cargue el DOM
    const activeItem = document.querySelector(".bottom-nav .nav-item.active"); // Detecta botón activo inicial
    if (activeItem) { // Si existe uno activo
        setActiveNav(activeItem); // Aplica estado activo correctamente
    }

    navItems.forEach((item) => { // Recorre los botones del menú
        item.addEventListener("click", () => setActiveNav(item)); // Cambia el activo al hacer clic
    });

    const cardButtons = document.querySelectorAll(".list-item[data-href]"); // Selecciona tarjetas con enlace
    cardButtons.forEach((card) => { // Recorre cada tarjeta
        card.addEventListener("click", () => { // Detecta clic en la tarjeta
            window.location.href = card.dataset.href; // Redirige a la ruta indicada
        });
    });
});

