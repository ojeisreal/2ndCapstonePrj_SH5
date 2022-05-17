const menuicon = document.querySelector(".hamburgermenu");
const navbar = document.querySelector(".navbar");

menuicon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

const form = document.querySelector(".registrationform");
const pass = document.querySelector(".password");
const confirmpass = document.querySelector(".confirmpassword");
const confirmpasserror = document.querySelector(".error_confirmpassword");

form.addEventListener("submit", (e) => {
let message = []
if ( pass.value !== confirmpass.value) {
    message.push ("! Passwords do not Match, re-enter passwords")
}

if (message.length > 0) {
    e.preventDefault()
    confirmpasserror.innerText = message
    confirmpasserror.style.color = '#FF7F7F';
}
});
 