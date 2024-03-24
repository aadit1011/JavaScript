let num_a,num_b,num1,num2;
function data(){
     num_a=document.querySelector('.a').value;
     num_b=document.querySelector('.b').value;
     num1=parseInt(num_a);
     num2=parseInt(num_b);
}
const add=()=>{
     data();
     let result=num1+num2;
     document.querySelector('.res').value=result;
};
function sub(){
     data();
     let result=num1-num2;
     document.querySelector('.res').value=result;
};
const mul=()=>{
     data();
     let result=num1*num2;
     document.querySelector('.res').value=result;
};
//also we can parameterize the function in both ways
let a=5,b=10;
function parameterized1(a,b){
     console.log(a+b);
}
const parameterized2=(a,b)=>{
     console.log(a+b);
};