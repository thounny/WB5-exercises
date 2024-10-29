window.onload = function () {
  // Get elements with the "imageGroup" class
  var imageGroupElements = document.getElementsByClassName("imageGroup");

  // Add a red border to the elements
  for (var i = 0; i < imageGroupElements.length; i++) {
    imageGroupElements[i].style.border = "3px solid red";
  }
};
