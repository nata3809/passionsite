const url = "https://passion-172c.restdb.io/rest/filmliste";

const options = {
  headers: {
    "x-apikey": "63ef4921478852088da683c2"
  }
};

async function hentData() {
  const respons = await fetch(url, options);
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
    klon.querySelector("a").href = "element.html?id=" + movie._id
    movielist.appendChild(klon);
  });
}

hentData();