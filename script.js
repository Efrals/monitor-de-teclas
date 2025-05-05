document.addEventListener("keyup", processKeyEvent);
const key = document.getElementById("key");
const code = document.getElementById("code");
const which = document.getElementById("which");
const keyCode = document.getElementById("keyCode");
const keyPressed = document.getElementById("key-pressed");

// Adiciona um input oculto para manter o foco
const keyFocus = document.getElementById("key-focus");

// Mantém o foco no input oculto
function maintainFocus() {
  if (document.activeElement !== keyFocus) {
    keyFocus.focus();
  }
}

// Define foco ao iniciar
maintainFocus();

// Use keydown para poder impedir atalhos
document.addEventListener("keydown", function (event) {
  event.preventDefault(); // Impede atalhos do navegador
  processKeyEvent(event);
});

//  Mostra o nome da tecla pressionada
function processKeyEvent(event) {
  if (event.key) {
    key.innerText = event.key;
    if (event.key == "Enter") {
      keyPressed.innerText = "↲";
    } else if (event.key == "Escape") {
      keyPressed.innerText = "Esc";
    } else if (event.key == "PrintScreen") {
      keyPressed.innerText = "PrtSc";
    } else if (event.key == "ScrollLock") {
      keyPressed.innerText = "ScrLk";
    } else if (event.key == "Backspace") {
      keyPressed.innerText = "⌫";
    } else if (event.key == "PageUp") {
      keyPressed.innerText = "PgUp";
    } else if (event.key == "PageDown") {
      keyPressed.innerText = "PgDn";
    } else if (event.key == "Delete") {
      keyPressed.innerText = "Del";
    } else if (event.key == "NumLock") {
      keyPressed.innerText = "Num";
    } else if (event.key == "CapsLock") {
      keyPressed.innerText = "CapsL";
    } else if (event.key == "Control") {
      keyPressed.innerText = "Ctrl";
    } else if (event.key == "ArrowUp") {
      keyPressed.innerText = "⬆";
    } else if (event.key == "ArrowDown") {
      keyPressed.innerText = "⬇";
    } else if (event.key == "ArrowLeft") {
      keyPressed.innerText = "⬅";
    } else if (event.key == "ArrowRight") {
      keyPressed.innerText = "➡";
    } else if (event.key == "AltGraph") {
      keyPressed.innerText = "AltGr";
    } else if (event.key == "ContextMenu") {
      keyPressed.innerText = "Menu";
    } else {
      keyPressed.innerText = event.key;
    }
  }

  //  Mostra o nome da tecla pressionada
  if (event.code) {
    if (event.code == "Space") {
      keyPressed.innerText = "Space";
    } else if (event.code == "BracketLeft") {
      keyPressed.innerText = "´";
    } else if (event.code == "Quote") {
      keyPressed.innerText = "~";
    } else {
      code.innerText = event.code;
    }
  }

  //  Mostra o nome da tecla pressionada
  if (event.which) {
    which.innerText = event.which;
  }

  //  Mostra o nome da tecla pressionada
  if (event.keyCode) {
    keyCode.innerText = event.keyCode;
  }
}
