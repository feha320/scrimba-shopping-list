const mainButtonEl = document.getElementById("main-button");
const mainInputEl = document.getElementById("main-input");

mainButtonEl.addEventListener("click", function() {
  let inputValue = mainInputEl.value;
  console.log(inputValue);
})