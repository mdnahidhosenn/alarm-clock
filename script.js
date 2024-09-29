
const selectMenu = document.querySelectorAll('select');
currentTime = document.querySelector('h1');
setAlarmBtn=document.querySelector('button');
content = document.querySelector(".content");


let alarmTime , isAlarmSet,
 ringtone = new Audio('files/ringtone.mp3')

for(i=12; i>0 ; i--){
 i=i<10 ? '0' + i : i;
 let option = `<option value="${i}">${i}</option>`;
 selectMenu[0].firstElementChild.insertAdjacentHTML('afterend',option)
}
for(i=59; i>=0 ; i--){
 i=i<10 ? '0' + i : i;
 let option = `<option value="${i}">${i}</option>`;
 selectMenu[1].firstElementChild.insertAdjacentHTML('afterend',option)
}
for(i=2; i>0 ; i--){
 ampm= i== 1 ? 'AM' : 'PM';
 let option = `<option value="${ampm}">${ampm}</option>`;
 selectMenu[2].firstElementChild.insertAdjacentHTML('afterend',option)
}


setInterval(() => {
 
let date = new Date();
h=date.getHours();
m=date.getMinutes();
s=date.getSeconds();

ampm = " AM"
if(h >=12){
 h=h-12;
 ampm = 'PM'
};
h = h==0 ? 12 : h;
h = h<10 ? '0' + h : h;
m = m<10 ? '0' + m : m;
s = s<10 ? '0' + s : s;


currentTime.innerText = `${h} : ${m} : ${s} ${ampm}`

if(alarmTime == `${h} : ${m} ${ampm}`){
  ringtone.play();
  ringtone.loop=true;
}

});

function setAlarm(){

 if(isAlarmSet){
  alarmTime= '';
  ringtone.pause();
  setAlarmBtn.innerText = 'Set Alarm'
  content.classList.remove('disable')
  return isAlarmSet= false;
 }

let time = `${selectMenu[0].value} : ${selectMenu[1].value} ${selectMenu[2].value}`;
alarmTime = time ;

if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
 return alert("Please, select a valid time to set Alarm!");
}

isAlarmSet = true;
setAlarmBtn.innerText = 'Clear Alarm'
content.classList.add('disable')

}

setAlarmBtn.addEventListener('click',setAlarm)
