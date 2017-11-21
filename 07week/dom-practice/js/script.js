window.onload = function() {
  let listAlert = setListMessage();
  alert(listAlert);

  createListHeading();

  listItemsHeading();

  addRemoveButtonsToExisting();

  createAddItemInput();
};

function setListMessage() {
  let list = document.getElementById("shopping-list");
  return (
    "This page has " + list.children.length + " items in the shopping cart."
  );
}

function createListHeading(message) {
  let listHeading = document.createElement("h2");
  document.getElementsByTagName("h1")[0].appendChild(listHeading);
  listHeading.setAttribute("id", "list-heading");
}

function listItemsHeading() {
  let listAlert = setListMessage();
  let listHeading = document.getElementById("list-heading");
  listHeading.innerHTML = listAlert;
}

function addRemoveButtonsToExisting() {
  let list = document.getElementById("shopping-list");
  for (let i = 0; i < list.children.length; i++) {
    addRemoveButton(list.children[i]);
  }
}

function addRemoveButton(appendElement) {
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.onclick = deleteItem;
  appendElement.appendChild(removeButton);
  listItemsHeading();
}

function createAddItemInput() {
  let textField = document.getElementById("item-text");
  textField.setAttribute("placeholder", "type item to add");

  let addButton = document.getElementById("add-button");
  addButton.innerHTML = "Add Item";
  addButton.onclick = addItem;

  document.getElementById("add-item").appendChild(textField);
  document.getElementById("add-item").appendChild(addButton);
}

function addItem(event) {
  event.preventDefault();

  let newItemText = document.getElementById("item-text").value;
  let newItem = document.createElement("li");
  newItem.innerHTML = newItemText;
  document.getElementById("shopping-list").appendChild(newItem);
  listItemsHeading();

  addRemoveButton(newItem);
}

function deleteItem() {
  this.parentNode.remove(this);
  listItemsHeading();
}
