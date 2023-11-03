//your JS code here. If required.
function updateTimer() {
  const timerElement = document.getElementById('timer');
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();

  timerElement.textContent = `Current Date and Time: ${formattedDate} ${formattedTime}`;
}

setInterval(updateTimer, 1000); // Update every second
updateTimer(); // Initial call

window.onload = function() {
  // Update the timer when the page loads
  updateTimer();
};
