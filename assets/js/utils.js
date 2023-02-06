
//------ PRINT NEW LINE WITH TERMINAL TYPEWRITTER EFFECT ------//
const DEFAULT_SPEED = 40;
var speed;

const DEFAULT_STYLE = "muthur-font-style";
var style;

var charPosition = 0;
var txt;

var expectedTime;

function createNewLine(text, customStyle = DEFAULT_STYLE, customSpeed = DEFAULT_SPEED, delay = 0) {

  // Call to print or queue call if is already printing
  if (!document.getElementById("new-line")) {

    speed = customSpeed;
    style = customStyle;
    txt = text;

    expectedTime = text.length * speed + delay;

    let container = document.getElementById("terminal-container");
    let lineContainer = document.createElement("div");
    lineContainer.setAttribute("id", "line-container");
    lineContainer.style.height = "0px"; 
    container.appendChild(lineContainer);

    let newLine = document.createElement("p");
    newLine.setAttribute("id", "new-line");
    newLine.setAttribute("class", style);
    lineContainer.appendChild(newLine);
    
    print();
    
  } else {
    setTimeout(() => {
      createNewLine(text)
    }, expectedTime);
  }


}

function print() {

  let newLine = document.getElementById("new-line");

  if (charPosition < txt.length) {

    // Random character to make laser printer effect
    const characters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789-+.≡§=<>#@Æ¥¤■█';
    const charactersLength = characters.length;
    let randomChar = characters.charAt(Math.floor(Math.random() * charactersLength));

    let printerChar = document.createElement("span");
    printerChar.setAttribute("id", "printer-char")
    printerChar.setAttribute("class", style);
    printerChar.innerHTML += randomChar;

    newLine.appendChild(printerChar);

    setTimeout(() => {
      // Print actual character and start over
      newLine.innerHTML += txt[charPosition];
      document.getElementById("printer-char").remove()
      charPosition++;
      print();
    }, speed);

  } else {
    
    // Printing finished 
    let oldHeight = newLine.offsetHeight;
    let lineContainer = document.getElementById("line-container");
    lineContainer.style.height = (oldHeight/2)+"px";
    lineContainer.removeAttribute("id");

  	charPosition = 0;
    speed = DEFAULT_SPEED;
    style = DEFAULT_STYLE;
    newLine.removeAttribute("id");
  }
}

//------ FOCUS INPUT SO USER CAN TYPE ------//
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
  