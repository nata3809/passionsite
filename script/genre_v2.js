const url = "https://passion-172c.restdb.io/rest/filmliste";

const options = {
  headers: {
    "x-apikey": "63ef4921478852088da683c2",
  },
};

let data = [];
let filter = "alle";

const movielist = document.querySelector(".movielist");
const template = document.querySelector(".movie_template").content;

async function hentData() {
  const respons = await fetch("script/test.json");
  const json = await respons.json();
  data = json;

  const urlParams = new URLSearchParams(window.location.search);
  const genre = urlParams.get("genre");
  console.log(genre);
  if (genre) {
    filter = genre;
  }

  vis();
}

document.querySelector("#genre").addEventListener("change", vis);

function vis() {
  movielist.textContent = "";
  if (this.value) {
    console.log(this.value);
    filter = this.value;
  }
  data.forEach((movie) => {
    if (movie.genre == filter || filter == "alle") {
      const klon = template.cloneNode(true);
      klon.querySelector("img").src = movie.billede;
      klon.querySelector("a").href = "element.html?id=" + movie._id;
      document.querySelector("h2").textContent = movie.genre;
      movielist.appendChild(klon);
    }
    if (filter == "alle") {
      document.querySelector("h2").textContent = "Alle film";
    }
  });
}

hentData();
