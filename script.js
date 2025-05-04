document.addEventListener("keyup", processKeyEvent);

// Para depois criar um sistema de teste de teclado
document.addEventListener("keydown", processKeyEvent);

function processKeyEvent(event) {
  console.log(event);
  if (event.key === "Enter") {
    document.body.style.backgroundColor = "green";
  }
}
