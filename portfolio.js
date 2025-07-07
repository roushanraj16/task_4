// Typing Effect
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const textArray = ["Roushan Raj", "a CSE Student", "a Cloud Learner", "a WEB Developer"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 300);
  }
}
document.addEventListener("DOMContentLoaded", () => setTimeout(type, 500));

// Form Status
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-status").textContent = "Message sent!";
  this.reset();
});
