
    
const sc = document.querySelector('.sc');
const mn= document.querySelector('.mn');
const hr = document.querySelector('.hr');

function showTime(){
  let now = new Date();
  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hour = now.getHours();
  
  console.log(`Hour: ${hour} Minute:  ${min}  Second:  ${sec}`);

  let hourRotate = hour*360/12 + ((min * 360/60)/12) ;
  let minRotate = (min * 360/60) + (sec* 360/60)/60;
  let secRotate = sec * 360/60;

  hr.style.transform = "rotate(" + hourRotate + "deg)";
  mn.style.transform = "rotate(" + minRotate + "deg)";
  sc.style.transform = "rotate(" + secRotate + "deg)";
};

showTime();
setInterval(showTime, 1000);
   
