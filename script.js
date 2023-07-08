import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

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
  // push(shoppingItemsInDB, inputValue);
})

function clearMainInputEl() {
  mainInputEl.value = "";
}

function appendItem(itemValue) {
  shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}