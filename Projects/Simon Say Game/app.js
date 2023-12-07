let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false){
        console.log("Game is started");
        started = true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp () {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randombtn);
}

function checkSameButton (idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your SCORE was  <b>${level}</b> <br> Press Any Key To Start Again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress () {
    // console.log(this)
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor); 
    checkSameButton(userSeq.length -1);
}

let allBtn = document.querySelectorAll(".box");
for(btn of allBtn){
    btn.addEventListener("click", btnPress);
}

function reset (){
    started = false;
    gameSeq =[];
    userSeq = [];
    level = 0;
}