const container = document.querySelector(".main");
const button = document.querySelector(".submit");
const image = document.querySelector("#img");
let input = document.querySelector("#input");

button.addEventListener("click", () => {
  let inputValue = input.value;
  if (!inputValue) return;
  console.log(inputValue);
  image.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
  image.addEventListener("load", () => {
    container.classList.add("active");
  });
});
// to make sure that qr is not always on screen
input.addEventListener("keyup", () => {
  if (!input.value) {
    container.classList.remove("active");
  }
});
