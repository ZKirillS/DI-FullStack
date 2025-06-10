// Exercise 1: Giphy API - Fetch “hilarious” GIFs

const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("GIFs about 'hilarious':", data);
  })
  .catch(error => {
    console.error("Error fetching Giphy API:", error);
  });


// Exercise 2: Giphy API - Fetch 10 “sun” GIFs starting at index 2

const sunUrl = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2";

fetch(sunUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("GIFs about 'sun':", data);
  })
  .catch(error => {
    console.error("Error fetching sun GIFs:", error);
  });


// Exercise 3: Async/Await Version of SWAPI Starship


async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.result);
  } catch (error) {
    console.error("Error fetching Star Wars data:", error);
  }
}

getStarship();


// Exercise 4: Analyze the Async Code

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();