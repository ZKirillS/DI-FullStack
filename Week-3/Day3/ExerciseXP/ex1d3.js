//Exercise 1

const h1 = document.querySelector("article h1");
console.log(h1);

const article = document.querySelector("article");
const lastP = article.lastElementChild;
article.removeChild(lastP);

const h2 = document.querySelector("article h2");
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});

const h3 = document.querySelector("article h3");
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

const boldBtn = document.createElement("button");
boldBtn.textContent = "Make Paragraphs Bold";
document.body.appendChild(boldBtn);

boldBtn.addEventListener("click", () => {
  const paragraphs = document.querySelectorAll("article p");
  paragraphs.forEach(p => p.style.fontWeight = "bold");
});

// BONUS 1: Random font size on h1 hover
h1.addEventListener("mouseover", () => {
  const randomSize = Math.floor(Math.random() * 101);
  h1.style.fontSize = `${randomSize}px`;
});


//Exercise 2

const form = document.querySelector("form");
console.log(form);

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
console.log(fname, lname);

const inputsByName = document.querySelectorAll("input[name]");
console.log(inputsByName);

const ul = document.querySelector(".usersAnswer");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  ul.innerHTML = "";
  if (fname.value.trim() && lname.value.trim()) {
    const li1 = document.createElement("li");
    li1.textContent = fname.value;
    const li2 = document.createElement("li");
    li2.textContent = lname.value;

    ul.appendChild(li1);
    ul.appendChild(li2);
  } else {
    alert("Both fields are required");
  }
});


//Exercise 3

let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll("p strong");
}

function highlight() {
  allBoldItems.forEach(el => el.style.color = "blue");
}

function returnItemsToDefault() {
  allBoldItems.forEach(el => el.style.color = "black");
}

const boldParagraph = document.querySelector("p");
getBoldItems();
boldParagraph.addEventListener("mouseover", highlight);
boldParagraph.addEventListener("mouseout", returnItemsToDefault);


//Exercise 4

const sphereForm = document.getElementById("MyForm");
sphereForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const radius = parseFloat(document.getElementById("radius").value);
  const volumeInput = document.getElementById("volume");

  if (!isNaN(radius)) {
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeInput.value = volume.toFixed(2);
  } else {
    volumeInput.value = "Invalid input";
  }
});