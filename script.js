let gamSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){     //game flash
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){            //user flash
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gamSeq.push(randColor);
    gameFlash(randBtn);
    console.log(gamSeq)
    console.log(userSeq)

}

function checkAns(idx){
    // console.log(`current level ${level}`)

    if(userSeq[idx] == gamSeq[idx]){
        if(userSeq.length == gamSeq.length){
           setTimeout(levelUp, 1000);
        }else{
            console.log("length not match");
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start, `
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();

    }
}

function btnPress(){       //user flash button
    let btn = this;

    if(started == false){
        userFlash(btn);
    }

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(this)

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of  allBtns){
    btn.addEventListener("click" , btnPress
     )
 }

 function reset(){
    started = false;
    gamSeq = [];
    userSeq = [];
    level = 0;
 }