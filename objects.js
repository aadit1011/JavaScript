let player={
     name:'Cristiano Ronaldo',
     age:40,
     country:'Portugal',
     city:'Porte',
     email:'cristianoronaldo@gmail.com'
};

console.log(player);
function data(){
     let  result=confirm('Are you fan of CR7?');
     if(result==true){
          alert(`CR7 is awesome-details==`+`\nName=${player.name}\n Age=${player.age}\nCountry=${player.country}\nCity=${player.city}\nEmail=${player.email}`);
     }
     else{
          alert('Thanks for review.');
     }
};
let person={
     fname:'',
     lname:''
};
function show(){
     data();
person.fname =document.querySelector('.fname').value;
person.lname=document.querySelector('.lname').value;
     alert(`Your name is=`+ `\nFirst Name=${person.fname}\nLast Name=${person.lname}` );
};