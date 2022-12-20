const socket = io(); //estoy ejecutando ya el web socket
let chatBox = document.querySelector("#chatBox");

chatBox.addEventListener("keyup", (e) => {
    e.key.toLowerCase() === "enter" && socket.emit("message", chatBox.value);
  // le envio al servidor la letra que yo presiono con el metodo .emit() y se lo estoy enviando bajo la etiqueta 'message' (es un nombre que designo, no una palabra reservada)
});

socket.on("history", (data) => {
    let messages = '';
  data.forEach(msg => {
    messages += `[${msg.userId}]: ${msg.message} <br>`
  })
  document.querySelector('#history').innerHTML = messages;
  chatBox.value = "";
});

socket.on('alert', () => {
    alert('Nuevo usuario conectado')
})
