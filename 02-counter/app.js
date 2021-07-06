// const counter = document.querySelector('.counter');
// const increase = document.querySelector('.increase');
// const decrease = document.querySelector('.decrease');
// const reset = document.querySelector('.reset')

// console.log(decrease);

// let number = 0;

// // Increase function

// increase.addEventListener('click', function() {
//     number += 1;
//     counter.textContent = number;
// })

// // Decrease function

// decrease.addEventListener('click', () => {
//     number -= 1;
//     counter.textContent = number;
// })

// // Reset function

// reset.addEventListener('click', () => {
//     number = 0;
//     counter.textContent = number;
// })

// Option B: using forEach

let counter = 0;
const counterNumber = document.querySelector(".counterNumber");

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

buttons.forEach((e) =>
  e.addEventListener("click", function (e) {
    // Current Target will get object info when the user clicks something in the web page
    const value = e.currentTarget.classList;
    console.log(value);
    // Cointains method will check if an specific word exists in one of the positions of the array
    if (value.contains("increase")) {
      counter += 1;
    } else if (value[1] === "decrease") {
      counter -= 1;
    } else if (value.contains("reset")) {
      counter = 0;
    }
    counterNumber.textContent = counter;
    if (counter > 0) {
      counterNumber.style.color = "green";
    } else if (counter < 0) {
      counterNumber.style.color = "red";
    } else if (counter === 0) {
      counterNumber.style.color = "black";
    }
  })
);
