var baseLength = document.querySelector(".base");
var heightLength = document.querySelector(".height");
var btnCalculate = document.querySelector(".button");
var error = document.querySelector(".error");
btnCalculate.addEventListener("click",clickHandler);

function clickHandler(e){
    e.preventDefault();
    if(baseLength.value > 0 && heightLength.value > 0){
      const base = Number(baseLength.value);
      const height = Number(heightLength.value);
      area.innerText = (base * height)/2;
    }
    else{
        output.style.display = "none";
        error.innerText = "Enter valid base and height value";
    }
}