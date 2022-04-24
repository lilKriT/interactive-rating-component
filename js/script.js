function makeButtonsClickable() {
  // rating buttons
  let ratingButtons = document.querySelectorAll(".rating-numbers button");
  for (const button of ratingButtons) {
    button.addEventListener("click", ratingClick, false);
  }

  // submit button
  let submitButton = document.querySelectorAll("button.rating-submit");
  submitButton.addEventListener("click", submitClick, false);
}
document.addEventListener("DOMContentLoaded", makeButtonsClickable, false);

function ratingClick() {
  let ratingButtons = document.querySelectorAll(".rating-numbers button");
  for (const button of ratingButtons) {
    button.classList.remove("active");
  }
  this.classList.add("active");
}

function submitClick() {
    alert("bla");
}
