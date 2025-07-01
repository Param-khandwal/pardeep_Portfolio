document.addEventListener("DOMContentLoaded", () => {
  window.hamburg = () => {
    const dropdown = document.querySelector(".dropdown");
    dropdown.style.display = "flex";
  };

  window.cancel = () => {
    const dropdown = document.querySelector(".dropdown");
    dropdown.style.display = "none";
  };
});


  
  // Typewriter effect
  const texts = ["Java Developer", "Frontend Developer", "Backend Developer"];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';
  
  (function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
  
    document.querySelector(".typewriter-text").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1000); // pause before typing next
    } else {
      setTimeout(type, 150); // typing speed
    }
  })();
  