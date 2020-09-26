let maindiv=document.getElementById('maincontainer');
let mybutton=document.getElementById('btn');
mybutton.addEventListener('click',clickbutton);
function clickbutton(){
    let colorarray=["blue", "red","yellow", "pink", "white", "brown", "orange", "black"];
    let number = Math.floor(Math.random()*colorarray.length);
    let mycolor =colorarray[number];
    maindiv.style.backgroundColor=mycolor;
    console.log(mycolor);
    console.log(number);    
}