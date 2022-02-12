 setInterval(setClock,1000);

const  secondHand =  document.querySelector('[data-second-hand]');
const  minuteHand =  document.querySelector('[data-minute-hand]');
const   hourHand  =  document.querySelector('[data-hour-hand]');

function setClock(){
	const currentDate = new Date();
	const secondsRatio = currentDate.getSeconds() / 60;
	const minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60;
	const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

	setRotation(secondHand, secondsRatio);
	setRotation(minuteHand, minuteRatio);
	setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio){
	element.style.setProperty('--rotation', rotationRatio * 360);

}
/*
setClock();
// watch
setInterval(getTime, 1000);
function getTime(){
	const time = new Date();
	const hour = time.getHours();
	const min = time.getMinutes();
	const sec.getSeconds();
	am_pm = "AM";

	if (hour  > 12){
		hour-= 12;
		am_pm = "PM"

	}
	if(hour == 0 ){
		hr == 12 ;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min  : min;
	sec = sec < 10 ? "0" + sec : sec;
	let currentTime = hour + " : " + min + " : "+ sec + am_pm;
	document.getElementById("watch").innerHTML = currentTime;
}
getTime();
*/
