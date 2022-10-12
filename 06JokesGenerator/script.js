const jokeContainer = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const generate = () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var joke = data.value;
      jokeContainer.innerText = joke;
    })
    .catch();
};
btn.addEventListener("click", generate);
