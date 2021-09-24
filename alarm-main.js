var alarmSound = new Audio();
alarmSound.src = "./office.mp3";
function setAlarm(button){
    
    var ms = document.getElementById('alarmTime').valueAsNumber;

    if(isNaN(ms)){
        alert('Invalid Date');
        return ;
    }

    var alarm = new Date(ms);
    var alarmTime = new Date(alarm.getUTCFullYear(),alarm.getUTCMonth(),alarm.getUTCDate(),alarm.getUTCHours(),alarm.getUTCMinutes(),alarm.getUTCSeconds());

    var difference = alarmTime.getTime() - (new Date()).getTime();

    if(difference < 0){
        alert("Time has passed");
        return ;
    }

    setTimeout(initAlarm,difference);

    button.innerText = "Cancel Alarm";
    button.setAttribute('onclick','cancelAlarm(this');
};

function cancelAlarm(button){
    button.innerText = "Set Alarm";
    button.setAttribute('oneclick','setAlarm(this');
}

function initAlarm(){
    alarmSound.play();
    document.getElementById('alarmOptions').style.display = " ";
};

function stopAlarm(){
    alarmSound.pause();
    alarm.currentTime = 0;
    document.getElementById('alarmOptions').style.display = 'none';
};

function snooze(){
    stopAlarm();
    setTimeout(initAlarm,36000);
};