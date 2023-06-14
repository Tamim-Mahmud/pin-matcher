function pinGenerator(){
    const pin=Math.round(Math.random()*100000) + '';
    if(pin.length == '5'){
       return pin ;  
       
    }
    else{
        pinGenerator();
    }
}
function pinMatcher(){
    if(document.getElementById('generated-pin').value == '' || document.getElementById('numpad-field').value == ''  ){
        document.getElementById('invalid-pin-msg').style.display = 'block';
        return ;
    }
    if(document.getElementById('generated-pin').value == document.getElementById('numpad-field').value){
       
        document.getElementById('numpad-field').value = '';
        document.getElementById('valid-pin-msg').style.display = 'block';
        document.getElementById('invalid-pin-msg').style.display = 'none';
        
    }
    else{
        document.getElementById('numpad-field').value = '';
        document.getElementById('invalid-pin-msg').style.display = 'block';
        document.getElementById('valid-pin-msg').style.display = 'none';
    }
}