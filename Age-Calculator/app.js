const container = document.querySelector(".container");
const display = document.querySelector(".desc");
const error = document.querySelector(".error");
const inputAge = document.querySelector("#dob");
const newDate = new Date();

function getAge() {
  age = inputAge.value;
  let bithyear = age.slice(0, 4);
  let birthmonth = age.slice(5, 7);
  let birthdate = age.slice(8, 10);
  let currentYear = newDate.getFullYear();
  let currentMonth = newDate.getMonth();
  let currentDate = newDate.getDate();
  let userAge = currentYear - Number(bithyear);
  let usermonth = currentMonth - Number(birthmonth);
  let userdays = Number(birthdate) - currentDate;
  display.innerHTML = `Your Age is : ${userAge} Years, ${usermonth} months & ${userdays} Days`;
  if (!age) {
    display.innerHTML = "Please enter your Birthdate";
  }
  if (bithyear > 2022) {
    error.style.display = "block";
  }
}
