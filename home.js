
var hourEL= document.getElementById("hour");
var minEL= document.getElementById("minut");
var secEL= document.getElementById("second");
var X= document.getElementById("AM")



function updateClock(){

let newH= new Date().getHours();
let m= new Date().getMinutes();
let s= new Date().getSeconds();
let updatex ="AM"
if (newH>12){
    updatex=newH-12;
    updatex= "PM"
}
hourEL.innerText= newH;
minEL.innerText= m;
secEL.innerText= s;
X.innerText=updatex;

setTimeout(() => {
    updateClock();  
}, 1000);



}






updateClock();