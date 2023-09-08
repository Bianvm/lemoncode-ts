const shiftCounter = document.getElementById('shiftCounter');
const boxText = document.getElementById('box-text');

const buttonPrevious= document.getElementById('previousshift');
buttonPrevious?.addEventListener("click", previous);

const buttonNext= document.getElementById('nextshift');
buttonNext?.addEventListener("click", next);

const buttonReset= document.getElementById('resetshift');
buttonReset?.addEventListener("click", reset);

const operatorButton=document.getElementById('operatorbutton');
operatorButton?.addEventListener("click", operator);


function previous (){
    if (!!shiftCounter){
        let currentShift=parseInt(shiftCounter.innerHTML);
        if (currentShift>0){
            currentShift--;
            shiftCounter.innerHTML=currentShift.toString().padStart(2, '0');
            
        }
    }
}
function next (){
    if (!!shiftCounter){
        let currentShift=parseInt(shiftCounter.innerHTML);
        if (currentShift>=0 && currentShift<99){
            currentShift++;
            shiftCounter.innerHTML=currentShift.toString().padStart(2, '0');
            
        }

    }
}
function reset (){
    if (!!shiftCounter){
        let currentShift=parseInt(shiftCounter.innerHTML);
        if (currentShift>0){
            currentShift=0;
            shiftCounter.innerHTML=currentShift.toString().padStart(2, '0');
            
        }
    }
}

function operator (){
    let operatorShift = parseInt((boxText as HTMLInputElement).value);
        if (!!boxText && !!shiftCounter && operatorShift<100 && operatorShift>=0){
            shiftCounter.innerHTML = operatorShift.toString().padStart(2, '0');
        } else{
            alert('Por favor, introduzca un número válido del 1 al 99');
        }
        
}           
