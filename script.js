// Inicia como ABNT
let currentLayout = "ABNT"; // ou "ANSI"

// Alterna entre os layouts ABNT e ANSI
function toggleLayout() {
  currentLayout = currentLayout === "ABNT" ? "ANSI" : "ABNT";

  // Atualiza o título e botão
  const title = document.getElementById("layout-title");
  const toggleButton = document.getElementById("layout-toggle");
  title.innerText = `Monitor de Teclas (${currentLayout})`;
  toggleButton.innerText =
    currentLayout === "ABNT" ? "Alternar para ANSI" : "Alternar para ABNT";
}

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

//  Mostra o nome da tecla pressionada em key
function processKeyEvent(event) {
  if (event.key) {
    key.innerText = event.key;
    // Converte e abrevia valores
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

  //  Mostra o nome da tecla pressionada em code
  if (event.code) {
    code.innerText = event.code;
    if (event.code == "Space") {
      keyPressed.innerText = "Space";
      //  Verifica se exibe em padrão ABNT
    } else if (currentLayout === "ABNT") {
      if (event.code == "BracketLeft") {
        keyPressed.innerText = "´";
      } else if (event.code == "BracketRight") {
        keyPressed.innerText = "[";
      } else if (event.code == "Backslash") {
        keyPressed.innerText = "]";
      } else if (event.code == "Semicolon") {
        keyPressed.innerText = "ç";
      } else if (event.code == "Quote") {
        keyPressed.innerText = "~";
      } else if (event.code == "Slash") {
        keyPressed.innerText = ";";
      } else if (event.code == "Backquote") {
        keyPressed.innerText = "'";
      }
      //  Verifica se exibe em padrão ANSI
    } else if (currentLayout === "ANSI") {
      if (event.code == "BracketLeft") {
        keyPressed.innerText = "[";
      } else if (event.code == "BracketRight") {
        keyPressed.innerText = "]";
      } else if (event.code == "Backslash") {
        keyPressed.innerText = "\\";
      } else if (event.code == "Semicolon") {
        keyPressed.innerText = ";";
      } else if (event.code == "Quote") {
        keyPressed.innerText = "'";
      } else if (event.code == "Slash") {
        keyPressed.innerText = "/";
      } else if (event.code == "Backquote") {
        keyPressed.innerText = "`";
      } else if (event.code == "IntlRo") {
        keyPressed.innerText = "";
      }
    } else {
      code.innerText = event.code;
    }
  }

  //  Mostra o nome da tecla pressionada em which
  if (event.which) {
    which.innerText = event.which;
  }

  //  Mostra o nome da tecla pressionada em keyCode
  if (event.keyCode) {
    keyCode.innerText = event.keyCode;
  }
}
