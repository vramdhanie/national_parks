// view the entire HTML document
console.log(document);

// find an <h1> element
const heading = document.querySelector("h1");
console.log(heading);

// find an element with the class "value"
const elem01 = document.querySelector(".value");
console.log(elem01);

// find a <button>
const elem02 = document.querySelector("button");
console.log(elem02);

// find an element with class "area"
const elem03 = document.querySelector(".area");
console.log(elem03);

// find an <div> that  is a descendant of class "stat"
const elem04 = document.querySelector(".stat div");
console.log(elem04);

// find an element with class "hello"
const elem05 = document.querySelector(".hello");
console.log(elem05); // null because it does not exist

// find all buttons
const buttons = document.querySelectorAll("button");
console.log(buttons);

// iterate over the NodeList of buttons
for (let element of buttons.values()) {
  console.log(element);
}

// find all h3
const heading3List = document.querySelectorAll("h3");

// iterate over entire list
for (let element of heading3List.values()) {
  console.log(element);
}

// another way to iterate
for (let i = 0; i < heading3List.length; i++) {
  const element = heading3List[i];
  console.log(element);
}

// find all divs containing ratings
const ratings = document.querySelectorAll(".rating .value");

// iterate over entire list
for (let element of ratings.values()) {
  console.log(element);
}

// find all divs containing areas
const areas = document.querySelectorAll(".area .value");

for (let i = 0; i < areas.length; i++) {
  const element = areas[i];
  console.log(element);
}
