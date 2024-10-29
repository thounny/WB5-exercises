window.onload = function () {
  // Get elements with the "imageGroup" class
  var imageGroupElements = document.getElementsByClassName("imageGroup");

  // Add a red border to the elements
  for (var i = 0; i < imageGroupElements.length; i++) {
    imageGroupElements[i].style.border = "3px solid red";
  }

  // Find all images without an alt attribute and assign them the text "graffiti image"
  var imagesWithoutAlt = document.querySelectorAll("img:not([alt])");
  for (var j = 0; j < imagesWithoutAlt.length; j++) {
    imagesWithoutAlt[j].setAttribute("alt", "graffiti image");
  }
};
