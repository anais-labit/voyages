const menuBtn = document.getElementById("menu-button");
const navBar = document.getElementById("navbar");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  // On/Off Menu
  menu.classList.toggle("menu-open");
});

// Ajout de la détéction du scroll sur la page
window.onscroll = () => {
  var top = window.scrollY;
  // Si la page scroll de 50px alors...
  if (top >= 50) {
    // Activation de la NAVBAR
    navBar.classList.add("navbar-active");
  } else {
    // Désactivation de la NAVBAR
    navBar.classList.remove("navbar-active");
  }
};

const title = document.querySelector(".title");
const slide = document.querySelectorAll(".slide-card > div");
const pagination = document.querySelectorAll(".pagination");
const numSlide = document.querySelector(".slider-counter");
const header = document.querySelector("header");

let id = 0;

// TABLEAUX D'IMAGES

// ! Mettre vos lien de photos ici ========>

const images = [

  "img/allemagne/berlin1.jpg",
  "img/allemagne/berlin2.jpg",
  "img/allemagne/berlin3.jpg",
];

function slider(i) {
  // Paramètrer Hero Image Dynamique
  header.style.background = `url(${images[i]}) no-repeat center`;
  // On/Off sur class slide-card-active
  // Reset de la totalité des class active
  for (let i = 0; i < pagination.length; i++) {
    // Retrait class active de pagination
    pagination[i].classList.remove("pagination-active");
    // Retrait class active de SlideCard
    slide[i].classList.remove("slide-card-active");
  }
  // Réinit class active au click sur Pagination
  pagination[i].classList.add("pagination-active");
  // Reinit class active sur Slide-Card
  slide[i].classList.add("slide-card-active");

  // Changement du Titre
  title.innerText = slide[i].lastElementChild.innerText;
  // Animation du titre (fondu)
  title.classList.add("anime-fondu");
  // Enleve l'animation une fois terminé (compte à rebours)
  setTimeout(() => {
    // Retire l'animation
    title.classList.remove("anime-fondu");
  }, 300);

  // Tell me about it ;)
  console.log(`numSlide => `, numSlide);

  // Changement des chiffres des Slides
  numSlide.innerHTML = `0${i + 1}/<sup>0${pagination.length}</sup>`;
}

// Controle de la Pagination
for (let i = 0; i < pagination.length; i++) {
  // Ajout de l'écoute au click pour chaques Paginations
  pagination[i].addEventListener("click", () => {
    // Fonction Slider ON
    slider(i);
    // Configuration de l'ID en fonction de l'index de pagination
    id = i;
    // Stop AutoSlide
    stopAutoSlide();
  });
}

function nextSlide() {
  // Incrémentation Id d'image
  id++;
  // Vérification si Id est plus grand que nombres de Slides alors...
  if (id > pagination.length - 1) {
    id = 0;
  }
  // Fonction Slider ON
  slider(id);
}

// Slider Automatique

let autoSlide = setInterval(nextSlide, 10000);

// Stop Slide Automatique

function stopAutoSlide() {
  clearInterval(autoSlide);

  // Restart Slide Automatique

  autoSlide = setInterval(nextSlide, 10000);
}

}