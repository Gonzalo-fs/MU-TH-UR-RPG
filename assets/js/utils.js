
// Print new line with terminal typewritter effect
var i = 0;
var speed = 50;
var txt = '';

function createNewLine(text) {
  
  let container = document.getElementById("terminal-container");
  
  let newLine = document.createElement("p");
  newLine.setAttribute("id", "new-line");
  container.appendChild(newLine);
  
  txt = text;
  print()

}

function print() {
  if (i < txt.length) {
    document.getElementById("new-line").innerHTML += txt[i];
    i++;
    setTimeout(print, speed);
  } else {
  	i = 0;
    document.getElementById("new-line").removeAttribute("id");
  }
}


// Focus input so user can type
function focusInput() {
  document.getElementById("user-input").focus();

  window.addEventListener("click", function() {
    document.getElementById("user-input").focus();
  })
  
  window.addEventListener("keypress", function() {
    document.getElementById("user-input").focus();
  })
}


export { 
  createNewLine,
  focusInput,
}
  