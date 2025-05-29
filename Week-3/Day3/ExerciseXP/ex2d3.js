//Exercise 1

setTimeout(() => {
  alert("Hello World");
}, 2000);

setTimeout(() => {
  const container = document.getElementById("container");
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
}, 2000);

let count = 0;
const intervalId = setInterval(() => {
  const container = document.getElementById("container");
  if (count >= 5) {
    clearInterval(intervalId);
    return;
  }
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
  count++;
}, 2000);

document.getElementById("clear").addEventListener("click", () => {
  clearInterval(intervalId);
});


//Exercise 2

function myMove() {
  const elem = document.getElementById("animate");
  let pos = 0;
  const containerWidth = 400;
  const boxWidth = 50;
  const maxRight = containerWidth - boxWidth;

  const id = setInterval(() => {
    if (pos >= maxRight) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + "px";
    }
  }, 1);
}