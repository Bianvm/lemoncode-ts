const shiftCounter = document.getElementById('shiftCounter') as HTMLHeadingElement;
const boxText = document.getElementById('box-text') as HTMLInputElement;

const buttonPrevious = document.getElementById('previousshift');
if (buttonPrevious !== null && buttonPrevious !== undefined && buttonPrevious instanceof HTMLButtonElement) {
    buttonPrevious.addEventListener("click", previous);
}

const buttonNext = document.getElementById('nextshift');
if (buttonNext !== null && buttonNext !== undefined && buttonNext instanceof HTMLButtonElement) {
    buttonNext.addEventListener("click", next);
}

const buttonReset = document.getElementById('resetshift');
if (buttonReset !== null && buttonReset !== undefined && buttonReset instanceof HTMLButtonElement) {
    buttonReset.addEventListener("click", reset);
}

const operatorButton = document.getElementById('operatorbutton');
if (operatorButton !== null && operatorButton !== undefined && operatorButton instanceof HTMLButtonElement) {
    operatorButton.addEventListener("click", operator);
}


function previous() {
    if (shiftCounter !== null && shiftCounter !== undefined && shiftCounter instanceof HTMLHeadingElement) {
        let currentShift = parseInt(shiftCounter.innerHTML);
        if (currentShift > 0) {
            currentShift--;
            shiftCounter.textContent = currentShift.toString().padStart(2, '0');

        }
    }
}
function next() {
    if (shiftCounter !== null && shiftCounter !== undefined && shiftCounter instanceof HTMLHeadingElement) {
        let currentShift = parseInt(shiftCounter.innerHTML);
        if (currentShift >= 0 && currentShift < 99) {
            currentShift++;
            shiftCounter.textContent = currentShift.toString().padStart(2, '0');

        }

    }
}
function reset() {
    if (shiftCounter !== null && shiftCounter !== undefined && shiftCounter instanceof HTMLHeadingElement) {
        let currentShift = parseInt(shiftCounter.innerHTML);
        if (currentShift > 0) {
            currentShift = 0;
            shiftCounter.textContent = currentShift.toString().padStart(2, '0');

        }
    }
}

function operator() {
    let operatorShift = parseInt((boxText as HTMLInputElement).value);
    if (!!boxText && !!shiftCounter && operatorShift < 100 && operatorShift >= 0) {
        shiftCounter.textContent = operatorShift.toString().padStart(2, '0');
    } else {
        alert('Por favor, introduzca un número válido del 1 al 99');
    }

}           
