const form = document.getElementById("userForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();

  const userData = {
    firstName,
    lastName
  };

  output.textContent = JSON.stringify(userData, null, 2);
});
