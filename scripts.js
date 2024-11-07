document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItemButton');
    const itemList = document.getElementById('itemList');

    addItemButton.addEventListener('click', addItem);

    function addItem() {
        const itemText = itemInput.value.trim();
        if (itemText === '') return;

        const listItem = document.createElement('li');
        listItem.classList.add('item');
        listItem.innerHTML = `
            <span>${itemText}</span>
            <button onclick="removeItem(this)">x</button>
        `;

        itemList.appendChild(listItem);
        itemInput.value = '';
        itemInput.focus();
    }

    window.removeItem = function(button) {
        const listItem = button.parentElement;
        listItem.style.animation = 'fadeOut 0.3s ease forwards';
        listItem.addEventListener('animationend', () => listItem.remove());
    };
});