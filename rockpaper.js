document.getElementById("choiceScissors").addEventListener("click", compare);
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


function compare() {
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

}


