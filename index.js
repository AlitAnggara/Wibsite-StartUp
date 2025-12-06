const leftImages = [
  "images/Gemini1.png",
  "images/Gemini2.png",
  "images/Gemini3.png",
  "images/Gemini4.png",
];
const rightImages = [
  "images/Gemini1.png",
  "images/Gemini2.png",
  "images/Gemini3.png",
  "images/Gemini4.png",
];

let leftIndex = 0;
let rightIndex = 0;

function changeImages() {
  const left = document.querySelector(".left-slide");
  const right = document.querySelector(".right-slide");

  left.style.opacity = 0;
  right.style.opacity = 0;

  setTimeout(() => {
    leftIndex = (leftIndex + 1) % leftImages.length;
    rightIndex = (rightIndex + 1) % rightImages.length;

    left.src = leftImages[leftIndex];
    right.src = rightImages[rightIndex];

    left.style.opacity = 1;
    right.style.opacity = 1;
  }, 500);
}

setInterval(changeImages, 3000);

let index = 0;
const track = document.querySelector(".story-track");
const totalSlides = document.querySelectorAll(".story-box").length;

setInterval(() => {
  index = (index + 1) % totalSlides;
  track.style.transform = `translateX(-${index * 102}%)`;
}, 4000);

const tabs = document.querySelectorAll(".tab");
const slider = document.querySelector(".slider");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // hilangkan active
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // ambil slide index
    const index = tab.getAttribute("data-isi-booking");

    // geser slider
    slider.style.transform = `translateX(-${index * 100}%)`;
  });
});

// tab.addEventListener("click", () => {
//   slider.classList.add("fade");

//   setTimeout(() => {
//     slider.style.transform = `translateX(-${index * 100}%)`;
//     slider.classList.remove("fade");
//   }, 150);
// });

const reveals = document.querySelectorAll(".in");

const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, options);

reveals.forEach((r) => observer.observe(r));
