var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

for(var i = 0; i<=167; i++){
    var rn = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
   var timerint = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timerval").textContent = timer; 
        }
        else{
            clearInterval(timerint);
             var gameOverSound = document.querySelector("#gameOverSound");
            if (gameOverSound) {
                gameOverSound.volume = 0.5;
                gameOverSound.play();
            }

            var gameOverContainer = document.createElement("div");
            gameOverContainer.id = "game-over-container";
            gameOverContainer.innerHTML = `
                <h1>Game Over</h1>
                <button id="playagain">Play Again</button>
            `;
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER! Your Score is ${score}.<\h1>`;  
        }
    }, 1000);
}

document.querySelector("#pbtm")
.addEventListener("click", function(details){
    //alert("running");
    var clickednum = Number(details.target.textContent);
    if(clickednum === hitrn);{
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();
