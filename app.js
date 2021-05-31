let counterPlaceHolder = document.getElementById("counter-placeholder");
let btnIncrement = document.getElementById("add-count");
let btnDecrement = document.getElementById("lower-count");

let number = 0;

function changeColor(number) {
  const color = "";
  if (number < 0) {
    color = "red";
  } else if (number > 0) {
    color = "green";
  } else {
    color = "white";
  }
  return color;
}

//event listeners
btnIncrement.addEventListener("click", function () {
  number++;
  counterPlaceHolder.innerHTML = number;
  counterPlaceHolder.style.color = changeColor(number);
});

btnDecrement.addEventListener("click", function () {
  number--;
  counterPlaceHolder.innerHTML = number;
  counterPlaceHolder.style.color = changeColor(number);
});
