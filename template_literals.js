function display(){
     let num1=document.getElementsByClassName("in")[0];
     let num2=document.getElementsByClassName("in")[1];
     let num_a=parseInt(num1.value);
     let num_b=parseInt(+num2.value);
     let num=num_a+num_b;
     let res=`The sum of a and b=${num}`;
     alert(res);
}
