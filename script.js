document.getElementById('reveal-btn').addEventListener('click', function() {
  const images = document.querySelectorAll('.image-box');
  const hiddenText = document.getElementById('hidden-text');

  // Show images with animation
  images.forEach((img, index) => {
    setTimeout(() => {
      img.style.opacity = 1;
      img.style.transform = 'scale(1.1)';
    }, index * 500);
  });

  // Show hidden text
  setTimeout(() => {
    hiddenText.style.opacity = 1;
  }, images.length * 500);

  // Bounce effect for the button
  this.style.animation = 'bounce 0.5s ease';
  setTimeout(() => {
    this.style.animation = '';
  }, 500);
});
