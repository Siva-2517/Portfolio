let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');   // toggle navbar visibility
  menuIcon.classList.toggle('bx-x');   // toggle menu icon (burger ↔ X)
};

document.querySelectorAll('.navbar a').forEach(link => {
  link.onclick = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  };
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });
};

const loadingText = document.getElementById("loadingText");
const loader = document.getElementById("loader");
const content = document.getElementById("content");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const bar = document.querySelector(".bar");

const texts = ["Loading...", "Almost Ready...", "Welcome!"];
let index = 0;
let progress = 0;

// Morph text every second
const textInterval = setInterval(() => {
  loadingText.textContent = texts[index];
  index++;

  if (index === texts.length) {
    clearInterval(textInterval);

    // Split panels open after short delay
    setTimeout(() => {
      left.classList.add("slide-left");
      right.classList.add("slide-right");
    }, 500);

    // Hide loader & show content
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
      document.body.classList.add("loaded");
    }, 2000);
  }
}, 1000);

// Progress bar animation
const progressInterval = setInterval(() => {
  if (progress < 100) {
    progress += 2; // adjust speed here
    bar.style.width = progress + "%";
  } else {
    clearInterval(progressInterval);
  }
}, 50);




