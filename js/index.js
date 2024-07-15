var arrImge = [
  "img/meal-1.jpg",
  "img/steak.jpeg",
  "img/meal-3.jpg",
  "img/meal-5.jpg",
  "img/meal-7.jpg",
];
var arrName = ["Pizza", "steak", "Burger", "Chicken", "omlette"];

var random;
var check;

// function index() {
//   return Math.floor(Math.random() * 5);
// }

let index = () => Math.floor(Math.random() * 5); // I am trying arrow function :)


function showFood() {
  random = index();

  if (check != random) {
    document.getElementById(
      "all"
    ).innerHTML = ` <img src="${arrImge[random]}"  width="250" alt="pizza meal">
      <p class="  text-white mt-2">" ${arrName[random]} "</p>`;
  } else {
    showFood();
  }
  check = random;
}
