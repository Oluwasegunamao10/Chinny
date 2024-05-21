let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".list");
let thumbnail = document.querySelector(".thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".item");
let currentIndex = 0; // Variable to track the current slide index

thumbnail.appendChild(thumbnailItems[0]);

let intervalId; // Variable to store the interval ID

// Function to start the automatic slideshow
function startSlideshow() {
  intervalId = setInterval(function () {
    moveSlider("next");
  }, 7000); // 30 seconds interval
}

// Function to stop the automatic slideshow
function stopSlideshow() {
  clearInterval(intervalId);
}

// Start the slideshow initially
startSlideshow();

// Pause the slideshow when mouse enters the slider
slider.addEventListener("mouseenter", stopSlideshow);

// Resume the slideshow when mouse leaves the slider
slider.addEventListener("mouseleave", startSlideshow);

// Function for next button
nextBtn.onclick = function () {
  moveSlider("next");
};

// Function for prev button
prevBtn.onclick = function () {
  moveSlider("prev");
};

function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll(".item");

  if (direction === "next") {
    currentIndex = (currentIndex + 1) % sliderItems.length; // Update current index
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length; // Update current index
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
  }

  slider.addEventListener(
    "animationend",
    function () {
      if (direction === "next") {
        slider.classList.remove("next");
      } else {
        slider.classList.remove("prev");
      }
    },
    { once: true }
  ); // Remove the event listener after it's triggered once
}
