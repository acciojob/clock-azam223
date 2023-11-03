// Wrap your code in a function to ensure it runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  function updateTimer() {
    const timerElement = document.getElementById("timer");
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    if (timerElement) {
      timerElement.textContent = `Current Date and Time: ${formattedDate} ${formattedTime}`;
    }
  }

  // Call updateTimer initially
  updateTimer();

  // Set an interval to update the timer every second
  setInterval(updateTimer, 1000);
});
