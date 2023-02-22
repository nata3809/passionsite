const url = "https://passion-172c.restdb.io/rest/filmliste?max=5";

const options = {
  headers: {
    "x-apikey": "63ef4921478852088da683c2",
  },
};

async function hentData() {
  const respons = await fetch("script/test5.json");
  const json = await respons.json();
  vis(json);
}

const movielist = document.querySelector(".movielist");
const template = document.querySelector(".movie_template").content;

function vis(json) {
  console.log(json);

  json.forEach((movie) => {
    const klon = template.cloneNode(true);
    klon.querySelector("img").src = movie.billede;
    klon.querySelector("a").href = "element.html?id=" + movie._id;
    movielist.appendChild(klon);
  });
}

hentData();

///////Månedens film

const url2 = `https://passion-172c.restdb.io/rest/filmliste/63ea210daa860750000545bc`;

const options2 = {
  headers: {
    "x-apikey": "63ef4921478852088da683c2",
  },
};
async function hentData2() {
  const respons = await fetch(url2, options2);
  const json = await respons.json();
  console.log(json);
  vis2(json);
}

//funktion som viser filmen, samt bestemmer de værdier som skal vises

function vis2(movie) {
  console.log(movie);
  document.querySelector(".udvalgt_film_knap").href = "element.html?id=" + movie._id;
  document.querySelector(".udvalgt_film_img").src = movie.billede;
  document.querySelector(".udvalgte_film_titel").textContent = movie.titel;
  document.querySelector(".udvalgte_film_text").innerHTML = movie.beskrivelse;
}

hentData2();
