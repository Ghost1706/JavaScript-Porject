const btn = document.querySelectorAll(".btn");
const value = document.getElementById("value");

let count = 0;

btn.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("decrease")) {
      count--;
    } else if (item.classList.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.innerText = count;
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "hsl(209, 61%, 16%)";
    }
  });
});
