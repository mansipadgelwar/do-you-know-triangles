var angleOne = document.querySelector("#angle1");
var angleTwo = document.querySelector("#angle2");
var angleThree = document.querySelector("#angle3");
var btnSubmit = document.querySelector("#btn-submit");

//Angles of a triangle
btnSubmit.addEventListener("click",clickHandler);
function clickHandler(e){
    e.preventDefault();
    angleOne = Number(angleOne.value);
    angleTwo = Number(angleTwo.value);
    angleThree = Number(angleThree.value);
    var sum = angleOne + angleTwo + angleThree;
    if(sum === 180){
        outputAngles.innerHTML = "Hurray! These angles can make a triangle.";
    }
    else{
        outputAngles.innerHTML = "Oops! These angles cannot make a triangle.";
    }
}


