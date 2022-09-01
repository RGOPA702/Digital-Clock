const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

const dateEl = document.getElementById("date");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");



//function updateDate(){
    let d = new Date().getDate();
    let m1 = new Date().getMonth();
    let y = new Date().getYear();
    
     

function updateClock(){
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let ampm = "PM"

if(h>12){
    h = h-12;
    ampm = "AM";
}

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

hourEl.innerText = h;
minuteEl.innerText = m;
secondEl.innerText = s;
dateEl.innerText = d;
ampmEl, (innerText = ampm);
setTimeout(()=>{
    updateClock()
}, 1000)

}

updateClock();

