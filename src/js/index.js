
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

