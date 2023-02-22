//Først defineres en konstant url med en webadresse til en RESTful API endpoint.
const url = "https://passion-172c.restdb.io/rest/filmliste?max=5";

//Derefter defineres en konstant options med en headers-egenskab, der indeholder en autorisationsnøgle til at få adgang til API'en.
const options = {
  headers: {
    "x-apikey": "63ef4921478852088da683c2",
  },
};

//Funktionen hentData indeholder en asynkron operation,
//der først henter data fra en lokal JSON-fil ved hjælp af fetch,
//derefter konverterer JSON-responsen til en JavaScript-objekt ved hjælp af .json()-metoden
//og til sidst kalder vis()-funktionen med det modtagne objekt.
async function hentData() {
  const respons = await fetch("script/test5.json");
  const json = await respons.json();
  vis(json);
}

//Der defineres to variabler: movielist, der refererer til en HTML-element med klassenavn "movielist",
//og template, der refererer til en HTML-template med klassenavn "movie_template".
const movielist = document.querySelector(".movielist");
const template = document.querySelector(".movie_template").content;

//Funktionen vis tager et objekt som input og udfører en forEach-løkke på objektets elementer.
//For hver element kloner den template-elementen og ændrer img-kilden og a-attributten baseret på elementets data (altså hvilken film).
//Den nye klonede element tilføjes derefter til movielist-elementet.
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

//Først defineres en konstant url2 med en webadresse til en bestemt film i RESTful API'en.
//Adressen indeholder en ID-parameter, der identificerer den enkelte film.
const url2 = `https://passion-172c.restdb.io/rest/filmliste/63ea210daa860750000545bc`;

//Definering af en konstant, med en autoritationsnøgle, som giver adgang til APIen
const options2 = {
  headers: {
    "x-apikey": "63ef4921478852088da683c2",
  },
};

//Funktionen hentData2 er en asynkron operation, der henter data fra API'en ved hjælp af fetch-metoden og de definerede URL- og header-oplysninger.
//Derefter konverteres JSON-responsen til en JavaScript-objekt ved hjælp af .json()-metoden og til sidst kaldes vis2()-funktionen med det modtagne objekt.
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
