import { inicializarAdministradores } from "./data.js";

inicializarAdministradores();

const loginForm = document.getElementById("loginForm")
const msgError = document.getElementById("msgError")

const administradores = JSON.parse(localStorage.getItem("administradores"));
console.log(administradores)

loginForm.addEventListener("submit",(e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);

    const inputEmail = formData.get("email")
    const inputPassword = formData.get("password")

    let usuarioLogeado;

    administradores.forEach( a => {
        if (a.email === inputEmail && a.password === inputPassword) {
            usuarioLogeado = a
            localStorage.setItem("usuarioLogeado", JSON.stringify(usuarioLogeado));
            window.location.href = "./pages/dashBoard.html";
        }else{
            msgError.classList.add("aparecer")
            setTimeout(() => {
                msgError.classList.remove("aparecer");
            }, 2000);
        }
    });
})