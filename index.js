const submitHandler = (event) => {
  event.preventDefault();

  const form = document.querySelector("#parkForm");
  const formData = new FormData(form);

  // Keep track of if any errors are found
  let hasErrors = false;

  formData.forEach((value, key) => {
    let errorId = `#${key.slice(4).toLowerCase()}Error`;
    if (value.trim() === "") {
      document.querySelector(errorId).style.display = "block";
      hasErrors = true;
    } else {
      document.querySelector(errorId).style.display = "none";
    }
  });

  // if there are no errors
  if (!hasErrors) {
    //create a new element
    const parkSection = document.createElement("section");

    // add the park class
    parkSection.classList.add("park");

    // construct the HTML for this element
    const content = `
    <h2>${formData.get("parkName")}</h2>
    <div class="location">${formData.get("parkLocation")}</div>
    <div class="description">${formData.get("parkDescription")}</div>
    <button class="rateBtn" title="Add to Favourites">&#9734;</button>
    <div class="stats">
      <div class="established stat">
        <h3>Established</h3>
        <div class="value">${formData.get("parkEstablished")}</div>
      </div>
      <div class="area stat">
        <h3>Area</h3>
        <div class="value">${formData.get("parkArea")}</div>
      </div>
      <div class="rating stat">
        <h3>Rating</h3>
        <div class="value">${formData.get("parkRating")}</div>
      </div>
    </div>
    `;

    // set the innerHTML
    parkSection.innerHTML = content;

    //append to the main element
    document.querySelector("main").appendChild(parkSection);
  }
};

const main = () => {
  // get the form element
  const form = document.querySelector("#parkForm");

  // attach the submit handler
  form.addEventListener("submit", submitHandler);
};

window.addEventListener("DOMContentLoaded", main);
