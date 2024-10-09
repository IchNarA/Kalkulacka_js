const screen = document.getElementById('screen');


function addToScreen(input){
    screen.value+=input;
}

function clearDisplay(){
    screen.value="";
}

function calculate(){
    try{
        screen.value=eval(screen.value);
    }
    catch(err){
        screen.value="Error";
    }
    
}