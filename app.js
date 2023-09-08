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
//studsCopy {name: 'John Doe', age: 20, school: 'University of California, Berkeley', major: 'Computer Science', gpa: 3.9}
//studsCopy2 {name: 'John Doe', age: 21, school: 'University of California, Berkeley', major: 'Computer Science', gpa: 38.9}

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

//earlier we use to use for loop to iterate fdata like
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
itCompanies.map((company) =>
  company.founded < 2000
    ? console.log("Map ES6 Condition ", company.name)
    : "no"
);

// Sort Method

let sorted = itCompanies.sort(function (c1, c2) {
  if (c1.founded > c2.founded) {
    return 1;
  } else {
    return -1;
  }
});
console.log("sorted", sorted);

let sortedES6 = itCompanies.sort((c1, c2) =>
  c1.founded > c2.founded ? 1 : -1
);
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
  console.log('summFoundedES6',summFoundedES6)
