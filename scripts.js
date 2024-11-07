document.addEventListener("DOMContentLoaded", () => {
  const itemInput = document.querySelector("#itemInput");
  const addItemButton = document.querySelector("#addItemButton");
  const itemList = document.querySelector("#itemList");

  addItemButton.addEventListener("click", handleAddItem);

  function handleAddItem() {
    const itemText = itemInput.value.trim();
    if (itemText === "") return;

    const listItem = createListItem(itemText);
    itemList.appendChild(listItem);

    itemInput.value = "";
    itemInput.focus();
  }

  function createListItem(text) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");

    const itemContent = document.createElement("span");
    itemContent.textContent = text;

    const removeButton = document.createElement("button");
    removeButton.textContent = "x";
    removeButton.addEventListener("click", handleRemoveItem);

    listItem.appendChild(itemContent);
    listItem.appendChild(removeButton);

    return listItem;
  }

  function handleRemoveItem(event) {
    const listItem = event.target.closest("li");
    listItem.style.animation = "fadeOut 0.3s ease forwards";
    listItem.addEventListener("animationend", () => listItem.remove());
  }
});
