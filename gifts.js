const allGifts = [
  "A Romantic Dinner", 
  "A Surprise Getaway", 
  "A Handwritten Letter", 
  "A Cozy Blanket", 
  "A Spa Day", 
  "A Personalized Jewelry", 
  "A Movie Night Package", 
  "An Apple Watch",
];

// Select only 2 gifts to be the possible outcomes
const selectedOutcomes = ["A Movie Night Package", "A Romantic Dinner", "An Apple Watch"]; 

const wheel = document.querySelector('.wheel');
const selectedGiftText = document.getElementById('selected-gift');

// Select 4 random gifts, but ensure 2 are your outcomes
function selectGiftsForWheel() {
  const randomGifts = [...selectedOutcomes]; // Start with the selected outcomes
  const remainingGifts = allGifts.filter(gift => !selectedOutcomes.includes(gift));

  while (randomGifts.length < 4) {
    const randomIndex = Math.floor(Math.random() * remainingGifts.length);
    randomGifts.push(remainingGifts[randomIndex]);
    remainingGifts.splice(randomIndex, 1); // Remove selected gift to avoid duplicates
  }

  return randomGifts;
}

// Create the wheel with 4 gifts
function createWheel() {
  const gifts = selectGiftsForWheel(); // Get 4 random gifts to display on the wheel
  const anglePerSlice = 360 / gifts.length;

  // Clear the previous wheel slices before adding new ones
  wheel.innerHTML = ''; 
  
  gifts.forEach((gift, index) => {
    const slice = document.createElement('div');
    slice.classList.add('segment');
    slice.style.transform = `rotate(${anglePerSlice * index}deg)`;
    slice.innerHTML = `<div class="gift-text">${gift}</div>`;
    wheel.appendChild(slice);
  });
}

// Spin the wheel function
function spinWheel() {
  const randomDegree = Math.floor(Math.random() * 360) + 3600; // Random degree between 3600 and 3960 (10 full rotations)
  const rotation = `rotate(${randomDegree}deg)`;
  
  // Apply the spinning animation
  wheel.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)"; // Smooth spin animation
  wheel.style.transform = rotation;

  // Display the selected gift after the spin ends
  setTimeout(() => {
    const gifts = selectGiftsForWheel(); // Get new gifts selection each time
    const index = Math.floor((randomDegree % 360) / (360 / gifts.length)); // Get the index of the selected gift
    const selectedGift = gifts[index];
    
    // Display the result only if it's one of the selected outcomes
    if (selectedOutcomes.includes(selectedGift)) {
      selectedGiftText.textContent = `You got: ${selectedGift}`;
    } else {
      // Spin again if the result is not one of the 2 selected outcomes
      spinWheel();
    }
  }, 4000); // Wait for the spinning animation to complete
}

// Allow multiple spins, after one spin, reset the wheel
document.querySelector('.spin-btn').addEventListener('click', () => {
  selectedGiftText.textContent = ""; // Clear any previous result
  createWheel(); // Recreate the wheel with new random gifts
  spinWheel(); // Start the new spin
});

// Initialize the wheel for the first time
createWheel();
