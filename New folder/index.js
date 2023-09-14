// JavaScript code to handle the selection and calculation
const checkboxes = document.querySelectorAll('.chocolate');
const totalElement = document.getElementById('total');
let selectedItems = 0;
let totalPrice = 0;

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const isChecked = checkbox.checked;
        const price = parseFloat(checkbox.getAttribute('data-price'));

        if (isChecked && selectedItems < 8) {
            selectedItems++;
            totalPrice += price;
        } else if (!isChecked && selectedItems > 0) {
            selectedItems--;
            totalPrice -= price;
        } else {
            checkbox.checked = false; // Uncheck if it exceeds the limit
        }

        totalElement.textContent = totalPrice.toFixed(2);
    });
});