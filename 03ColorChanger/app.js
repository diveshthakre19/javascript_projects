const canvas = document.querySelector("#canvas");
const btn = document.querySelector("#button");

const randomColor = () => {
  let val = "1234567890ABCDEF";
  let constant = "#";
  for (let i = 0; i < 6; i++) {
    constant += val[Math.floor(Math.random() * 16)];
  }
  return constant;
};

const colorChanger = () => {
  canvas.style.backgroundColor = randomColor();
};
btn.addEventListener("click", colorChanger);
