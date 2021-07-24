var angleOne = document.querySelector("#angle1");
var angleTwo = document.querySelector("#angle2");
var angleThree = document.querySelector("#angle3");
var btnSubmit = document.querySelector("#btn-submit");
btnSubmit.addEventListener("click",clickHandler);
function clickHandler(e){
    e.preventDefault();
    angleOne = Number(angleOne.value);
    angleTwo = Number(angleTwo.value);
    angleThree = Number(angleThree.value);
    var sum = angleOne + angleTwo + angleThree;
    if(sum === 180){
        outputAngles.innerHTML = "it makes a triangle";
    }
    else{
        outputAngles.innerHTML = "it does not make a triangle";
    }
}

