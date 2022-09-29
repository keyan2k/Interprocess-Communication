//call the prompt package for getting the values from the user 
let p = require ("Prompt-Sync");
let prompt = p();



//a function that collects login id and password and check if its same with the assigned login and password using Async and Promises .
function get_deatils(){

let n = "12345";
let p ="12345";
let login = prompt("Enter your Login ID : ");
let password = prompt("Enter your Password : ");


//promises
let proc = new Promise((resolve,reject)=>{
if(login==n && password==p){
    resolve(welcome());
}
else
{
    reject ("Invalid Login and Password , Try Later");
    exit();
}
})
proc.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})
}
function time(){
    let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log("Current Time Zone : "+ time);
}
//creating the object for the function 
get_deatils();


//To Introduce callback I have simply used hello welcome 
function welcome() {
let disp = (a ,b ,i,callback)=>{

    let name = prompt("Enter your Name : "); 
    time();
    
    setTimeout(()=>{ 
       
        let c = a+name+b+i;

callback(c);

    },1000);
    
}
disp("Hello "," Welcome to the Database ","and soon the Inter Process Communication will begin ",(messag)=>{

    console.log( messag);
    setTimeout(()=>{
        console.log("Initiating the Childprocess FOLK Engine.......")
        trigger()
    },1700); 
})

}

function trigger (){
const path = require('path')
const fork = require('child_process').fork;
const program = path.resolve('2.js');
const child = fork(program);
child;
}    

