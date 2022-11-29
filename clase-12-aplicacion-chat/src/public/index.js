const socket = io();
let user;

Swal.fire({
  title: "Login",
  input: "text",
  text: "Enter your nick",
  allowOutsideClick: false,
  inputValidator: (value) => !value && "You need to enter a nick!",
}).then((response) => {
  user = response.value;
  socket.emit('registered', user);
});

const chatBox = document.querySelector("#chatBox");
const history = document.querySelector("#history");

chatBox.addEventListener("keyup", (e) => {
  if (chatBox.value.trim() !== "") {
    if (e.key.toLowerCase() === "enter") {
      socket.emit("message", { user, message: chatBox.value.trim() });
      chatBox.value = "";
    }
  }
});

socket.on("newUser", data =>
  Swal.fire({
    icon: "success",
    text: `${data} has connected!`,
    position: "top-right",
    toast: true,
  })
);

socket.on("log", (data) => {
  let messages = "";
  data.forEach((msg) => {
    messages += `${msg.user}: ${msg.message} <br>`;
  });
  history.innerHTML = `<p>${messages}</p>`;
});
