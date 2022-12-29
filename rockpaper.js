//document.getElementById("choiceScissors").addEventListener("click", compare);
document.getElementById("yes").addEventListener("click", function(){
    document.getElementById("start").style.display = "block";
});
function getComputerChoice(){
    let numberRandom = Math.random()*10;
    if(numberRandom < 3){
        return "Scissors";
    }else if(numberRandom < 6){
        return "Paper";
    }else{
        return "Rock";
    }
}


/*function compare() {
    let countPlayer = 0;
    let countMachine = 0;
    let equality = 0;
    for(let i = 0; i < 5; i++){
        let user = prompt("choose between Scissors, Paper and Rock");
        let pc = getComputerChoice();
        if(user.search(/Scissors/gi) > -1){
            if(pc == "Scissors") equality ++;
            if(pc == "Paper") countPlayer ++;
            if(pc == "Rock") countMachine ++;
        }
        if(user.search(/Paper/gi) > -1){
            if(pc == "Paper") equality ++;
            if(pc == "Rock") countPlayer ++;
            if(pc == "Scissors") countMachine ++;
        }
        if(user.search(/Rock/gi) > -1){
            if(pc == "Rock") equality ++;
            if(pc == "Scissors") countPlayer ++;
            if(pc == "Paper") countMachine ++;
        }
    }
    let result = "";
    if(countMachine > countPlayer){
        result ="You Lose with :<br> machine : "+countMachine+" <br> you : "+countPlayer+"<br> number of equality : "+equality;
    }
    if(countMachine < countPlayer){
        result = "You Win with :<br> machine : "+countMachine+"<br> you : "+countPlayer+"<br> number of equality : "+equality;
    }
    if(countMachine == countPlayer){
        result = "No looser and no winner ";
    }
    document.getElementById("result").innerHTML = result;

}*/


//let button = document.querySelector("button");

let div = document.createElement("div");
div.setAttribute('id', 'result');
div.textContent = "Here you can see your result !";

let pComputer = document.createElement("p");
pComputer.setAttribute("id", "pCumputer");
let pUser = document.createElement("p");
pUser.setAttribute("id", "pUser");
let pResult = document.createElement("p");
pResult.setAttribute("id", "pResult");

pComputer.innerHTML = `Computer have : <span id='scoreC'>0</span>`;
pUser.innerHTML = `You have : <span id='scoreU'>0</span>`;
pResult.innerHTML = `Numbers of part we play : <span id='scoreR'>0</span>`;
div.appendChild(pComputer);
div.appendChild(pUser);
div.appendChild(pResult);

let section = document.querySelector("section");
section.appendChild(div);

let scoreU = document.querySelector("#scoreU");
let scoreC = document.querySelector("#scoreC");
let scoreR = document.querySelector("#scoreR");
let r = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors= document.querySelector("#scissors");

rock.addEventListener("click", () => {
    let p = getComputerChoice();
    scoreR.textContent = ++r;
    if(p == "Rock") {}
    if(p == "Scissors") {
        scoreU.textContent = scoreU.textContent * 1 + 1;
    }
    if(p == "Paper") {
        scoreC.textContent = scoreC.textContent * 1 + 1;
    }
    
});

paper.addEventListener("click", () => {
    let p = getComputerChoice();
    if(p == "Paper") {}
    if(p == "Rock") {
        scoreU.textContent = scoreU.textContent * 1 + 1;
    }
    if(p == "Scissors") {
        scoreC.textContent = scoreC.textContent * 1 + 1;
    }
    scoreR.textContent = ++r;
});

scissors.addEventListener("click", () => {
    let p = getComputerChoice();
    if(p == "Scissors") {}
    if(p == "Paper") {
        scoreU.textContent = scoreU.textContent * 1 + 1;
    }
    if(p == "Rock") {
        scoreC.textContent = scoreC.textContent * 1 + 1;
    }
    scoreR.textContent = ++r;
});


    