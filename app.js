const formContainer = document.querySelector(".container");
const input = document.querySelector(".binary");
const result = document.querySelector(".result");

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = input.value;
  let decimal= parseInt(inputValue,2)
  console.log(decimal);
  result.textContent = decimal;
  input.value="";
})
