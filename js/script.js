function makeButtonsClickable() {
  // rating buttons
  let ratingButtons = document.querySelectorAll(".rating-numbers button");
  for (const button of ratingButtons) {
    button.addEventListener("click", ratingClick, false);
  }

  // submit button
  let submitButton = document.querySelector("button.rating-submit");
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
  // checking for rating
  let selectedButton = document.querySelector(".rating-numbers button.active");
  if (selectedButton == null) {
    return;
  }

  // hiding old card
  let ratingCard = document.querySelector(".rating-card");
  ratingCard.style.display = "none";

  // inserting rating
  let usersRating = selectedButton.textContent;
  let ratingSpan = document.querySelector(".users-rating");
  ratingSpan.textContent = usersRating;

  // displaying new
  let thankyouCard = document.querySelector(".thankyou-card");
  thankyouCard.style.display = "block";
}
