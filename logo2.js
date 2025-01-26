window.addEventListener('load', function() {
  // Ensure the elements exist before attempting to manipulate them
  const preloader = document.getElementById('preloader');
  const team24 = document.querySelector('.team24');

  if (preloader && team24) {
      setTimeout(function() {
          // Hide the preloader and show the team photo section
          preloader.style.display = 'none';
          
          // Dynamically add the background image
          team24.style.backgroundImage = "url('nss group pic.jpeg')"; // Set background image after preloader

          // Now show the team section
          team24.style.display = 'flex'; // Ensure the team photo section shows up
      }, 6000); // Wait 6 seconds after the page loads
  }
});
