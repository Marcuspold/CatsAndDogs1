const cat_results = document.querySelector('#cat_results');
const dog_results = document.querySelector('#dog_results');
const catBtn = document.querySelector('#cat_btn');
const dogBtn = document.querySelector('#dog_btn');

catBtn.addEventListener('click', getRandomCat);

function getRandomCat() {
    const url = "https://api.thecatapi.com/v1/images/search";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data[0].url);
        cat_result.innerHTML = `<img src=${data[0].url} alt="cat">`;
    });
}

dogBtn.addEventListener('click', getRandomDog);

function getRandomDog() {
   const url = "https://dog.ceo/api/breeds/image/random";

   fetch(url)
   .then(response => response.json())
   .then(data => {
       dog_result.innerHTML = `<img src=${data.message} alt="dog">`;
   });
}
