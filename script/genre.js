const urlParams = new URLSearchParams(window.location.search);
console.log("urlParams", urlParams);
const options = {
  headers: {
    "x-apikey": "63ef4921478852088da683c2",
  },
};

const genre = "Gyser"; // urlParams.get("genre");
console.log("genre", genre);
const url = `https://passion-172c.restdb.io/rest/filmliste?ratings=${6}`;
console.log("url", url);

//Hent data

async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  vis(json);
}

function vis(json) {
  console.log(json);
}

// const skabelon = document.querySelector(".template_gyser").content;
const beholder = document.querySelector(".film_container");

hentData();
