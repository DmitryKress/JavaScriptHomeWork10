const nasaImage = document.getElementById("nasa-image");
const nasaTitle = document.getElementById("nasa-title");
const nasaDescription = document.getElementById("nasa-description");
const nasaCopyright = document.getElementById("nasa-copyright");

const nasaImage2 = document.getElementById("nasa-image2");
const nasaTitle2 = document.getElementById("nasa-title2");
const nasaDescription2 = document.getElementById("nasa-description2");
const nasaCopyright2 = document.getElementById("nasa-copyright2");

const nasaImage3 = document.getElementById("nasa-image3");
const nasaTitle3 = document.getElementById("nasa-title3");
const nasaDescription3 = document.getElementById("nasa-description3");
const nasaCopyright3 = document.getElementById("nasa-copyright3");

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-22")
  .then(response => {
    return response.json();
  })
  .then(result => {
    console.log(result);
    const { url, copyright, title, explanation } = result;
    nasaImage.src = url;
    nasaTitle.innerText = title;
    nasaDescription.innerText = explanation;
    nasaCopyright.innerText = copyright;
  });

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-21")
  .then(response => {
    return response.json();
  })
  .then(result => {
    console.log(result);
    const { url, copyright, title, explanation } = result;
    nasaImage2.src = url;
    nasaTitle2.innerText = title;
    nasaDescription2.innerText = explanation;
    nasaCopyright2.innerText = copyright;
  });

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-20")
  .then(response => {
    return response.json();
  })
  .then(result => {
    console.log(result);
    const { url, copyright, title, explanation } = result;
    nasaImage3.src = url;
    nasaTitle3.innerText = title;
    nasaDescription3.innerText = explanation;
    nasaCopyright3.innerText = copyright;
  });
