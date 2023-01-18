let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let counterRunning = false;
console.log("working")
function startTimer(){
    console.log("inside start function");
    if(counterRunning){

    }
    else{
        let c = 0;
        let instanceID = setInterval(function(){
            let time='0';
            if(c<10) time+=c;
            console.log(time);
        },1000);
    }
}

function stopTimer(){

}

function resetTimer(){

}

start.addEventListener("click",startTimer);
stop.addEventListener("click",stopTimer);
reset.addEventListener("click", resetTimer);