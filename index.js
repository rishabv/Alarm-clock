console.log('working');
let alarmSubmit=document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click',setalarm);

var audio=new Audio('BlowBubble.mp3');

function ringbell() {
    audio.play();
}

function setalarm(e) {
    e.preventDefault();
    alarm=document.getElementById('alarm').value;
    alarmDate = new Date(alarm);    
    now=new Date();
    timeto=alarmDate-now;
    console.log(timeto);
    if(timeto>=0){
        setTimeout(() => {
            ringbell();
        }, timeto);
    }
    
}