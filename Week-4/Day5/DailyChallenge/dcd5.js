const form = document.getElementById('gifForm');
const categoryInput = document.getElementById('categoryInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');

const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const category = categoryInput.value.trim();
  if (category === '') return;

  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${category}&rating=g&api_key=${API_KEY}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    
    const data = await response.json();
    const gifUrl = data.data.images.original.url;

    appendGif(gifUrl);
    categoryInput.value = '';

  } catch (error) {
    console.error("Fetch error:", error);
  }
});

function appendGif(url) {
  const gifWrapper = document.createElement('div');
  const img = document.createElement('img');
  img.src = url;
  img.style.maxWidth = '300px';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'DELETE';
  deleteBtn.addEventListener('click', () => gifWrapper.remove());

  gifWrapper.appendChild(img);
  gifWrapper.appendChild(deleteBtn);
  gifContainer.appendChild(gifWrapper);
}

deleteAllBtn.addEventListener('click', () => {
  gifContainer.innerHTML = '';
});
