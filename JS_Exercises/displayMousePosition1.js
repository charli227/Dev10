// Creator: Charli Blank
// Date Created: 22 September, 2018
// Date Last Revised: 22 September, 2018


// Global variable to note whether mouse tracking enabled
// needed across multiple functions
var isMouseTracking = false;

// Name - updateMousePosition()
// Purpose - update X and Y positions as the mouse moves
// Input - none
// Output - none
function updateMousePosition() {
  // If tracking is enabled, update the labels
  if (isMouseTracking) {
    // We can get the mouse positions with event.clientX and event.clientY
    // We can update the text of an HTML element with the innerText property
    var positionX = document.getElementById("mousePositionX");
    positionX.innerText = event.clientX;
    var positionY = document.getElementById("mousePositionY");
    positionY.innerText = event.clientY;
  }
}

// Name - toggleTracking()
// Purpose - toggle whether tracking is enabled
// Input - none
// Output - none
function toggleTracking() {
  // If isMouseTracking is true, set it to false
  // Otherwise it is false, and needs to be set to true
  isMouseTracking = !isMouseTracking;
  // Update the tracking status to show whether it is enabled
  if (isMouseTracking) {
    document.getElementById("trackingStatus").innerText = "TRACKING";
  } else {
    document.getElementById("trackingStatus").innerText = "NOT TRACKING";
  }
}
