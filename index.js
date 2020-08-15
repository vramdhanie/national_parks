// select all the descriptions on the page

const descriptions = document.querySelectorAll(".description");

for (desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }

  desc.innerHTML = content;
}

// select all rating values
const ratings = document.querySelectorAll(".rating .value");

for (rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high_rating");
    rating.classList.remove("value");
  }
}

// Select all parks
const parks = document.querySelectorAll(".park");
const numberParks = parks.length;

// create a new element
const newElement = document.createElement("div");

// add the text
newElement.innerText = `${numberParks} exciting parks to visit`;

//add the class
newElement.classList.add("header_statement");

// insert the new element
const header = document.querySelector("header");
header.appendChild(newElement);

// get the parent element of all parks
const main = document.querySelector("main");

//select a single park
const park = main.querySelector(".park");

// remove that park
// main.removeChild(park);
