var base = document.querySelector("#base");
var height = document.querySelector("#height");
var btnHypo = document.querySelector("#btn-hypotenuse");

btnHypo.addEventListener("click",calculateHypo);

function calculateHypo(e){
    e.preventDefault();
    base = Number(base.value);
    height = Number(height.value);
    outputArea.innerHTML = Math.sqrt((base*base) + (height*height)).toFixed(2);
}