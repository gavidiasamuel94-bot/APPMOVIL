const navItems = document.querySelectorAll(".bottom-nav .nav-item");

const setActiveNav = (activeItem) => {
    navItems.forEach((item) => {
        const icon = item.querySelector("img[data-icon]");
        const isActive = item === activeItem;
        item.classList.toggle("active", isActive);
        if (icon) {
            icon.src = isActive ? icon.dataset.iconActive : icon.dataset.icon;
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.getElementById("nav-home");
    if (homeButton) {
        setActiveNav(homeButton);
    }

    navItems.forEach((item) => {
        item.addEventListener("click", () => setActiveNav(item));
    });
});
