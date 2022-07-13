
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

let html = 99, css = 95, javascript = 85;

// This is for Timer interval
let start1 = 0;
let start2 = 0;
let start3 = 0;

let speed1 = 20;

let end1 = Elements('.counter1').innerHTML =  html;
let end2 = Elements('.counter2').innerHTML =  css;
let end3 = Elements('.counter3').innerHTML =  javascript;

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
    Elements('.counter1').innerHTML = start1;
    Elements('.counter2').innerHTML = start2;
    Elements('.counter3').innerHTML = start3;
}, speed1);




const progress1 = Elements(".progressInner1");
const progress2 = Elements(".progressInner2");
const progress3 = Elements(".progressInner3");


setTimeout(()=>{
    progress1.style.width = progress1.getAttribute('skill') + '%';
    progress2.style.width = progress2.getAttribute('skill') + '%';
    
},10);

setTimeout(()=>{
    progress3.style.width = progress3.getAttribute('skill') + '%';
}, 50);





