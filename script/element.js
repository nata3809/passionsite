// lav url search objekt
const urlParams = new URLSearchParams(window.location.search);
// find id
console.log(urlParams);

const id = urlParams.get("id");
const url = `https://passion-172c.restdb.io/rest/filmliste/${id}`;

const options = {
  headers: {
    "x-apikey": "63ef4921478852088da683c2",
  },
};
async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  vis(json);
}

function vis(movie) {
  console.log(movie);

  //BREADCRUMB, linker tilbage til den respektive genre
  const a = (document.querySelector(".genre").textContent = movie.genre);
  a.textContent = movie.genre;
  a.href = "/genre.html?genre=" + movie.genre;

  document.querySelector(".filmtitel_bread").textContent = movie.titel;
  document.querySelector(".element_grid1-2 img").src = movie.billede;
  document.querySelector(".filmtitel").textContent = movie.titel;
  document.querySelector(".year").textContent = movie.year.slice(0, 10);
  document.querySelector(".rating").textContent = movie.ratings + "/10 rating";
  document.querySelector(".filmbeskrivelse").innerHTML = movie.beskrivelse;
}

hentData();
