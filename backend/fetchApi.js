const api_key = "y2bvfgsW9FjYcRALbgEBU8slJmSH9aGPILfOhjO8"; //API Key
const api_endpoint = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

fetch(api_endpoint)
    .then(response => response.json())
    .then(data => {
        document.getElementById("apod-title").textContent = data.title;
        document.getElementById("apod-date").textContent = `Date: ${data.date} | Time:`;
        document.getElementById("apod-description").textContent = data.explanation;
        document.getElementById("apod-image").src = data.url;
    })
    .catch(error => console.log(error));