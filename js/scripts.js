// User Interface Logic

function hideResults() {
  document.getElementById("swings").setAttribute("class", "hidden");
  document.getElementById("coaster").setAttribute("class", "hidden");
  document.getElementById("tower").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);
    if (age >= 12 && height >= 60) {
      document.getElementById("swings").removeAttribute("class");
      document.getElementById("coaster").removeAttribute("class");
      document.getElementById("tower").removeAttribute("class");
    
    } else if (age >= 12 || height >= 48) {
      document.getElementById("swings").removeAttribute("class");
      document.getElementById("coaster").removeAttribute("class");
    } else if (age >= 6) {
      document.getElementById("swings").removeAttribute("class");
      // Finally, we have our "catch-all" for when a user is less than 6 years old.
    } else {
      document.getElementById("sorry").removeAttribute("class");
    };
};
