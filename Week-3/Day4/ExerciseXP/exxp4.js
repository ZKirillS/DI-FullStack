// Exercise 1 : Scope

function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3; // a is reassigned to 3
    }
    alert(`inside the funcOne function ${a}`); // alert 3
}
funcOne();

let a = 0;
function funcTwo() {
    a = 5; 
}
function funcThree() {
    alert(`inside the funcThree function ${a}`); // will alert 0, then 5
}
funcThree(); // alerts 0
funcTwo();
funcThree(); // alerts 5

function funcFour() {
    window.a = "hello"; // sets a as global variable
}
function funcFive() {
    alert(`inside the funcFive function ${a}`); // alerts "hello"
}
funcFour();
funcFive();

let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`); // alerts "test"
}
funcSix();

let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); // alerts 5
}
alert(`outside of the if block ${a}`); // alerts 2


// Exercise 2 : Ternary operator
const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

// Exercise 3 : Is it a string ?
const isString = value => typeof value === 'string';
console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false

// Exercise 4 : Find the sum
const sum = (a, b) => a + b;
console.log(sum(3, 5));

// Exercise 5 : Kg and grams
function kgToGrams1(kg) {
    return kg * 1000;
}
console.log(kgToGrams1(2));

const kgToGrams2 = function(kg) {
    return kg * 1000;
};
console.log(kgToGrams2(3));

const kgToGrams3 = kg => kg * 1000;
console.log(kgToGrams3(4));



// Exercise 6 : Fortune teller
(function(children, partner, location, job) {
    const sentence = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.body.innerHTML += `<p>${sentence}</p>`;
})(3, "Alex", "Tel Aviv", "Data Analyst");



// Exercise 7 : Welcome
(function(name) {
    const navbar = document.getElementById("navbar");
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `<span>Welcome, ${name}</span> <img src='https://via.placeholder.com/30' alt='profile' />`;
    navbar.appendChild(userDiv);
})("John");

// Exercise 8 : Juice Bar
function makeJuice(size) {
    let ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        document.body.innerHTML += `<p>${sentence}</p>`;
    }

    addIngredients("apple", "banana", "kiwi");
    addIngredients("mango", "pineapple", "mint");
    displayJuice();
}
makeJuice("large");
