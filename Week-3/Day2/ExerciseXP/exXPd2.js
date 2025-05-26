// Exercise 1

function displayNumbersDivisible() {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            console.log(i);
            sum += 1;
        }
    }

    console.log("Sum:", sum);
}


function displayNumbersDivisible(divisor) {
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log("Sum:", sum);
}

// displayNumbersDivisible(23);
// displayNumbersDivisible(3);
displayNumbersDivisible(45); 


// Exercise 2

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 


const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            stock[item] -= 1;
        }
    }
    return total;
}

const bill = myBill();
console.log("Total bill:", bill);
console.log("Updated stock:", stock);

// Exercise 3


function changeEnough(itemPrice, amountOfChange) {
  const [quarters, dimes, nickels, pennies] = amountOfChange;
  const total = quarters * 0.25 + dimes * 0.10 + nickels * 0.05 + pennies * 0.01;
  return total >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));


// Exercise 4

function hotelCost(nights) {
  return nights * 140;
}

function planeRideCost(destination) {
  destination = destination.toLowerCase();
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  let total = days * 40;
  if (days > 10) total *= 0.95;
  return total;
}

function totalVacationCost() {
  const nights = parseInt(prompt("How many nights at the hotel?"));
  const destination = prompt("What is your destination?");
  const days = parseInt(prompt("How many days will you rent a car?"));

  const hotel = hotelCost(nights);
  const plane = planeRideCost(destination);
  const car = rentalCarCost(days);

  console.log(`The hotel cost: $${hotel}, the plane tickets cost: $${plane}, the car rental cost: $${car}`);
  console.log(`Total cost: $${hotel + plane + car}`);
}

totalVacationCost();


// Exercise 5

const container = document.getElementById("container");
console.log(container);

document.querySelectorAll("ul.list")[0].children[1].textContent = "Richard";
document.querySelectorAll("ul.list")[1].children[1].remove();

const lists = document.querySelectorAll("ul.list");
lists.forEach(ul => ul.children[0].textContent = "Kirill");
lists.forEach(ul => ul.classList.add("student_list"));
lists[0].classList.add("university", "attendance");
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";
lists[1].lastElementChild.style.display = "none";
lists[0].children[1].style.border = "2px solid black";
document.body.style.fontSize = "18px";

if (container.style.backgroundColor === "lightblue") {
  const names = [...lists[0].children].map(li => li.textContent);
  alert(`Hello ${names[0]} and ${names[1]}`);
}

// Exercise 6

const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");
const ul = nav.querySelector("ul");
const newLi = document.createElement("li");
const textNode = document.createTextNode("Logout");
newLi.appendChild(textNode);
ul.appendChild(newLi);

console.log("First link:", ul.firstElementChild.textContent);
console.log("Last link:", ul.lastElementChild.textContent);


// Exercise 7

const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    alreadyRead: true
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const div = document.createElement("div");
  const text = document.createElement("p");
  text.textContent = `${book.title} written by ${book.author}`;
  if (book.alreadyRead) text.style.color = "red";
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";
  div.appendChild(text);
  div.appendChild(img);
  section.appendChild(div);
});
