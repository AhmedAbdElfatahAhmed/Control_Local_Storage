let allspans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allspans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
      theInput.value = "";
    }
    if (e.target.classList.contains("add-item")) {
      addItem();
      theInput.value = "";
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
      theInput.value = "";
    }

    if (e.target.classList.contains("show-items")) {
      showItems();
    }
  });
});

function checkInput() {
  results.innerHTML = "Input Can Not Be Empty";
}

function checkItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `Found local storage item called <span>${theInput.value}</span>`;
    } else {
      results.innerHTML = `No local storage item with the name <span>${theInput.value}</span>`;
    }
  } else {
    checkInput();
  }
}

function addItem() {
  if (theInput.value === "") {
    checkInput();
  } else {
    localStorage.setItem(theInput.value, "test");
    results.innerHTML = `<span>${theInput.value}</span> item Add to local storage `;
  }
}

function deleteItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);
      results.innerHTML = `<span>${theInput.value}</span> Which removed from local storage`;
    } else {
      results.innerHTML = `No local storage item with the name <span>${theInput.value}</span>`;
    }
  } else {
    checkInput();
  }
}

function showItems() {
  if (localStorage.length) {
    results.innerHTML = "";
    for (const [key] of Object.entries(localStorage)) {
      results.innerHTML += `<span class="d-block">${key}</span>`;
    }
  } else {
    results.innerHTML = "No items in local storage";
  }
}
