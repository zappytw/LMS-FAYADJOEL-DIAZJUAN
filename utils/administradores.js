import{inicializarAdministradores, inicializarCursosDisponibles} from "./data.js"
import { cargarTema ,cambiarTema, modificarProfilePanel} from "./basicFuntions.js"

cargarTema()
//modificarProfilePanel()

document.getElementById("themeBtn").addEventListener("click",cambiarTema)


inicializarAdministradores();
inicializarCursosDisponibles();

const tableDiv = document.getElementById("tableDiv")
const administradoresData = JSON.parse(localStorage.getItem("administradores"))
const cursosData = JSON.parse(localStorage.getItem("cursosDisponibles"))
const searchForm = document.getElementById("searchForm")
const persInfoTelefono = document.getElementById("persInfoTelefono")
const persInfoForm = document.getElementById("persInfoForm")
const addBtn = document.getElementById("addBtn")
const searchInput = document.getElementById("searchInput")
const searchSelect = document.getElementById("searchSelect")
const editProfesorDiv = document.getElementById("bigProfesorDiv")
const overlay = document.getElementById("overlay")
const coursesDiv = document.getElementById("coursesDiv")
const nivelAccesoSelect = document.getElementById("nivelAccesoSelect")
const sedeSelect = document.getElementById("sedeSelect")
const jornadaSelect = document.getElementById("jornadaSelect")
const editAdminForm = document.getElementById("editProfesorForm")

const popup = document.getElementById("popup")
const okBtn = document.getElementById("okBtn")
const notBtn = document.getElementById("notBtn")
const popupText = document.getElementById("popupText")


//Datos de profesor individual
const persInfoName = document.getElementById("persInfoName")
const persInfoLastName = document.getElementById("persInfoLastName")
const persInfoImg = document.getElementById("persInfoImg")
const persInfoDireccion = document.getElementById("persInfoDireccion")
const persInfoEmail = document.getElementById("persInfoEmail")
const persInfoIdentificacion = document.getElementById("persInfoIdentificacion")
//Este const ayuda a validar que el value sea un correo electronico valido usando .test
const estructuraEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function mostrarAdministradores(data){
    data.forEach(admin => {
        if(admin.active === true){
        const nombre = admin.nombres
        const apellidos = admin.apellidos
        const identificacion = String(admin.identificacion)
        const email = admin.email
        const foto = admin.fotoPerfil
        const nivelAcceso = admin.nivelAcceso
        const adminDiv = document.createElement("div")
        adminDiv.classList.add("profesorDiv")
        adminDiv.innerHTML=`
        <div class="profesorName"><img src=${foto}> ${nombre} ${apellidos}</div>
        <div>${identificacion}</div>
        <div class="cortarTexto">${email}</div>
        <div>${nivelAcceso}</div>
        <div class="profesorDivBtns"><button class="btn editBtn" title="Editar Docente" data-id=${identificacion}><i class="fa-solid fa-pen-to-square editBtnI"></i></button>
            <button class="btn deleteBtn" title="Eliminar Docente" data-id=${identificacion}><i class="fa-solid fa-xmark"></i></button></div>
        `
        tableDiv.append(adminDiv)
        }
    });
}
function buscarAdministradores(searchQuery){
    return administradoresData.filter(admin =>(
    (admin.nombres.toLowerCase().includes(searchQuery.toLowerCase())
    || admin.apellidos.toLowerCase().includes(searchQuery.toLowerCase()) 
    || String(admin.identificacion).toLowerCase().includes(searchQuery.toLowerCase())
    )
&&  (admin.nivelAcceso.toLowerCase() === searchSelect.value.toLowerCase() || searchSelect.value.trim()==="")))
}

searchForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    tableDiv.innerHTML=""
    tableDiv.innerHTML=`
    <div class="tableHeaderDiv">
        <div>Nombre</div>
        <div>Identificación</div>
        <div>Email</div>
        <div>Nivel de Acceso</div>
        <div></div>
    </div>
    `
    let searchQuery = searchInput.value
    let filteredAdministradores = buscarAdministradores(searchQuery)
    mostrarAdministradores(filteredAdministradores);
})
function addProfesor(){
    //MOSTRAR EL MODAL
    editProfesorDiv.classList.remove("hidden")
    overlay.classList.remove("hidden")
    document.body.style.overflow =  "hidden";
    //====================
    //BORRAR DATOS ANTERIORES
        persInfoImg.src="../media/profilePlaceholder.png"
        persInfoName.value=""
        persInfoLastName.value=""
        persInfoDireccion.value=""
        persInfoEmail.value=""
        persInfoId.value=""
    //=======================
    //CARGAR AREAS ACADEMICAS
    //areaAcademicaSelect.innerHTML=""
    //cargarAreasSelect(areaAcademicaSelect);
    //=====================
    //CARGAR CURSOS
    //mostrarCursos(cargarCursos(areaAcademicaSelect.value))
    //=====================
    //ACTIVAR INPUTS
    const inputs = persInfoForm.querySelectorAll('input')
    inputs.forEach(input=>{
        if(input.id!=="persInfoId"){
            input.disabled=false
        }
    })

    persInfoLastName.classList.remove("hidden")
    persInfoName.classList.add("inputFormStyle")
    //=====================
    //ENCONTRAR CODIGO MAS ALTO
    const profesores = JSON.parse(localStorage.getItem("profesores"))
    let codigoAlto = 0;
    profesores.forEach(profesor => {
        let codigoProfesor = (profesor.codigo.slice(-3))
        if (Number(codigoProfesor) > codigoAlto){
            codigoAlto = Number(profesor.codigo.slice(-3))
        }
    });
    let nCeros = 3
    codigoAlto+=1
    codigoAlto = String(codigoAlto)
    nCeros -= codigoAlto.length
    console.log(codigoAlto)
    persInfoId.value ="PROF"+ ("0".repeat(nCeros)) + codigoAlto
}
//==Carga inicial==
mostrarAdministradores(administradoresData)
addBtn.addEventListener("click", addProfesor)

function cargarSelects(select,akey){
    select.innerHTML=""
    let lista = [];

    administradoresData.forEach(admin => {
        if(lista.includes(admin[akey]) === false){
            lista.push(admin[akey])
        }
    })
    lista.forEach(cosa => {
        let opt = document.createElement("option")
        opt.value=cosa.toLowerCase()
        opt.innerHTML=cosa
        select.append(opt)
    })
}
cargarSelects(searchSelect, "nivelAcceso")
//===============

function cargarCursos(areaAcademica){
    let objetoArea = cursosData.categorias.find(area =>
        area.nombre.toLowerCase() === areaAcademica.toLowerCase()
    );

    if(!objetoArea){
        console.log("No se encontró la categoría");
        return [];
    }

    return objetoArea.cursos;
}
function mostrarCursos(cursos, cursosProfesor=[]){
    coursesDiv.innerHTML=""
    let idCursosProfesor = []
    cursosProfesor.forEach(curso => {
        idCursosProfesor.push(curso.cursoId)
        }
    )
    cursos.forEach(curso => {
        let cursoDiv = document.createElement("div")
        cursoDiv.classList.add("cursoDiv")
        let checked = idCursosProfesor.includes(curso.id) ? "checked" : ""
        cursoDiv.innerHTML=`
        <div>${curso.titulo}</div>
        <div>${curso.id}</div>
        <input type=checkbox class="cursoCheckbox" name="curso" value=${curso.id} ${checked}>
        `
    coursesDiv.append(cursoDiv)
    }) 
}
// EDITAR PROFESOR
function editProfesor(editBtn){
    //DESHABILITAR INPUTS
    const inputs = persInfoForm.querySelectorAll('input')
    inputs.forEach(input=>{
            input.disabled=true
        }
    )
    persInfoLastName.classList.add("hidden")
    persInfoName.classList.remove("inputFormStyle")
     //DATOS DEL PROFESOR
    let adminData = administradoresData.find(
    admin => String(admin.identificacion) === editBtn.dataset.id
)
     //=====================
    //EDITAR AREA ACADEMICA
        cargarSelects(nivelAccesoSelect, "nivelAcceso")
        cargarSelects(sedeSelect, "sede")
        cargarSelects(jornadaSelect, "jornada")
        nivelAccesoSelect.value=adminData.nivelAcceso.toLowerCase()
        sedeSelect.value=adminData.sede.toLowerCase()
        jornadaSelect.value=adminData.jornada.toLowerCase()
    //=====================

    overlay.scrollTop=0 //RESET SCROLLBAR

    //MOSTRAR EL MODAL
    editProfesorDiv.classList.remove("hidden")
    overlay.classList.remove("hidden")
    document.body.style.overflow =  "hidden";
    //====================

    //CARGAR INFO PROFESOR
    persInfoImg.src=adminData.fotoPerfil
    persInfoName.value=adminData.nombres + " " + adminData.apellidos
    persInfoDireccion.value=adminData.direccion
    persInfoEmail.value=adminData.email
    persInfoTelefono.value=adminData.telefono
    persInfoIdentificacion.value=adminData.identificacion
    //======================
}
//=============
function cerrarEdit(){
    if(popup.classList.contains("hidden")){
        editProfesorDiv.classList.add("hidden")
        overlay.classList.add("hidden")
        document.body.style.overflow="auto";
    }
    
}
overlay.addEventListener("click", (e)=> {
    if(e.target===overlay){
        cerrarEdit()
    }
})
document.addEventListener("keydown",(e)=>{
    if(e.key==='Escape' && !editProfesorDiv.classList.contains("hidden")){
        cerrarEdit()
    }
})

async function deleteProfesor(deleteBtn){
    if(await popupConfirm("Quieres eliminar este profesor?")){
        const profesores = JSON.parse(localStorage.getItem("profesores"))
        const index = profesores.findIndex(p => p.codigo === deleteBtn.dataset.id)
        if(index != -1){
            if(profesores[index].cursos.length === 0){
                profesores[index].active = false
                localStorage.setItem("profesores",JSON.stringify(profesores))
                window.location.href="docentes.html"
            } else {
                await popupConfirm("El docente aun tiene cursos activos, por favor asegurese que el docente no tenga cursos activos antes de proceder")
            }
        } else{
            console.log("Accion cancelada: no se borro ningun profesor")
        }
    }


}
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
function capitalizar(string) { //funcion que hice porque el value de area del form para editar-
    //-estaba toda en minuscula
    if (string.length === 0) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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
editAdminForm.addEventListener("submit",async (e)=>{
    e.preventDefault()
    if(persInfoName.value.trim()==="" || persInfoDireccion.value.trim()===""|| persInfoEmail.value.trim()===""
    || persInfoIdentificacion.value.trim()==="" || persInfoTelefono.value.trim()===""
    ){
    await popupConfirm("Un campo está vacio, asegurese de llenar todos los campos al crear un nuevo usuario")
    cerrarEdit()
    }else{ 
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
//BUSCAR AL -ADMINISTRADOR- EN LA LISTA DE LOCALSTORAGE
    const index = admins.findIndex(p => p.identificacion === id)
    if(index !== -1){//VERIFICAR QUE EXISTA
        admins[index].nivelAcceso = capitalizar(String(nuevoNivelAcceso))
        admins[index].sede = capitalizar(String(nuevaSede))
        admins[index].jornada = capitalizar(String(nuevaJornada))
        console.log(index)
    } else { //SI NO EXISTE, CREAR UNO
        const emailExiste = admins.some(p => 
            p.email === persInfoEmail.value && String(p.identificacion) !== String(id)
        )

        const telefonoExiste = admins.some(p => 
            p.telefono === persInfoTelefono.value && String(p.identificacion) !== String(id)
        )
        if (emailExiste || telefonoExiste){
            await popupConfirm("El telefono o correo electronico ya está registrado, asegurese de no ingresar uno ya existente")
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
        //GUARDAR DATOS EN LOCALSTORAGE
            
    }
    
    }
//FINALMENTE, RECARGAR LA PAGINA PARA APLICAR CAMBIOS
    localStorage.setItem("administradores", JSON.stringify(admins))
    //window.location.href="administradores.html"
} else {
    cerrarEdit()
}
}
}
})
