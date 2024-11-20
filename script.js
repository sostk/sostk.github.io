const slideshow = document.getElementById('slideshow');

// Define your image folder and images
const imageFolder = 'images/'; // Replace with your folder path
const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']; // Replace with actual filenames

// Create an array to store the image elements
const imgElements = [];

// Add images to the slideshow dynamically
images.forEach((image) => {
  const img = document.createElement('img');
  img.src = `${imageFolder}${image}`;
  img.style.position = 'absolute';
  img.style.top = '0';
  img.style.left = '0';
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.opacity = '0'; // Start images as hidden
  img.style.transition = 'opacity 1s ease'; // Smooth fade-in effect
  img.style.objectFit = 'contain'; // Ensures images aren't zoomed out too much
  slideshow.appendChild(img);
  imgElements.push(img);
});

// Initialize variables for the slideshow
let currentIndex = 0;
const totalImages = imgElements.length;

// Function to show the current image with fade effect
function showCurrentImage() {
  imgElements.forEach((img, index) => {
    if (index === currentIndex) {
      img.style.opacity = '1'; // Fade in current image
    } else {
      img.style.opacity = '0'; // Fade out other images
    }
  });
}

// Function to go to the next image
function goToNextImage() {
  currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image when we reach the end
  showCurrentImage();
}

// Initialize the slideshow to show the first image
showCurrentImage();

// Set an interval to automatically change images every 3 seconds
setInterval(goToNextImage, 3000);
