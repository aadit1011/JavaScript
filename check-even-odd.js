function user_f(){
     let user=document.getElementsByClassName('in')[0];
     let value=user.value;
     let check=parseInt(value)%2==0?'Even':'Odd';
     document.querySelector('h1').innerHTML=check;
};
window.addEventListener('keydown', function(event) {
     if (event.key === 'Enter') {
       user_f();
     }
});