const clockval = document.querySelector('.clock');
const buttons = document.querySelectorAll('.format button');
//let format ;
setInterval(currTime, 1000);

function currTime(){
const format = clockval.getAttribute("data-format");
const date = new Date;
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
const daytime = (hour > 12) ? 'PM': 'AM' ;
hour = hour < 10 ? "0" + hour : hour;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;

if (format === '12'){
    hour = (hour > 12) ? hour-12 : hour;
}
    clockval.innerHTML = `${hour}: ${min} : ${sec} ${daytime}`;

}

buttons.forEach((button)=>{
   button.addEventListener('click',()=>{
       const format = button.getAttribute('data-format');
       clockval.setAttribute('data-format',format);
   }) ;
});


// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const format = button.getAttribute("data-format");
//     clockEl.setAttribute("data-format", format);
//     currTime();
//   });
// });
