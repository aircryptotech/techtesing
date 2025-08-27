document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buy-button');
    if (buyButton) {
        buyButton.addEventListener('click', () => {
            alert('Thank you for your purchase! You will receive an email with the course details shortly.');
        });
    }
});
