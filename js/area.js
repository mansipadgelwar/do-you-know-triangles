var baseLength = document.querySelector(".base");
var heightLength = document.querySelector(".height");
var btnCalculate = document.querySelector(".button");

btnCalculate.addEventListener("click",clickHandler);

function clickHandler(e){
    e.preventDefault();
    const base = Number(baseLength.value);
    const height = Number(heightLength.value);
    console.log(base);
    console.log(height);
    area.innerText = (base * height)/2;
}