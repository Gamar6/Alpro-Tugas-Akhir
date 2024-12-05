const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

const togglePanel = () => {
    container.classList.toggle("right-panel-active");
};

registerButton.addEventListener("click", togglePanel);
loginButton.addEventListener("click", togglePanel);