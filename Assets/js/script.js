const roles = ["Developer", "Designer", "Coder", "Photographer"];
let index = 0;

function changeRole() {
  const roleElement = document.getElementById("role");
  roleElement.textContent = `I'm ${roles[index]}`;
  roleElement.style.opacity = 0; // Start with invisible

  setTimeout(() => {
    roleElement.style.opacity = 1; // Fade in
  }, 100); // Small delay to allow opacity transition

  index = (index + 1) % roles.length; // Cycle through roles
}

// Change role every 3 seconds
setInterval(changeRole, 3000);

// Start with the first role
changeRole();
