const counter = document.querySelector('.counter');
const increase = document.querySelector('.increase')
console.log(counter);

let number = 0;

increase.addEventListener('click', function() {
    number += 1;
    counter.textContent = number;
})

