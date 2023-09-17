// script.js
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedList = document.getElementById('selectedList');
    const priceValue = document.getElementById('priceValue');

    let selectedChocolates = [];

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            const chocolate = this.value;

            if (this.checked && selectedChocolates.length < 8) {
                selectedChocolates.push(chocolate);
            } else {
                const index = selectedChocolates.indexOf(chocolate);
                if (index !== -1) {
                    selectedChocolates.splice(index, 1);
                }
                this.checked = false;
            }

            // Update the selected items list
            displaySelectedItems();

            // Calculate and update the total price
            updateTotalPrice();
        });
    });

    function displaySelectedItems() {
        selectedList.innerHTML = '';
        selectedChocolates.forEach((chocolate) => {
            const listItem = document.createElement('li');
            listItem.textContent = chocolate;
            selectedList.appendChild(listItem);
        });
    }

    function updateTotalPrice() {
        const pricePerChocolate = 2.50; // Set the price per chocolate
        const totalPrice = selectedChocolates.length * pricePerChocolate;
        priceValue.textContent = `$${totalPrice.toFixed(2)}`;
    }
});
