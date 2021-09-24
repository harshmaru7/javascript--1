

const minE1 = document.querySelector('.min');
const secE1 = document.querySelector('.sec');
const hourE1 = document.querySelector('.hour');

/* so now we want to continuously refresh and update the time  */

setInterval(()=>{

const date = new Date;
let hourdeg = date.getHours();
const secdeg = date.getSeconds()*6-90;
/* now this shoud be multplied by 6 but how */
const mindeg = date.getMinutes()*6-90;
if(hourdeg > 12){
    hourdeg = hourdeg - 12 ;
}
hourdeg = hourdeg*30 -90;

secE1.style.transform = `rotate(${secdeg}deg)`;
minE1.style.transform = `rotate(${mindeg}deg)`
hourE1.style.transform = `rotate(${hourdeg}deg)`

},500)

