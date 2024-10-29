// Array of image files and descriptions
const imageFiles = [
  { name: "anime.gif", description: "gif 1" },
  { name: "index_dwn.gif", description: "gif 2" },
  { name: "lain green.gif", description: "gif 3" },
  { name: "lain.gif", description: "gif 4" },
  { name: "lingling_button3.gif", description: "gif 5" },
];

// Get DOM elements
const imageSelect = document.getElementById("image-select");
const addImageButton = document.getElementById("add-image");
const clearImagesButton = document.getElementById("clear-images");
const imageContainer = document.getElementById("image-container");

// Populate the dropdown with image descriptions
imageFiles.forEach((file, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.text = file.description;
  imageSelect.add(option);
});

// Handle "Add Image" button click
addImageButton.addEventListener("click", () => {
  const selectedIndex = imageSelect.value;
  if (selectedIndex !== "") {
    const selectedImage = imageFiles[selectedIndex];
    const img = document.createElement("img");
    img.src = `images/${selectedImage.name}`;
    img.alt = selectedImage.description;
    img.style.width = "auto";
    img.style.height = "auto";
    img.style.objectFit = "contain";
    img.style.borderRadius = "0";
    imageContainer.appendChild(img);
  }
});

// Handle "Clear Images" button click
clearImagesButton.addEventListener("click", () => {
  imageContainer.innerHTML = "";
});
