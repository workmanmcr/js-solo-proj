function hideResultsAndError() {
  document.getElementById("oops").classList.add("hidden");
  document.getElementById("Ruby").classList.add("hidden");
  document.getElementById("C-sharp").classList.add("hidden");
  document.getElementById("Python").classList.add("hidden");
}

window.onload = function () {
  hideResultsAndError();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();

    const IQ = parseInt(document.querySelector("input#IQ").value);
    const Pets = parseInt(document.querySelector("input#Pets").value);
    const Tacos = parseInt(document.querySelector("input#Tacos").value);
    
    if (isNaN(IQ) || isNaN(Pets) || isNaN(Tacos)) {
      document.getElementById("oops").classList.remove("hidden");
    } else {
      if (IQ >= 85 && Pets >= 2 && Tacos >= 4 ) {
        document.getElementById("Ruby").classList.remove("hidden"); 
      } else if ((IQ <= 85 && IQ >= 65) && (Pets >= 2) && (Tacos >= 3)) {
        document.getElementById("C-sharp").classList.remove("hidden");  
      } else if (IQ <= 65 || Pets <= 0 || Tacos <= 0 ) {
        document.getElementById("Python").classList.remove("hidden");
      }
    }
  };
};
