const buttons=document.querySelectorAll('button');
const display=document.querySelector('.display')
buttons.forEach(function(button){
    button.addEventListener('click',calculate);
});
function calculate(event){
    const clicked=event.target.value;
    if(clicked=='='){
        if(display.value!='')
        {
            display.value=eval(display.value);
        }
    }
    else if(clicked=='C'){
        display.value=''
    }
    else if(clicked=='00')
    {
        display.value*=100;
    }
    else{
        display.value+=clicked;
    }
}