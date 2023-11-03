// Wrap your code in a function to ensure it runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  function updateTimer() {
    const timerElement = document.getElementById("timer");
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    timerElement.textContent = `Current Date and Time: ${formattedDate} ${formattedTime}`;
  }

  setInterval(updateTimer, 1000); // Update every second
  updateTimer(); // Initial call
});
