//Importa función que inicializa los administradores en localStorage si no existen
import{inicializarAdministradores} from "./data.js"

//Importa funciones relacionadas con el tema visual y el panel de perfil
import { cargarTema ,cambiarTema, modificarProfilePanel} from "./basicFuntions.js"

//Carga el tema guardado (modo claro/oscuro)
cargarTema()

//Actualiza la información del panel de perfil del usuario
modificarProfilePanel()

//Botón que permite cambiar el tema al hacer click
document.getElementById("themeBtn").addEventListener("click",cambiarTema)


//Inicializa la lista de administradores en localStorage
inicializarAdministradores();


//Contenedor principal donde se renderiza la tabla de administradores
const tableDiv = document.getElementById("tableDiv")

//Obtiene los administradores almacenados en localStorage
const administradoresData = JSON.parse(localStorage.getItem("administradores"))

//Formulario usado para realizar búsquedas
const searchForm = document.getElementById("searchForm")


//Botón para crear un nuevo administrador
const addBtn = document.getElementById("addBtn")

//Input donde el usuario escribe la búsqueda
const searchInput = document.getElementById("searchInput")

//Select que filtra por nivel de acceso
const searchSelect = document.getElementById("searchSelect")

//Modal que contiene el formulario de edición/creación
const editProfesorDiv = document.getElementById("bigProfesorDiv")

//Overlay que oscurece el fondo cuando el modal está abierto
const overlay = document.getElementById("overlay")

//Selects del formulario de administrador
const nivelAccesoSelect = document.getElementById("nivelAccesoSelect")
const sedeSelect = document.getElementById("sedeSelect")
const jornadaSelect = document.getElementById("jornadaSelect")

//Formulario que guarda los cambios del administrador
const editAdminForm = document.getElementById("editProfesorForm")


//Elementos del popup de confirmación
const popup = document.getElementById("popup")
const okBtn = document.getElementById("okBtn")
const notBtn = document.getElementById("notBtn")
const popupText = document.getElementById("popupText")


//Datos del administrador individual dentro del formulario
const persInfoName = document.getElementById("persInfoName")
const persInfoLastName = document.getElementById("persInfoLastName")
const persInfoImg = document.getElementById("persInfoImg")
const persInfoDireccion = document.getElementById("persInfoDireccion")
const persInfoEmail = document.getElementById("persInfoEmail")
const persInfoIdentificacion = document.getElementById("persInfoIdentificacion")
const persInfoTelefono = document.getElementById("persInfoTelefono")
const persInfoForm = document.getElementById("persInfoForm")

//Expresión regular usada para validar si un correo tiene formato válido
const estructuraEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//Función encargada de renderizar los administradores en la tabla
function mostrarAdministradores(data){
    data.forEach(admin => {

        //Solo muestra administradores que estén activos
        if(admin.active === true){

        //Datos principales del administrador
        const nombre = admin.nombres
        const apellidos = admin.apellidos
        const identificacion = admin.identificacion
        const email = admin.email

        //Si no hay foto se usa una imagen placeholder
        const foto = admin.fotoPerfil || "../media/profilePlaceholder.png"

        const nivelAcceso = admin.nivelAcceso

        //Crea el contenedor visual de cada administrador
        const adminDiv = document.createElement("div")

        //Reutiliza estilos del módulo de profesores
        adminDiv.classList.add("profesorDiv")

        //Estructura HTML que representa cada fila de administrador
        adminDiv.innerHTML=`
        <div class="profesorName"><img src=${foto}> ${nombre} ${apellidos}</div>
        <div>${identificacion}</div>
        <div class="cortarTexto">${email}</div>
        <div>${nivelAcceso}</div>
        <div class="profesorDivBtns"><button class="btn editBtn" title="Editar Docente" data-id=${identificacion}><i class="fa-solid fa-pen-to-square editBtnI"></i></button>
            <button class="btn deleteBtn" title="Eliminar Docente" data-id=${identificacion}><i class="fa-solid fa-xmark"></i></button></div>
        `

        //Añade el administrador al contenedor principal
        tableDiv.append(adminDiv)
        }
    });
}


//Filtra administradores según búsqueda y nivel de acceso
function buscarAdministradores(searchQuery){
    return administradoresData.filter(admin =>(

    //Coincidencia por nombre, apellido o identificación
    (admin.nombres.toLowerCase().includes(searchQuery.toLowerCase())
    || admin.apellidos.toLowerCase().includes(searchQuery.toLowerCase()) 
    || String(admin.identificacion).toLowerCase().includes(searchQuery.toLowerCase())
    )

    //Filtro adicional por nivel de acceso
&&  (admin.nivelAcceso.toLowerCase() === searchSelect.value.toLowerCase() || searchSelect.value.trim()==="")))
}


//Evento submit del formulario de búsqueda
searchForm.addEventListener("submit",(event)=>{

    //Evita recargar la página
    event.preventDefault()

    //Limpia la tabla
    tableDiv.innerHTML=""

    //Vuelve a insertar el encabezado
    tableDiv.innerHTML=`
    <div class="tableHeaderDiv">
        <div>Nombre</div>
        <div>Identificación</div>
        <div>Email</div>
        <div>Nivel de Acceso</div>
        <div></div>
    </div>
    `

    //Obtiene el texto de búsqueda
    let searchQuery = searchInput.value

    //Filtra los administradores
    let filteredAdministradores = buscarAdministradores(searchQuery)

    //Renderiza resultados
    mostrarAdministradores(filteredAdministradores);
})


//Función que abre el modal para crear un nuevo administrador
function addAdmin(){

    //Muestra el modal y bloquea el scroll del body
    editProfesorDiv.classList.remove("hidden")
    overlay.classList.remove("hidden")
    document.body.style.overflow =  "hidden";

    //Resetea todos los campos del formulario
        persInfoImg.src="../media/profilePlaceholder.png"
        persInfoName.value=""
        persInfoLastName.value=""
        persInfoDireccion.value=""
        persInfoEmail.value=""
        persInfoIdentificacion.value=""
        persInfoTelefono.value=""

    //Habilita inputs para edición
    const inputs = persInfoForm.querySelectorAll('input')
    inputs.forEach(input=>{
        if(input.id!=="persInfoIdentificacion"){
            input.disabled=false
        }
    })

    persInfoLastName.classList.remove("hidden")
    persInfoName.classList.add("inputFormStyle")

    //Obtiene el ID más alto existente para generar el siguiente
    const administradores = JSON.parse(localStorage.getItem("administradores"))
    let codigoAlto = 0;

    administradores.forEach(admin => {
        let idAdmin = admin.identificacion
        if (Number(idAdmin) > codigoAlto){
            codigoAlto = admin.identificacion
        }
    });

    //Incrementa el ID
    codigoAlto+=1

    console.log(codigoAlto)

    //Asignar nuevo ID al formulario
    persInfoIdentificacion.value = codigoAlto
}


//Carga inicial de administradores
mostrarAdministradores(administradoresData)

//Evento para abrir modal de creación
addBtn.addEventListener("click", addAdmin)


//Función que llena dinámicamente los selects con valores únicos
function cargarSelects(select,akey){

    let lista = [];

    administradoresData.forEach(admin => {

        //Evita valores duplicados
        if(lista.includes(admin[akey]) === false){
            lista.push(admin[akey])
        }

    })

    //Crea las opciones del select
    lista.forEach(cosa => {
        let opt = document.createElement("option")
        opt.value=cosa.toLowerCase()
        opt.innerHTML=cosa
        select.append(opt)
    })
}


//Carga las opciones de los selects
cargarSelects(searchSelect, "nivelAcceso")
cargarSelects(nivelAccesoSelect, "nivelAcceso")
cargarSelects(sedeSelect, "sede")
cargarSelects(jornadaSelect, "jornada")


// EDITAR PROFESOR
function editProfesor(editBtn){

    //Deshabilita inputs que no deben editarse
    const inputs = persInfoForm.querySelectorAll('input')
    inputs.forEach(input=>{
            input.disabled=true
        }
    )

    persInfoLastName.classList.add("hidden")
    persInfoName.classList.remove("inputFormStyle")

     //Obtiene datos del administrador seleccionado
    let adminData = buscarAdministradores(editBtn.dataset.id)

    //Carga datos en los selects
        nivelAccesoSelect.value=adminData[0].nivelAcceso.toLowerCase()
        sedeSelect.value=adminData[0].sede.toLowerCase()
        jornadaSelect.value=adminData[0].jornada.toLowerCase()

    //Resetea scroll del modal
    overlay.scrollTop=0 

    //Muestra modal
    editProfesorDiv.classList.remove("hidden")
    overlay.classList.remove("hidden")
    document.body.style.overflow =  "hidden";

    //Carga datos personales
    persInfoImg.src=adminData[0].fotoPerfil
    persInfoName.value=adminData[0].nombres + " " + adminData[0].apellidos
    persInfoDireccion.value=adminData[0].direccion
    persInfoEmail.value=adminData[0].email
    persInfoTelefono.value=adminData[0].telefono
    persInfoIdentificacion.value=adminData[0].identificacion
}


//Cierra el modal si el popup no está activo
function cerrarEdit(){

    if(popup.classList.contains("hidden")){
        editProfesorDiv.classList.add("hidden")
        overlay.classList.add("hidden")
        document.body.style.overflow="auto";
    }
    
}


//Cerrar modal haciendo click en overlay
overlay.addEventListener("click", (e)=> {
    if(e.target===overlay){
        cerrarEdit()
    }
})


//Cerrar modal con tecla Escape
document.addEventListener("keydown",(e)=>{
    if(e.key==='Escape' && !editProfesorDiv.classList.contains("hidden")){
        cerrarEdit()
    }
})


//Eliminación lógica de administrador
async function deleteProfesor(deleteBtn){

    if(await popupConfirm("Quieres eliminar este administrador?")){

        const administradores = JSON.parse(localStorage.getItem("administradores"))

        const index = administradores.findIndex(p => String(p.identificacion) === deleteBtn.dataset.id)

        if(index != -1){

                //Marca como inactivo en lugar de eliminar
                administradores[index].active = false

                localStorage.setItem("administradores",JSON.stringify(administradores))

                //Recarga página
                window.location.href="administradores.html"

            } else{

            console.log("Accion cancelada: no se borro ningun profesor")

        }
    }

}


//Delegación de eventos para botones de editar/eliminar
tableDiv.addEventListener("click", (e)=>{

    const editBtn = e.target.closest(".editBtn");
    const deleteBtn = e.target.closest(".deleteBtn");

    if(editBtn){
        editProfesor(editBtn)
    } else{

    if(deleteBtn){
        deleteProfesor(deleteBtn)
    }

}
})


//Capitaliza la primera letra de una palabra
function capitalizar(string) {

    if (string.length === 0) return "";

    return string.charAt(0).toUpperCase() + string.slice(1);
}


//Popup reutilizable de confirmación
async function popupConfirm(message) {

    overlay.classList.remove("hidden")
    popup.classList.remove("hidden")

    popupText.textContent=message

    return new Promise((resolve) => {

        const closePopup = (value) => {

            popup.classList.add("hidden");

            overlay.classList.add("hidden")

            okBtn.removeEventListener("click", proceed);

            notBtn.removeEventListener("click", cancel);

            resolve(value);

        };

        const proceed = () => closePopup(true);

        const cancel = () => closePopup(false);

        okBtn.addEventListener("click", proceed);

        notBtn.addEventListener("click", cancel);

    });
}


//Evento submit del formulario de edición/creación
editAdminForm.addEventListener("submit",async (e)=>{

    e.preventDefault()

    //Valida campos vacíos
    if(persInfoName.value.trim()==="" || persInfoDireccion.value.trim()===""|| persInfoEmail.value.trim()===""
    || persInfoIdentificacion.value.trim()==="" || persInfoTelefono.value.trim()===""
    ){

    await popupConfirm("Un campo está vacio, asegurese de llenar todos los campos al crear un nuevo usuario")

    cerrarEdit()

    }else{ 

        //Valida formato de correo
        if(!estructuraEmail.test(persInfoEmail.value) || persInfoEmail.value.length > 64 ){

            await popupConfirm("Correo electrónico inválido o muy largo (Caracteres máximos: 64), asegurese de colocar una direccion de correo válida")

        } else {

    if (await popupConfirm("Quieres confirmar y guardar los cambios realizados?")){
    
//AGARRAR DATOS DEL FORM
    const formData = new FormData(e.target)
    const nuevoNivelAcceso = formData.get("nvAcceso")
    const nuevaSede = formData.get("sede")
    const nuevaJornada = formData.get("jornada")

//AGARRAR DATOS DEL DOM
    const id = persInfoIdentificacion.value

    let admins = JSON.parse(localStorage.getItem("administradores"))

//BUSCAR AL ADMINISTRADOR EN LA LISTA DE LOCALSTORAGE
    const index = admins.findIndex(p => String(p.identificacion) === id)

    if(index !== -1){

        admins[index].nivelAcceso = capitalizar(nuevoNivelAcceso)
        admins[index].sede = capitalizar(nuevaSede)
        admins[index].jornada = capitalizar(nuevaJornada)
        
    } else { 

            //Verifica duplicados
            const emailExiste = admins.some(p => 
                p.email === persInfoEmail.value
            )

            const telefonoExiste = admins.some(p => 
                p.telefono === persInfoTelefono.value
            )

            if (emailExiste || telefonoExiste){

                await popupConfirm("El documento o correo electronico ya está registrado, asegurese de no ingresar uno ya existente")

            } else {

        admins.push(
            {
            identificacion: persInfoIdentificacion.value,
            nombres: persInfoName.value,
            apellidos: persInfoLastName.value,
            email: persInfoEmail.value,
            telefono: persInfoTelefono.value,
            cargo: "Administrador",
            password: "admin123",
            direccion: persInfoDireccion.value,
            fotoPerfil: persInfoImg.src,
            nivelAcceso: capitalizar(nivelAccesoSelect.value),
            sede: capitalizar(sedeSelect.value),
            active: true,
            jornada: capitalizar(jornadaSelect.value)
            },
        )
            
    }
    
    }

//Guardar cambios en localStorage
    localStorage.setItem("administradores", JSON.stringify(admins))

//Recargar página para reflejar cambios
    window.location.href="administradores.html"

} else {

    cerrarEdit()

}

}

}

})