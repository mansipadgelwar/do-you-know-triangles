var quizForm = document.querySelector("#quiz-form");
var scoreOutput = document.querySelector("#score-output");
var btnSubmit = document.querySelector("#btn-submit");

const correctAns = ["option1", "option2", "option1", "option1","option1","option2", "option2", "option3", "option3", "option3" ];

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let score = 0;
    const data = new FormData(quizForm);    
    let index=0;
    for(let entry of data){
       if(entry[1] == correctAns[index]){
        
        score++;
       }
        index++;
        console.log("score");
    }
    scoreOutput.innerHTML = score;
});