let cartQuantity=0;
function pressHere(){
     let num=cartQuantity++;
     let res= `Your cart has ${num} bags.`;
     document.querySelector('h2').innerText=res;
};
