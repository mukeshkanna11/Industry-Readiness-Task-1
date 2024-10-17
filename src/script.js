window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const links = navbar.querySelectorAll('a');
    const button = navbar.querySelector('button');
    const logoText = navbar.querySelector('h1');
  
    if (window.scrollY > 50) {
      // Change navbar background and shadow
      navbar.classList.add('bg-white', 'shadow-lg');
      navbar.classList.remove('bg-transparent');
  
      // Hide the logo text
      logoText.style.display = 'none'; // Hide the Landify text
  
      // Center the navbar
      navbar.style.width = '60%'; // Adjust width when scrolled
      navbar.style.padding = '0.5rem 1rem'; // Reduced padding
      navbar.style.height = '60px'; // Set a specific height
      navbar.style.borderRadius = '0.40rem'; // Rounded corners
      navbar.style.position = 'fixed'; // Keep the navbar fixed when scrolling
      navbar.style.left = '50%'; // Move to center
      navbar.style.transform = 'translateX(-50%)'; // Center align horizontally
      navbar.style.top = '10px'; // Adjust top position
  
      // Change link text color to black
      links.forEach(link => {
        link.classList.add('text-black');
        link.classList.remove('text-white');
      });
  
      // Ensure the button text color remains white
      button.classList.remove('text-black');
      button.classList.add('text-white');
      
    } else {
      // Reset navbar styles to original
      navbar.classList.remove('bg-white', 'shadow-lg');
      navbar.classList.add('bg-transparent');
  
      // Show the logo text
      logoText.style.display = 'block'; // Show the Landify text again
  
      // Restore original width and padding
      navbar.style.width = '100%'; // Default width
      navbar.style.padding = '1.5rem 1.5rem'; // Original padding
      navbar.style.height = 'auto'; // Allow natural height for content
      navbar.style.borderRadius = '0'; // Reset rounded corners
      navbar.style.position = 'static'; // Remove fixed positioning
      navbar.style.transform = 'none'; // Remove transform effect
  
      // Change link text color back to white
      links.forEach(link => {
        link.classList.add('text-white');
        link.classList.remove('text-black');
      });
  
      // Keep the button styling consistent
      button.classList.remove('text-black');
      button.classList.add('text-white');
    }
  });
  
  function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Adjust for navbar height
      behavior: 'smooth' // Smooth scroll effect
    });
  }
  