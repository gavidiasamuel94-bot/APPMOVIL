const paymentCards = document.querySelectorAll(".payment-card");

const setSelected = (activeCard) => {
    paymentCards.forEach((card) => {
        card.classList.toggle("selected", card === activeCard);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    paymentCards.forEach((card) => {
        card.addEventListener("click", () => setSelected(card));
    });
});
