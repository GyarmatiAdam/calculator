const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

/** Get values from the buttons(numbers or operations) */
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        let number = btns[i].getAttribute('data-num');
        screen.value += number
    });
}

/** Throws error messages on syntax errors */
window.addEventListener("error", handleError, true);
function handleError(){
    alert('Wrong value');
}

/** Controlles if the value exists and if yes, makes an operation*/
equalBtn.addEventListener('click', function(){
    if(screen.value === ''){
        alert('input field is empty');
    }
    else{
    let value = eval(screen.value);
    screen.value = value;
    }
});

/** Simply clears the screen */
clearBtn.addEventListener('click', function(){
    screen.value = '';
});