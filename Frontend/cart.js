// Modificado por David Gavidia
const toggleButtons = document.querySelectorAll(".toggle-btn");

const setActiveToggle = (target) => {
    toggleButtons.forEach((button) => {
        button.classList.toggle("active", button === target);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => setActiveToggle(button));
    });
});
