let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".list");
let thumbnail = document.querySelector(".thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".item");
let currentIndex = 0; // Variable to track the current slide index

let intervalId; // Variable to store the interval ID
let isFirstImage = true; // Variable to track if the current image is the first image

// Function to start the automatic slideshow
function startSlideshow() {
  let duration = isFirstImage ? 5000 : 20000; // 5 seconds for the first image, 30 seconds for the rest
  intervalId = setTimeout(function () {
    moveSlider("next");
    startSlideshow(); // Restart the slideshow with the new duration
  }, duration);
}

// Function to stop the automatic slideshow
function stopSlideshow() {
  clearTimeout(intervalId);
}

// Start the slideshow initially
startSlideshow();

// Pauses the slideshow when mouse enters the slider
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
    currentIndex = (currentIndex + 1) % sliderItems.length; // Updates current index
    sliderList.appendChild(sliderItems[0]);
    isFirstImage = currentIndex === 0; // Reset isFirstImage if the slider is back to the first image
  } else {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length; // Updates current index
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    isFirstImage = currentIndex === 0; // Reset isFirstImage if the slider is back to the first image
  }

  // Manually adjust the thumbnails as well
  if (direction === "next") {
    thumbnail.appendChild(thumbnailItems[0]);
  } else {
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
  }
}
