const MAX_NUMBER= 10
const MIN_NUMBER= -10
const STEP_AMOUNT = 1;
const RESET_AMOUNT = 0

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="substract"]')
const add = document.querySelector('[data-key="add"]')
const reset = document.querySelector('[data-key="reset-button"]')
const resetOverlay = document.querySelector('[data-key="reset-overlay"]')


const subtractHandler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT   
    number.value = newValue;

    if (add.disabled === true){
        add.disabled = false
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    }
    
}

const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue;

    if (subtract.disabled === true) {
        subtract.disabled = false
    }

    if (newValue >= MAX_NUMBER){
        add.disabled = true
    }
}
const resetHandler = () =>{
    number.value = 0;     

    resetOverlay.show();
}
reset.addEventListener('click', resetHandler)
subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)

