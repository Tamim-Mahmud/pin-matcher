
document.getElementById('numpad').addEventListener('click',function(event) {
    const keyValue = event.target.innerText ;
    if(keyValue=='C'){
        document.getElementById('numpad-field').value='';
    }
    else if(keyValue == '<' ){
       let newValue= document.getElementById(('numpad-field')).value;

       newValue=newValue.split('');
       newValue.pop();
       console.log(newValue);
        document.getElementById('numpad-field').value= newValue.join('');

    }
    else if(keyValue == 'Submit'){
        let i=0;
        if(i<=3)pinMatcher();
        else document.getElementById('event.target').setAttribute('disabled','');

    }
    else{
        document.getElementById('numpad-field').value += keyValue;
    }
    
    
});
