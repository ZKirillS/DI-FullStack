// console.log("JavaScript is workong!");
// alert("Hello from JS");

// function nameFunc() {
//     console.log('hello from function')
// }
// console.log(nameFunc())



// function getFullName(firstname, lastname) {
//     // return firstname + " " + lastname;
//     // return [firstname, lastname]
//     return {
//         name: firstname,
//         last: lastname
//     }
// }

// let val = getFullName('John', 'Doe');
// console.log(val);
// console.log(getFullName('a','b'));


function sum(a, b = 1) {
    // if(b === undefined){
    //     b = 1
    // }
    return a + b
}

let res = sum (4, 4);
console.log(res);
