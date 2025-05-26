const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 79 },
  { name: "Saturn", color: "pink", moons: 83 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "darkblue", moons: 14 }
];

const section = document.querySelector(".listPlanets");

planets.forEach((planet) => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;
  planetDiv.style.color = "white";

  for (let i = 0; i < Math.min(planet.moons, 15); i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");
    const angle = (i * 360) / planet.moons;
    const radius = 60 + i * 2;
    moon.style.left = `${50 + radius * Math.cos(angle)}px`;
    moon.style.top = `${50 + radius * Math.sin(angle)}px`;
    planetDiv.appendChild(moon);
  }

  section.appendChild(planetDiv);
});
