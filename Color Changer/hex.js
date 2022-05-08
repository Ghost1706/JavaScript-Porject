const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color = document.getElementById("Color");
const link = document.getElementById("link");
const link2 = document.getElementById("link2");

console.log(link);
btn.addEventListener("click", function () {
  function getRN() {
    return Math.floor(Math.random() * colors.length);
  }
  hex = "#";
  for (i = 0; i < 6; i++) {
    hex += colors[getRN()];
  }

  document.body.style.backgroundColor = hex;
  color.innerText = hex;
  color.style.color = hex;

  link.style.color = hex;
  link2.style.color = hex;

  console.log(link.style.color);
});
