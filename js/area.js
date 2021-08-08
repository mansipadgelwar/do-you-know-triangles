const input = document.querySelectorAll(".input");
const btnCalculate = document.querySelector(".btn-submit");
const area = document.querySelector("#area");
const error = document.querySelector(".error");
btnCalculate.addEventListener("click",clickHandler);

function clickHandler(e){
  e.preventDefault();
  error.style.display = "none";
  const b = Number(input[0].value);
  const h = Number(input[1].value);    
    if(b > 0 && h > 0){
      output.style.display = "block";
      area.innerText = (b * h)/2;
    }
    else{
        output.style.display = "none";
        error.style.display = "block";
        error.innerText = "Enter valid base and height value";
    }
}