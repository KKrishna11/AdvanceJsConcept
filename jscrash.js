const { mainModule } = require("process");

if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    // 👉️ can use alert()
  } else {
    console.log('You are on the server')
    // 👉️ can't use alert()
  }
  

var x=290;
x+=1
var lol=null
var whatever;
console.log("this is varaible",x);
console.log("this is undefined",whatever)
console.log("this is null which we defined",whatever)

const pi=3.141

// pedmas
// window.prompt("lol")

// dom
// document.getElementById()

// explicit and Implicit 

var  TypeConversion=Number(90);

// console.assert(4==6)
console.assert(6==6)

// function 

function sayHello(){
  console.log("Hello",myName)
  return
}

sayHello();


var myName="Bro is global parameter ";

sayHello();

function toCelsius(f){
  return (f-32)*(5/9);
}
function toFarenheit(c){
  return (c*9/5)+32;
}

var myTemp=toCelsius(100)
var myC=toFarenheit(37.7)

console.log("My temp in F is",myTemp);
console.log("My temp in c is",myC);


// objects

var human={

  nameOfHuman :"Rick",
  age:18,
  eat:function(){
    console.log("rick is eating food")
  },
  sleep:function(){
    console.log("Rick is passed out")
  }
}

human.nameOfHuman //dot notation 
console.log("dot notation",human.nameOfHuman)

human['age']
console.log("bracket notation",human['age'])

human.eat() //calling function 

// console.log(human)


// Array


var cars =['lol','krishna','ok','telsa','cool'];

console.log(cars[3])

cars.push('kuul')

console.log(cars)

cars.pop("kuul")

console.log(cars)
console.log("length of cars ",cars.length)

// cars.sort()

// console.log("sorted",cars)

lastValue=(cars[0])
console.log(cars[cars.length-2])
console.log(lastValue)


// switch

var grade='0'

switch(grade){
  case "A":
    console.log("kal anna kal")
    break
  case "B":
    console.log(" krishna got B grade wohoo")
    break
  case "c":
    console.log("LOl")
    break
  case "f":
    console.log("fail bhai") 
  default:
    console.log("default ")
}

var a=45
// let cannot redeclared 
let name='krishna'
name="coolkid"

// for loop

for (let i=0    ; i<5;       i++)
{
  console.log(i)
  
}




var factorial=1
var num=9
for(l=1;l<=num;l++)
{

  factorial=factorial*l
}
console.log(factorial)
  // for in loop

let obj=
{
  K:90,
  R:10,
  I:10,
  S:0,
  H:99
}

for (let a in obj)
{

  console.log("marks of   "+  a  +"   are this     "+obj[a])

}

// for off loop

for (let b of  "string and arary"){

  console.log(b)
}


let i=0


// while (i<=3)

// {
//   console.log(i)
// i++
// }



do{
  console.log(i)
  i++
}
while(i<=3)

// promblem set 1

let marks=
{
  K:90,
  R:10,
  I:10,
  S:0,
  H:99
}

for (let i =0;i<Object.keys(marks).length;i++){
 console.log("the marks of"+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]) 
}

// promblem set 2
for (let key in marks)
{
  console.log("The marks of "+key+"are  "+marks[key])
}

const mean=(a,b,c,d)=>
{
  return(a+b+c+d)/4
}
console.log(mean(4,5,6,7))

// template literals
let firstName="Krishna"
let lastName="Kushwaha"
console.log(`Full Name is :${firstName  }  ${  lastName}`) 

// EXCASPE SEQUENCE CharacterData
let fruits='Bana\'na'
// /n=>newline
// /t=>tab
// /r=>carriage Return
console.log(fruits)

let numarray=[2,3,4,5,6,7,8,9,0]
// for(let item of numarray)
// {
//   console.log(item)
// }

// for (let n in numarray)
// {
//   console.log(n)
//   console.log(numarray[n])
// }


// setTimeout(function(){
//    console.log("sleep function ")
// },5000)
// console.log("ERROROORO")

// clearTimeout()

// setInterval(function name(params) {
//   console.log("ok Done")
// },100)


// setTimeout(()=>{
//   console.log("Krishna")
//   setTimeout(()=>{
//     console.log("Kushwaha")
//     setTimeout(()=>{
//       console.log("KKKKKKKK")
//     },1000)
//   },2000)
// },10)

// let promise=new Promise((resolve, reject) => {
//   console.log("I am Cool KiD ")
//   resolve(00)
//   reject("ok")
// })

// console.log("Hello world 1")
// setTimeout(function(){
//   console.log("2 seconds")
// },2000)

// console.log(" 3 second    ")

// console.log(promise)

// let p= new Promise((resolve,reject)=>{
//   console.log("promise is pending")
//   setTimeout(()=>{
//     console.log("I m promise and i AAM FULFILLED")
//     resolve(true)
//     // reject(new Error("I am Error "))
//   },3000)
// })

// p.then(()=>{
//   console.log("is promise resolve then ")
// })

// p.catch((error)=>{
//   console.log("errrrrrr")
// })

// let pp1=new Promise((resolve, reject) => {

//   setTimeout(() => {
//     console.log("Resolving after 2 second  :( ")
//     resolve(56)
//   }, 2000);
  
// });

// pp1.then((value)=>{
//   console.log(value)

//   let pp2=new Promise((resolve, reject) => {
//     resolve("Promise P2 ")
//   })
//   return pp2
// }).then((value)=>{
//   console.log("ALll promises are Done ")
//   return lol
// }).catch(()=>{
//  console.log("Error")
// }).then(()=>{
//   console.log("call back hell promises solved h ")
// })



// let p1= new  Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The value 1  : >")
//     resolve(true)
//   }, 1000);

// });

// let p2= new  Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The value 2 : >")
//     resolve(true)
//   }, 2000);

// });

// let p3= new  Promise((resolve, reject) => {

//   setTimeout(() => {
//     console.log("The value 3 : >")
//     // reject(new Error(Error))
//   }, 3000);
// });

// let promise_all=Promise.all([p1,p2,p3])


// let promise_all=Promise.allSettled([p1,p2,p3])


// let promise_all=Promise.race([p1,p2,p3] )



// let promise_all=Promise.any([p1,p2,p3] )


// let promise_all=Promise.resolve([p1,p2,p3] )

// let promise_all=Promise.reject([p1,p2,p3] )


// promise_all.then((value)=>{
//   console.log(value)
// })


async function ok(){

  let p1= new  Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("The value 1  : >")
      resolve(true)
    }, 1000);
  
  })
  
  let p2= new  Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("The value 2 : >")
      resolve(true)
    }, 2000)

})

  let aa= await p1
  let bb=await p2
}

async function lollllll(){
  setTimeout(() => {
    
    console.log("iiiiiiii")
  }, 5000);
}


async function cool(){

  let a= await ok()
  let b= await lollllll()

}

cool()
var piop=fetch("https://goweather.herokuapp.com/weather/Ny")

piop.then((response)=>{
  
console.log(response.status)
console.log(response.ok)
console.log(response.headers)
  return response.json()

}).then((value2)=>{
  
  console.log( value2)

}
)


// let options ={
//   method:"POST",

//   headers:
//   {
//     "Content-type":"application/json"
//   },  
//   body:JSON.stringify({
//     title:"Krishna",
//     body:'Beer',
//     UserId:"1",
//     price:190,
//     BeerName:'kingFisher Ultra Mild ' 
//   }),
//   }

// fetch('https://jsonplaceholder.typicode.com/posts',options)
// .then(response => response.json())
// .then(json => console.log(json))


// better method


const cunc = async()=>{

let options ={
  method:"POST",
  headers:
  {
    "Content-type":"application/json"
  },  
  body:JSON.stringify({
    title:"Krishna",
    body:'Beer',
    UserId:"1",
    price:190,
    BeerName:'kingFisher Ultra Mild ' 
  }),


}

let pp = await fetch('https://jsonplaceholder.typicode.com/posts',options)

let response=await pp.json()
return response

}

let MainFunc= async()=>{
   
let o= await cunc()
console.log(o)
}

MainFunc()