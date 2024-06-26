function toggleReadingMode() {
  const content = document.getElementById("content");
  content.classList.toggle("vertical");
}
function setMaxHeight() {
  const container = document.getElementById("content");
  container.style.maxHeight = `${window.innerHeight - 150}px`; // Subtract some space for padding/margin
}
window.onload = setMaxHeight;
window.onresize = setMaxHeight;
