function  hideResultsAndError() {
  document.getElementById("error-message").removeAttribute("class", "hidden")
  document.getElementById("Ruby").setAttribute("class", "hidden");
  document.getElementById("C-sharp").setAttribute("class", "hidden");
  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("sorry").removeAttribute("class");
}

window.onload = function () {
  hideResultsAndError();

  document.querySelector("form").onsubmit = function(event) {
  hideResultsAndError();
  
    const IQ = parseInt(document.querySelector("input#IQ").value);
    const Pets = parseInt(document.querySelector("input#Pets").value);
    const Tacos = parseInt(document.querySelector("input#Tacos").value);
    
    if (IQ || Pets || Tacos) { 
    if (IQ <= 85 || Pets <= 5 || Tacos <= 10 ) {
      document.getElementById("Ruby").removeAttribute("class"); 
    } else if (IQ > 85 < 45 || Pets > 5 < 2 || Tacos > 10 < 4 ) {
      document.getElementById("C-sharp").removeAttribute("class");  
    } else if (IQ >= 45 || Pets >= 2 || Tacos >= 4 ) {
      document.getElementById("Python").removeAttribute("class");
    } else {
      document.getElementById("sorry").removeAttribute("class");
    }
     };
  