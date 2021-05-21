const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
console.log(btn);
console.log(color);
// The hex color will be like #f45011
btn.addEventListener('click', function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[0];
    }
    // To modify the color reference (text)
    color.textContent = hexColor;
    // Change the background of the body by the hexColor
    document.body.style.backgroundColor = hexColor;
})
