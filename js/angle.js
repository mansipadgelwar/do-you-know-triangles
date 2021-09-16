var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var btnSubmit = document.querySelector("#btn-submit");

//Angles of a triangle
const sum=0;
btnSubmit.addEventListener("click",clickHandler);
function clickHandler(e){
    e.preventDefault();
    if(angle1.value === "" || angle2.value === "" || angle3.value === ""){
        outputAngles.innerHTML = "Please provide all the angles of a triangle. "
    } 
    else if(angle1.value <= 0 || angle2.value <= 0 || angle3.value <= 0){
        outputAngles.innerHTML = "Please provide valid angles. "
    }       
    else{
        const angleOne = Number(angle1.value);
        const angleTwo = Number(angle2.value);
        const angleThree = Number(angle3.value);
        const sum = angleOne + angleTwo + angleThree;
        if(sum === 180){
            outputAngles.innerHTML = "Hurray! These angles can make a triangle.";
        }
        else{
            outputAngles.innerHTML = "Oops! These angles cannot make a triangle.";
        }
    }
    
}


