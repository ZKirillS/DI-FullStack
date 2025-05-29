const libForm = document.getElementById("libform");
const libButton = document.getElementById("lib-button");
const storySpan = document.getElementById("story");

const shuffleBtn = document.createElement("button");
shuffleBtn.textContent = "Shuffle story";
document.body.appendChild(shuffleBtn);

let inputValues = {};
let storyTemplates = [
  ({ noun, adjective, person, verb, place }) => `${person} went to ${place} with a ${adjective} ${noun}, then decided to ${verb} all night.`,
  ({ noun, adjective, person, verb, place }) => `In ${place}, ${person} found a ${adjective} ${noun} and started to ${verb} with joy.`,
  ({ noun, adjective, person, verb, place }) => `Why did ${person} take the ${adjective} ${noun} to ${place}? To ${verb}, of course!`
];

libForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields.");
    return;
  }

  inputValues = { noun, adjective, person, verb, place };

  displayRandomStory();
});

shuffleBtn.addEventListener("click", function () {
  if (Object.keys(inputValues).length === 0) {
    alert("Please generate a story first using the form.");
    return;
  }
  displayRandomStory();
});

function displayRandomStory() {
  const randomIndex = Math.floor(Math.random() * storyTemplates.length);
  const story = storyTemplates[randomIndex](inputValues);
  storySpan.textContent = story;
}