const sliders = document.querySelector(".carouselbox");
var scrollPerClick;
var ImagePadding = 20;

showMovieData();

async function showMovieData() {
  const api_key = "2ca922e840acb706933e7e1a2541af8f40430";
}

var result = await axios.get("https://passion-172c.restdb.io/rest/filmliste" + api_key);

result.map(function (cur, karusel) {
  sliders.insertAdjacentHTML("beforeend", `<img class="img-${karusel} slider-img" src=`);
});
