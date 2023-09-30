// Rest and Spread Operator example for Arrays
// = +

function testRest(a, b, c, ...others) {
  /// rest
  /// rest operator collected the value and returned the array of items

  console.log(a + b + c);
  console.log(others);
  console.log("testSpread", ...others); /// spread
  /// spread operator opened up the array and returned the value saperately
}
testRest(2, 71, 13, 2, 3, 4, 89);

// /outputs

// 86
// [2, 3, 4, 89]
// testSpread 2 3 4 89

// Rest and Spread Operator example for Objects
const itCompanies = [
  {
    name: "Google",
    founded: 1998,
    headquarters: "Mountain View, CA",
    products: ["Search engine", "Gmail", "Chrome", "Android"],
  },
  {
    name: "Apple",
    founded: 1976,
    headquarters: "Cupertino, CA",
    products: ["iPhone", "iPad", "Mac", "Apple Watch"],
  },
  {
    name: "Microsoft",
    founded: 2003,
    headquarters: "Redmond, WA",
    products: ["Windows", "Office", "Azure", "Xbox"],
  },
  {
    name: "Amazon",
    founded: 1994,
    headquarters: "Seattle, WA",
    products: ["eCommerce", "AWS", "Alexa", "Kindle"],
  },
  {
    name: "Tesla",
    founded: 2003,
    headquarters: "Austin, TX",
    products: ["Electric cars", "Solar panels", "Batteries"],
  },
];
const { ...testRestObj } = itCompanies;
console.log("testRestObj", testRestObj);

//output

// testRestObj  {0: {…}, 1: {…}, 2: {…}, 3: {…}, 4: {…}}
// 0 : {name: 'Google', founded: 1998, headquarters: 'Mountain View, CA', products: Array(4)}
// 1 : {name: 'Apple', founded: 1976, headquarters: 'Cupertino, CA', products: Array(4)}
// 2 : {name: 'Microsoft', founded: 1975, headquarters: 'Redmond, WA', products: Array(4)}
// 3 : {name: 'Amazon', founded: 1994, headquarters: 'Seattle, WA', products: Array(4)}
// 4 : {name: 'Tesla', founded: 2003, headquarters: 'Austin, TX', products: Array(3)}

// Another Example
const student = {
  name: "John Doe",
  age: 20,
  school: "University of California, Berkeley",
  major: "Computer Science",
  gpa: 3.9,
};
const { name, ...studsData } = student; //Rest saperated name and other key value pairs into another object i.e studsData
console.log("studsData", name, studsData);

//   now if we want to copy entire object we can use spread
let studsCopy = { ...student };
console.log("studsCopy", studsCopy);

//   now if we want to update any value
//studsCopy['age']=21;//updating age in copied object in old way
//using spread
var studsCopy2 = {
  ...studsCopy,
  age: 21,
  gpa: 38.9,
}; //updating age using new way
console.log("studsCopy2", studsCopy2);

//  output
//studsData John Doe {age: 20, school: 'University of California, Berkeley', major: 'Computer Science', gpa: 3.9}
//studsCopy {age: 20, school: 'University of California, Berkeley', major: 'Computer Science', gpa: 3.9}
//studsCopy2 {age: 21, school: 'University of California, Berkeley', major: 'Computer Science', gpa: 38.9}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Callbacks, Promises and Async/Await
var testCB = document.getElementById("testCB");
function getData() {
  setTimeout(() => {
    var oPut = "";
    itCompanies.forEach((data, index) => {
      oPut += `<li>${data.name}, ${data.headquarters} , ${data.founded}</li>`;
      testCB.innerHTML = oPut;
    });
  }, 100);
}
function createData(data, callback) {
  setTimeout(() => {
    itCompanies.push(data);
    callback();
  }, 200);
}
createData(
  {
    name: "SJ",
    founded: 2000,
    headquarters: "Salarpur",
    products: ["Cook", "Book", "Android"],
  },
  getData
);

// Here getdata is passed as an callback function to createdata i.e.
//  createdata will expect another function to be passed and execute

//Promises

function createDataPromise(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      itCompanies.push(data);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 200);
  });
}

createDataPromise({
  name: "SJha",
  founded: 2010,
  headquarters: "NNoida",
  products: ["Cook", "Book", "Android"],
}).then(getData);

//Async/Await
function createDataAA(data) {
  setTimeout(() => {
    itCompanies.push(data);
  }, 200);
}
async function asyncFunction() {
  //created async function
  await createDataAA({
    name: "ShreyJha",
    founded: 2020,
    headquarters: "JBBP",
    products: ["Cook", "Book", "Android"],
  });
  getData(); // this will execute once createdata is excuted.
}
asyncFunction();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Closures and Lexical Scope

function sum(a) {
  //console.log(c) //---> not in lexical scope of sum
  return function (b) {
    //console.log(a,'a') //--->in scope of sum i.e 'a' can be accessed inside this callback/ closure function

    var c = 4;
    return a + b + c;
  };
}
var store = sum(2);
console.log(store(2));

//another example
function newSum(a, b, c) {
  return {
    sumofTwo: function () {
      return a + b;
    },
    sumOfThree: function () {
      return a + b + c;
    },
  };
}
var storeNew = newSum(1, 13, 13);
console.log("sum of two numbers : ", storeNew.sumofTwo());
console.log("sum of three number", storeNew.sumOfThree());

// Call, Apply, Bind Methods
const obj = {
  name: "John Doe",
  age: 30,
  city: "New York",
  printDetails: function () {
    return `Name:${this["name"]}, Age:${this["age"]}`;
  },
};
var storeObj = obj.printDetails();
console.log("storeObj", storeObj);
//now I have to call same printdetail function in another object as well , so instead of rewriting we'll use call method.
var obj2 = {
  ...obj,
  name: "Shrey",
  age: "21",
};
var callMethod = obj.printDetails.call(obj2);
//this is how we'll call function defined in different object without redeclaring it
console.log(callMethod);
//Name:Shrey, Age:21 ----> o/p

//suppose we have some generic function that need to be called onto both objects
// in that case as well we can use call method

//e.g.
const objCall1 = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

const objCall2 = {
  name: "Jane Doe",
  age: 25,
  city: "Boston",
};
function testCall(state, country) {
  // return `Name:${this["name"]} is of age:${this["age"]}, ` +  state + ' ' + + ',' + country ;
  return `Name:${this["name"]} is of age:${this["age"]}, ${state} , ${country}`;
}
// By using call we used testcall function and passed our objects as an reference which points to this.
var result1 = testCall.call(objCall1, "UP", "India"); // here we passed additional arguments as value
var result2 = testCall.call(objCall2, "UP", "US");
console.log(result1, " ", result2);

//Apply Method:

//   We can use apply in the same way we use call, just the difference being we'll pass other attriutes as an array
const objApply = {
  name: "SHREY",
  age: 25,
  city: "Boston",
};
var resultApply1 = testCall.apply(objApply, ["UP", "India"]);
console.log(resultApply1, "resultApply1");

//Bind Method

//   Bind is similar to call method, only difference being
//  we create copy of our function, store it in a variable and invoke it later

const objBind = {
  name: "SHREY",
  age: 35,
  city: "Bharat",
};
var storeBind = testCall.bind(objBind, "UP", "India");
console.log(storeBind(), "applyBindMethod");

//Higher Order Functions
//these are the functions which take another function as an argument or returns a function
//e.g. forEach, map , filter , reduce, sort etc

//earlier we use to use for loop to iterate data like
for (let i = 0; i < itCompanies.length; i++) {
  console.log("ES FOR loop", itCompanies[i].name);
}

// forEach

itCompanies.forEach(function (company, index) {
  console.log("testForEach", company.name);
});

//same output for both functions

//one line code
itCompanies.forEach((company) => console.log("OneLineCode", company.name));

//filter method

var filteredData = itCompanies.filter(function (company) {
  if (company.founded > 2000) {
    return this; //returns all elements from array if condition satisfies else return empty array
  }
});
console.log("filteredData", filteredData); //---> will return array of objects

//another exmaple

const age = [10, 20, 30, 40, 50];
var storeAge1 = age.filter(function (age) {
  if (age > 20) {
    return true;
  }
});
var storeAge = age.filter((age) => age > 20); //ES6 one liner
console.log("FilterES6", storeAge);
console.log("Filter", storeAge1);

// Map Method

itCompanies.map(function (company, index) {
  console.log("Map Method ", company, index);
});

//ES6
itCompanies.map((company, index) => {
  console.log("Map ES6 Method ", company, index);
});

//add condtion to ES6
itCompanies.map((company) => company.founded < 2000 ? console.log("Map ES6 Condition ", company.name) : "no");

// Sort Method

let sorted = itCompanies.sort(function (c1, c2) {
  if (c1.founded > c2.founded) {
    return 1;
  } else {
    return -1;
  }
});
console.log("sorted", sorted);

let sortedES6 = itCompanies.sort((c1, c2) => c1.founded > c2.founded ? 1 : -1 );
console.log("sortedES6", sortedES6);

let sortAge = age.sort((c1, c2) => (c1 < c2 ? 1 : -1));
console.log("sortAge", sortAge);

//Reduce Method
var total= 0;
for (let i = 0; i < age.length; i++) {
  total+=age[i];
}
console.log('reduceFOR',total)

const summAges= age.reduce(function(total,age){
return total + age;
},0)
console.log('summAges',summAges)

const summFounded= itCompanies.reduce(function(total,company){ // first paramenter will alwys be the intial value
  return total + company.founded;
  },0) // initial value of total is passed here
  console.log('summFounded',summFounded)

  ///ES6

  const summFoundedES6= itCompanies.reduce((total,company) =>total + company.founded,10);
  console.log('summFoundedES6',summFoundedES6);

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //Prototypes

  //Concept of inheritance i.e mechanism by which JS object innherits fetures of one object into another

  const objP1={
    "name": "Alice",
    "age": 12
    // __proto__: objP3 //---> error --> objeP3 accessd before initialisation
  }
   const objP2={
    "name": "Bob",
    "grade": "B",
    __proto__: objP1
  }
   const objP3={
    "age": 14,
    "grade": "C",
    __proto__: objP2
  }

  console.log('Prototypes',objP3.name) //*--> Bob as first parent has name key
  console.log('Prototypes',objP2.age) //*--> 12 as first parent has age key
  console.log('Prototypes',objP3.year) //*--> undefined as none of  parent has year key

  // lets try to get prototypes of object and arrays
  const array = new Array();
  console.log(array);
  console.log("Array prototype:",Array.prototype);//-> shows all the methods in an array

  const object = new Object();
  console.log(object);
  console.log("Object prototype:",Object.prototype);//-> shows all the methods in an Object


  // Creating Prototypes

  Array.prototype.show=function(){
    return this;
  }
  console.log(age.show()); //---> we'll see our show function in the list of array prototypes

  //Similarly we can create prototypes as per our requirements and use them on array or objects
  //  just like a inbuilt method like push, pop, slice

  //example

  Array.prototype.convertintoObject= function(){
    var objProto={};
    this.forEach(element=>{
      objProto[element]=element; // just for reference I put both key and value as element
    })
    return objProto;
  }
  console.log(age.convertintoObject()); //---> {10: 10, 20: 20, 30: 30, 40: 40, 50: 50}

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // MAP, SET, WEAKMAP, WEAKSET


  // MAP:
  //   map is used when you want to store unique values from your collection into another variable without any duplicates
  
  // let arr1 = [1,2,3,4,8];
  // let arr2 = [11,21,31,41,81];
  let map = new Map([["name","Shrey"],["age","20"]]);
  console.log(`Map`,map)// -> Map {size: 2, [[Entries]]: Array(2)} -> {'name' => 'Shrey', 'age' => '20'}

  let map1 = new Map([["name","Shrey"],["age","20"],["age","200"]]);
  // In this case age will store 200 as value as in Map duplicates are not allow, but wwe can change the existing value by using it's set method
  console.log(`Map1`,map1)// -> Map1 {size: 2, [[Entries]]: Array(2)} -> {'name' => 'Shrey', 'age' => '200'}

  // example
  map1.set("name","Baba")
  console.log(`Map1Updated`,map1)// -> Map1Updated{size: 2, [[Entries]]: Array(2)} -> {'name' => 'Baba', 'age' => '200'}

  for(let [key,value] of map1){
    console.log(`msp ${key}:${value}`);// name: Baba , age : 200
  }

  map1.forEach((value,key)=>{ /// in this we use value, key instead of key, value during iteration
    console.log("iterate map", key ,value);
  })

// SET--- is used when you want to store unique values from your collection into an object without any duplicates

// object constructor
const set =new Set(["apple","banana"]);
console.log('Set',set);//-> Set {"apple", "banana"}

// like any other object set also have it's own prototype methods like add, delete, size etc

set.add("9");
console.log('SetAdd',set); //-> Set {"apple", "banana", "9"}
set.delete("apple");
console.log('SetDelete',set);//-> Set {"banana", "9"}

// Weak Map --- We can only store object which can't be iterated
var wm=new WeakMap();
var objWM1={};
var objWM2={"name":"Shrey"};
wm.set(objWM1,"hello world"); // in this case object itself will act as key we can see that in console, here set method of Weak map expect us to pass 2 aruments which can act as key and value.
wm.set(objWM2,"hey buddy");
console.log("Weak Map",wm);
console.log("Weak Map objWM2",objWM2);

// Weak Set --- We can only store object which can't be iterated
var ws=new WeakSet();
var objWS1={};
var objWS2={"name":"Shrey"};
ws.add(objWS1);
ws.add(objWS2);
console.log("Weak Set",ws); //--- > object of objects objWS1 and objWS2

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

// Event Bubblling, Capturing, Stop Propagation and Prevent Default

// Event Bubblling
const tagetDiv = document.getElementsByClassName('events');
const tagetBtn = document.getElementsByClassName('btn');
const tagetLink = document.getElementsByClassName('link');

tagetDiv[0].addEventListener('click', function (e) {
  
  alert("tested") // here we can see that the event is associated with the div with class 'event' but when we click button inside this div,
  //  this event is also triggered.
  // this is called event bubbling
});

tagetBtn[0].addEventListener('click', function (e) {
  alert("tested -- btn clicked") // here we can see that the event is associated with button inside this div,
  //  this event is also triggered along with the div with class 'event' but priority will be child's event i.e Button in this case
});

// Event Capturing
// tagetDiv[0].addEventListener('click', function (e) {
//   alert("tested") 
// },true); // here if we set value as true, then event associated with parent will be prioritised over child's this is called event Capturing

//By default value of capturing is set to false.

// Event Stop Propagation
// tagetBtn[0].addEventListener('click', function (e) {
//   e.stopPropagation(); // we have added this here to stop the process of bubbling. i.e child's event will be triggered but parent won't.
//   alert("tested -- btn clicked") 
// });

// Event Stop Immmediate Propagation

// we can see , we have multiple events associated with a single element here

tagetDiv[0].addEventListener('click', function (e) {
  e.stopImmediatePropagation(); // By using this , we will be stopping the any forecoming event associated with the same element
  //i.e the next event won't be triggered. 
  alert("tested 2")
});
tagetDiv[0].addEventListener('click', function (e) {
  alert("tested 3") // this won't be triggered as above event is having e.stopImmediatePropagation().
});

// Event Prevent Default

tagetLink[0].addEventListener('click', function (e) {
  e.preventDefault();
  alert("tested link here") // here this alert will be triggered but since we have used preventDefault, so this anchor tag won't be opening any link. 
  //i.e we have prevented the default behavior of the anchor tag.
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Currrying Functions -- it transforms a function with multiple arguments into a nested series of functions with single arguments

//generally we create any function like this

function getSum(a,b,c){
  return a+b+c;
}

console.log('getSum', getSum(1,2,3));

//Now by using currying we can do like this, by creating higher order functions

function currySum(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}

console.log('currySum', currySum(1)(2)(3));

//another example

let objectCurry  = {
  "name":"Shrey",
  "age":"20"
}

function info(object){
  return function(values){
    return object[values];
  }
}

console.log('infoCurry',info(objectCurry)("name"));
console.log('infoCurry',info(objectCurry)("age"));

///////Infinite Currying

// to get sum of infiinte no. of values

function infiniteCurrying(a){
  return function(b){
    if(b){
      return infiniteCurrying(a+b);
    }else{
      return a;
    }
  }
}

console.log('infiniteCurrying', infiniteCurrying(1)(2)(3)(4)(5)(6)(7)(8)());  //-- we put an empty paranthesis at last here

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//Debouncing -- In this we take a function and returns a bettter function after some delay to optimize the performance of web site

const inputField = document.getElementsByClassName('inputField');
const inputFieldDebounce = document.getElementsByClassName('inputFieldDebounce');
var counter=0;
function getDataOnKeypress(){
  console.log('keypressed',counter++);
}

inputField[0].addEventListener('keypress',function(){
  getDataOnKeypress(); // issue eith this function will be that on every keypress event will be triggered. That may not be optimized for the webpage
});
// this thing is usually faced in search bar where instead of triggering event on every keypress we wait for sometime and then trigger the event


function debounce(callback, interval) {
  var timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, interval);
  };
}

const betterFunction = debounce(getDataOnKeypress,1000); /// by using this we'll save a lot of memory by not doing uneccesary calls to the api to fetch data
// it will allow user to type properly and then it will show the data

inputFieldDebounce[0].addEventListener('keypress',function(){
  betterFunction();
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Throttle -- In this we take a function and returns a bettter function , used to limit the number of function calls on any event the performance of web site

const throttlenonBtn = document.getElementById('throttlenonBtn');
const throttleBtn = document.getElementById('throttleBtn');

throttlenonBtn.addEventListener('click',function(){
  console.log('throttled');
});

function throttle(callback, interval) {
  return function(){
    throttleBtn.disabled  = true;
    setTimeout(() => {
      callback();
    }, interval);
  }
}

const betterthrottleFunction = throttle(()=>{
  throttleBtn.disabled  = false;
  console.log('throttle done');
},1000); /// by using this we'll save a lot of memory by not doing uneccesary calls to the event

throttleBtn.addEventListener('click',function(){
  betterthrottleFunction();
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Creating Promise

let cart  =  ['a','b','c'];

function getCart(){
  return new Promise((resolve,reject) => {
    if(!validateCart()){
      let err = new Error("Validate properly");
      reject(err);
    }else{
      resolve("Cart Validated sucessfully");
    }
  })
}
function validateCart(){
  return true;
}

getCart()
.then((data) => {
  console.log('PROMISE DATA',data);
})
.catch(function(err){
  console.log(err.message);
});

// Async/ Await 

// Async is a keyword used before a function to make that function a asynchronous function, which will rather return a promise
//  or if we are passing a non promise data, it will create a promise, wrap our data into it and the return it.

async function getCart1(){
  if(!validateCart()){
    let err = new Error("Validate properly");
    throw err;
  }else{
    return "Cart Validated sucessfully";
  }
}
const data = getCart1();
data.then((res)=> console.log('ASYNC DATA',res));

// HERE we can see using promise or sync we are getting the same result at last.

// Await is a keyword used inside a async function . we write this keyword in front of a promise to handle it effectively.

//Suppose we have a promise

const promise = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("hi there it's resolved");    
  }, 10000);
});

//Now brefore async await we used to handle a promise like:

function getRealData(){
  promise.then((res)=>console.log("Handled Promise without async/await-", res));
  console.log('before promise execution') // this will be excecuted before ppromise
}

getRealData();

//But incase we have some function or event to execute after that promise is resolved but with this approach. the call stack (JS engine)
//  won't stop for promise to get executed completely and we might end up with error

//Now we can use async await to handle a promise like:

async function getRealData1(){
  const res = await promise; // here it will wait for  the promise to get resolved and then move to next line -- 
  // basically inside call stack the execution of this function gets suspended and resume from the same point where it stopped
  console.log("Handled Promise with async/await-", res);
}

getRealData1();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Fetch--- It is a promise , which once rsolved gets us a response object having a body, shich has a redable stream.


// ?Example -

const API = "https://api.github.com/users"
const API2 = "https://api.github.com/techysj"

async function fetchData(){
  const response = await fetch(API);
  const data = await response.json(); ///----> it will give a json value
  
  console.log(data);

// usually we write above steps as

fetch(API).then((res)=>res.json()).then(res=>console.log('SHORTHAND',res));
}

fetchData();


// Error handling in ASync Await

async function fetchData1(){
  try{
    const response = await fetch(API2);
    const data = await response.json(); ///----> it will give a json value
    
    console.log(data);
  }catch(err){
    console.log(err.message);
  }
}

fetchData1();