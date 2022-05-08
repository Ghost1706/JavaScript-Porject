const colors = [
  "red",
  "black",
  "white",
  "orange",
  "green",
  "blue",
  "purple",
  "yellow",
];
const btn = document.querySelector(".btn");
const color = document.getElementById("Color");
const link = document.getElementById("link");
const link2 = document.getElementById("link2");

btn.addEventListener("click", function () {
  const RN = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[RN];
  color.innerText = colors[RN];
  color.style.color = colors[RN];

  link.style.color = colors[RN];
  link2.style.color = colors[RN];
  console.log(colors[RN]);
  console.log(RN);
});
