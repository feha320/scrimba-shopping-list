import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://shopping-list-2e023-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingItemsInDB = ref(database, "shoppingItems");

const mainButtonEl = document.getElementById("main-button");
const mainInputEl = document.getElementById("main-input");
const shoppingListEl = document.getElementById("shopping-list");

mainButtonEl.addEventListener("click", function() {
  let inputValue = mainInputEl.value;
  clearMainInputEl();
  appendItem(inputValue);
  console.log(inputValue);
  push(shoppingItemsInDB, inputValue);
})

onValue(shoppingItemsInDB, function(snapshot) {
  let itemsArray = Object.entries(snapshot.val());
  
  clearItems();
  
  for (let i = 0; i < itemsArray.length; i++) {
    let currentItem = itemsArray[i];
    let currentItemID = currentItem[0];
    let currentItemValue = currentItem[1];
    appendItem(currentItem);
  }
})

function clearMainInputEl() {
  mainInputEl.value = "";
}

function appendItem(item) {
  
  let itemID = item[0];
  let itemValue = item[1];
  let newEl = document.createElement("li");
  newEl.classList.add("basic-style");
  newEl.textContent = itemValue;
  shoppingListEl.append(newEl);

}


function clearItems() {
  shoppingListEl.innerHTML = ""
}