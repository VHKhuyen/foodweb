// search

const search = document.querySelector(".search-content");

document.querySelector("#search-btn").addEventListener("click", () => {
  search.classList.toggle("active");
  cart.classList.remove("active");
  menu.classList.remove("active");
  register.classList.remove("active");
  login.classList.remove("active");
});

// card

const cart = document.querySelector(".shopping-cart-container");
document.querySelector("#card-btn").addEventListener("click", () => {
  cart.classList.toggle("active");
  login.classList.remove("active");
  menu.classList.remove("active");
  search.classList.remove("active");
  register.classList.remove("active");
});

// Login

const login = document.querySelector(".login");

document.querySelector(".user-login").addEventListener("click", () => {
  login.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  menu.classList.remove("active");
  register.classList.remove("active");
});

const register = document.querySelector(".register");

document.querySelector(".user-register").addEventListener("click", () => {
  register.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  menu.classList.remove("active");
  login.classList.remove("active");
});

// menu

const menu = document.querySelector(".header .navbar");
document.querySelector("#menu-btn").addEventListener("click", () => {
  menu.classList.toggle("active");
  login.classList.remove("active");
  search.classList.remove("active");
  cart.classList.remove("active");
});
window.onscroll=()=>{
  menu.classList.remove("active");
} ;
const navbar = document.querySelectorAll(".navbar a");
navbar.forEach((navba) => {
  navba.addEventListener("click", (e) => {
    menu.classList.remove("active");
  });
});

// home

document.querySelector(".home").addEventListener("mousemove", (e) => {
  let x = (window.innerWidth - e.pageX * 3) / 90;
  let y = (window.innerWidth - e.pageY * 3) / 90;
  document.querySelector(
    ".home .home-parallax-img"
  ).style.transform = `translateX(${y}px) translateY(${x}px)`;
});
document.querySelector(".home").addEventListener("mouseleave", () => {
  document.querySelector(
    ".home .home-parallax-img"
  ).style.transform = `translateX(0px) translateY(0px)`;
});

//popular

const populars = document.querySelectorAll(".fa-heart");
populars.forEach((popular) => {
  popular.addEventListener("click", (e) => {
    popular.classList.toggle("active-popular");
  });
});

// handle logo
document.querySelector(".logo").onclick = () => {
  login.classList.remove("active");
  search.classList.remove("active");
  cart.classList.remove("active");
};

$(".popular-container").slick({
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".blog-container").slick({
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
