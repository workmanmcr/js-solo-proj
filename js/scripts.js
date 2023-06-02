// User Interface Logic

function hideResults() {
  document.getElementById("Ruby").setAttribute("class", "hidden");
  document.getElementById("C#").setAttribute("class", "hidden");
  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);
    if (IQ >= 65 && Pets >= 2) {
      document.getElementById("Ruby").removeAttribute("class");
      document.getElementById("C#").removeAttribute("class");
      document.getElementById("Python").removeAttribute("class");
    
    } else if (IQ >= 75 || Pets >= 3) {
      document.getElementById("Ruby").removeAttribute("class");
      document.getElementById("C#").removeAttribute("class");
    } else if (IQ >= 85) {
      document.getElementById("Ruby").removeAttribute("class");
      // Finally, we have our "catch-all" for when a user is less than 6 years old.
    } else {
      document.getElementById("sorry").removeAttribute("class");
    };
};
