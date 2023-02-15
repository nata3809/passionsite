// variablen "btn", der henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// variablen "menu", der henviser til ".nav-links"
const menu = document.querySelector(".nav-links");

// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle

  menu.classList.toggle("shown");
  btn.classList.toggle("pressed");

  // b) lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");

  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // btn.textContent = "Luk"; //hvis menuShown er "true"
  } else {
    console.log(menuShown); // se i konsollen

    // btn.textContent = "Menu"; // hvis menuShown er "false"
  }
  // "toggleMenu()" slutter her
}
// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
