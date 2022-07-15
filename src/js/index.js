
// This is animation for burger menu
function Elements(element){
    return document.querySelector(element);
}

let BtnBuger = Elements('.toggleBtn');
let BtnStatus = false;


BtnBuger.addEventListener('click', ()=>{
     
    if(!BtnStatus){
        Elements("#menu").style.display = "block";
        BtnBuger.classList.add('open');
        BtnStatus = true;
    }
    else{
        Elements("#menu").style.display = "none";
        BtnBuger.classList.remove('open');
        BtnStatus = false;
    }
});

// This is for counter progress bar 

let html = 99, css = 95, javascript = 85, mysql = 75, php = 90;

// This is for Timer interval
let start1 = 0;
let start2 = 0;
let start3 = 0;
let start4 = 0;
let start5 = 0;

let speed1 = 20;

let end1 = Elements('.counter1').innerHTML =  html;
let end2 = Elements('.counter2').innerHTML =  css;
let end3 = Elements('.counter3').innerHTML =  javascript;
let end4 = Elements('.counter4').innerHTML =  mysql;
let end5 = Elements('.counter5').innerHTML =  php;

setInterval(()=>{
    if(start1<end1){
        start1++;
    }
    if(start2<end2){
        start2++;
    }
    if(start3<end3){
        start3++;
    }
    if(start4<end4){
        start4++;
    }
    if(start5<end5){
        start5++;
    }
    Elements('.counter1').innerHTML = start1;
    Elements('.counter2').innerHTML = start2;
    Elements('.counter3').innerHTML = start3;
    Elements('.counter4').innerHTML = start4;
    Elements('.counter5').innerHTML = start5;
}, speed1);




const progress1 = Elements(".progressInner1");
const progress2 = Elements(".progressInner2");
const progress3 = Elements(".progressInner3");
const progress4 = Elements(".progressInner4");
const progress5 = Elements(".progressInner5");


setTimeout(()=>{
    progress1.style.width = progress1.getAttribute('skill') + '%';
    progress2.style.width = progress2.getAttribute('skill') + '%';
    progress5.style.width = progress5.getAttribute('skill') + '%';
    
},10);

setTimeout(()=>{
    progress3.style.width = progress3.getAttribute('skill') + '%';
    progress4.style.width = progress4.getAttribute('skill') + '%';
}, 50);


// This is circle progress

let counterCircle1 = 0, counterCircle2 = 0, counterCircle3 = 0, counterCircle4 = 0;

setInterval(()=>{
   if(counterCircle1 == 50){
        clearInterval();

   }
   else{
    counterCircle1+=1;
    Elements('.countC1').innerHTML = counterCircle1 + "% <span style='font-size: 12px;'>Communication</span>";
   }
}, 50);

setInterval(()=>{
   if(counterCircle2 == 55){
        clearInterval();

   }
   else{
    counterCircle2+=1;
    Elements('.countC2').innerHTML = counterCircle2 + "% <span style='font-size: 12px;'><br>Team Work</span>";
   }
}, 50);

setInterval(()=>{
    if(counterCircle3 == 65){
         clearInterval();
 
    }
    else{
     counterCircle3+=1;
     Elements('.countC3').innerHTML = counterCircle3 + "% <span style='font-size: 12px;'><br>Project<br>Management</span>";
    }
 }, 50);
 
 setInterval(()=>{
    if(counterCircle4 == 25){
         clearInterval();
 
    }
    else{
     counterCircle4+=1;
     Elements('.countC4').innerHTML = counterCircle4 + "% <span style='font-size: 12px;'><br>Creativity</span>";
    }
 }, 50);


