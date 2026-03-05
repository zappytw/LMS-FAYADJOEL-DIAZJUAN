import { inicializarAdministradores } from "./data.js";
import { cargarTema ,cambiarTema, modificarProfilePanel} from "./basicFuntions.js"

cargarTema()
modificarProfilePanel()

inicializarAdministradores()

document.getElementById("themeBtn").addEventListener("click",cambiarTema)

const administradores = JSON.parse(localStorage.getItem("administradores"));
const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"))

const infoProfileForm = document.getElementById("infoProfile")

function showBasicInfo() {
    const basicInfoProfile = document.getElementById("basicInfoProfile")

    const img = document.createElement("img")
    img.classList.add("fotoPerfil")
    img.src = usuarioLogeado.fotoPerfil
    
    const nombre = document.createElement("h2")
    nombre.classList.add("nombre")
    nombre.textContent = usuarioLogeado.nombres

    const cargo = document.createElement("p")
    cargo.classList.add("cargo")
    cargo.textContent = usuarioLogeado.cargo

    basicInfoProfile.appendChild(img)
    basicInfoProfile.appendChild(nombre)
    basicInfoProfile.appendChild(cargo)
}

function showTotalInfo(){
    document.getElementById("nombres").value = usuarioLogeado.nombres
    document.getElementById("apellidos").value = usuarioLogeado.apellidos
    document.getElementById("email").value = usuarioLogeado.email
    document.getElementById("telefono").value = usuarioLogeado.telefono
    document.getElementById("direccion").value = usuarioLogeado.direccion

    document.getElementById("identificacion").value = usuarioLogeado.identificacion
    document.getElementById("cargo").value = usuarioLogeado.cargo
    document.getElementById("nivelAcceso").value = usuarioLogeado.nivelAcceso
    document.getElementById("sede").value = usuarioLogeado.sede
    document.getElementById("jornada").value = usuarioLogeado.jornada
}

showBasicInfo();
showTotalInfo();

function ModificarUsuarioLogeado(newNombres,newApellidos,newEmail,newTelefono,newDireccion){
    return {
        ...usuarioLogeado,
        nombres: newNombres,
        apellidos: newApellidos,
        email: newEmail,
        telefono: newTelefono,
        direccion: newDireccion
    }
}

function ModificarAdministradores(administradorModificado){
    return administradores.map(a => {
        if(a.identificacion !== administradorModificado.identificacion) return a
        return administradorModificado
    })
}

infoProfileForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const formData = new FormData(infoProfileForm);

    const administradorModificado = ModificarUsuarioLogeado(
        formData.get("nombres"),
        formData.get("apellidos"),
        formData.get("email"),
        formData.get("telefono"),
        formData.get("direccion")
    )

    const administradoresModificado = ModificarAdministradores(administradorModificado)

    localStorage.setItem("usuarioLogeado", JSON.stringify(administradorModificado));
    localStorage.setItem("administradores", JSON.stringify(administradoresModificado));

    window.location.reload();
});
