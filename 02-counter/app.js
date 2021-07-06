const counter = document.querySelector('.counter');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');

console.log(decrease);

let number = 0;

increase.addEventListener('click', function() {
    number += 1;
    counter.textContent = number;
})

decrease.addEventListener('click', () => {
    number -= 1;
    counter.textContent = number;
})