const slideshow = document.getElementById('slideshow');

// Define your image folder and images
const imageFolder = 'images/'; // Replace with your folder path
const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']; // Replace with actual filenames

// Add images to the slideshow dynamically
images.forEach((image) => {
  const img = document.createElement('img');
  img.src = `${imageFolder}${image}`;
  slideshow.appendChild(img);
});
