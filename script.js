
    document.addEventListener("DOMContentLoaded", function() {
      const header = document.querySelector("header");

      window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
          header.style.backgroundColor = "green"; // Change the background color when scrolled
        } else {
          header.style.backgroundColor = "red";
        }
      });
    });