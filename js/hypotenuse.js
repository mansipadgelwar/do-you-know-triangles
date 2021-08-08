const input = document.querySelectorAll(".input");
const btnHypotenuse = document.querySelector("#btn-hypotenuse");
const output = document.querySelector("#output");
const outputArea = document.querySelector(".outputArea");
const errorMessage = document.querySelector("#error");



btnHypotenuse.addEventListener("click",calculateHypotenuse);

function calculateHypotenuse(e){
    errorMessage.style.display = "none";
    e.preventDefault();
    const b = Number(input[0].value);
    const h = Number(input[1].value);
    if(b > 0 && h > 0){
    output.style.display = "block";
    outputArea.innerText = Math.sqrt((b*b) + (h*h)).toFixed(2);
    }
    else{
        errorMessage.style.display = "block";
        output.style.display = "none";
        errorMessage.innerText = "Enter valid base and height length";
    }
}
