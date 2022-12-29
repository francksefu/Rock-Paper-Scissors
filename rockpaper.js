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


    