let inputs = document.getElementsByClassName('form__input');
for(let i=0; i<inputs.length; i++){
    inputs[i].addEventListener('keyup',function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('pin');   
        }
        else{
            this.nextElementSibling.classList.remove('pin');   
        }
    });    
}