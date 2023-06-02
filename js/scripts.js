// User Interface Logic

function hideResults() {
  document.getElementById("Ruby").setAttribute("class", "hidden");
  document.getElementById("C#").setAttribute("class", "hidden");
  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onsubmit = function() 
  document.querySelector("form").onsubmit = function(event) {
    hideResults();
    event.preventDefault();

    const IQ = parseInt(document.querySelector("input#IQ").value);
    const Pets = parseInt(document.querySelector("input#Petst").value);
    const Pushups = parseInt(document.querySelector("input#Pushups").value);
    const Tacos = parseInt(document.querySelector("input#Tacos").value);
    const Num = parseInt(document.querySelector("input#Num").value);

    if (IQ >= 85 || Pets >= 5 || Pushups >= 20 || Tacos >= 10 || Num >= 1) {
      document.getElementById("Ruby").removeAttribute("class"); 
    } else if (IQ >= 65 || Pets >= 3 || Pushups >= 15 || Tacos >= 5 || Num >= 1) {
      document.getElementById("C#").removeAttribute("class");  
    } else if (IQ >= 45 || Pets >= 2 || Pushups >= 10 || Tacos >= 4 || Num >= 1) {
      document.getElementById("Pyhton").removeAttribute("class");
      // Finally, we have our "catch-all" for when a user is less than 6 years old.
    } else {
      document.getElementById("sorry").removeAttribute("class");
    };
  };