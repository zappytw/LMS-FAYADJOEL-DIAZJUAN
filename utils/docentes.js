import{inicializarProfesores, inicializarCursosDisponibles} from "./data.js"
inicializarProfesores();
inicializarCursosDisponibles();

const tableDiv = document.getElementById("tableDiv")
const profesoresData = JSON.parse(localStorage.getItem("profesores"))
const cursosData = JSON.parse(localStorage.getItem("cursosDisponibles"))
const searchForm = document.getElementById("searchForm")
const searchInput = document.getElementById("searchInput")
const searchSelect = document.getElementById("searchSelect")
const editProfesorDiv = document.getElementById("bigProfesorDiv")
const overlay = document.getElementById("overlay")
const coursesDiv = document.getElementById("coursesDiv")
const areaAcademicaSelect =document.getElementById("areaAcademicaSelect")
const editProfesorForm = document.getElementById("editProfesorForm")

const popup = document.getElementById("popup")
const okBtn = document.getElementById("okBtn")
const notBtn = document.getElementById("notBtn")
const popupText = document.getElementById("popupText")
//Datos de profesor individual
const persInfoName = document.getElementById("persInfoName")
const persInfoImg = document.getElementById("persInfoImg")
const persInfoDocument = document.getElementById("persInfoDocument")
const persInfoEmail = document.getElementById("persInfoEmail")
const persInfoId = document.getElementById("persInfoId")

function mostrarProfesores(data){
    data.forEach(profesor => {
        if(profesor.active === true){
        const nombre = profesor.nombres
        const apellidos = profesor.apellidos
        const id = profesor.codigo
        const area = profesor.areaAcademica
        const email = profesor.email
        const foto = profesor.fotoUrl

        const profesorDiv = document.createElement("div")
        profesorDiv.classList.add("profesorDiv")
        profesorDiv.innerHTML=`
        <div class="profesorName"><img src=${foto}> ${nombre} ${apellidos}</div>
        <div>${id}</div>
        <div>${email}</div>
        <div>${area}</div>
        <div class="profesorDivBtns"><button class="btn editBtn" title="Editar Docente" data-id=${id}><i class="fa-solid fa-pen-to-square editBtnI"></i></button>
            <button class="btn deleteBtn" title="Eliminar Docente" data-id=${id}><i class="fa-solid fa-xmark"></i></button></div>
        `
        tableDiv.append(profesorDiv)
        }
    });
}
function buscarProfesores(searchQuery){
    return profesoresData.filter(profesor =>(
    (profesor.nombres.toLowerCase().includes(searchQuery.toLowerCase())
    || profesor.apellidos.toLowerCase().includes(searchQuery.toLowerCase()) 
    || profesor.codigo.toLowerCase().includes(searchQuery.toLowerCase())
    )
&&  (profesor.areaAcademica.toLowerCase() === searchSelect.value.toLowerCase() || searchSelect.value==="")))
}

searchForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    tableDiv.innerHTML=""
    tableDiv.innerHTML=`
    <div class="tableHeaderDiv">
        <div>Nombre</div>
        <div>Còdigo</div>
        <div>Email</div>
        <div>Àrea</div>
        <div></div>
    </div>
    `
    let searchQuery = searchInput.value
    let filteredProfesores = buscarProfesores(searchQuery)
    mostrarProfesores(filteredProfesores);
})

//==Carga inicial==
mostrarProfesores(profesoresData)

function cargarAreasSelect(select){
    let areas = [];
    cursosData.categorias.forEach(curso => {
        if(areas.includes(curso.nombre) === false){
            areas.push(curso.nombre)
        }
    })
    areas.forEach(area => {
        let areaOpt = document.createElement("option")
        areaOpt.value=area.toLowerCase()
        areaOpt.innerHTML=area
        select.append(areaOpt)
    })
}
cargarAreasSelect(searchSelect);
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

    //EDITAR AREA ACADEMICA
    let cursosProfesor=buscarProfesores(editBtn.dataset.id)[0].cursos
    let areaAcademica=buscarProfesores(editBtn.dataset.id)[0].areaAcademica
    areaAcademicaSelect.innerHTML=""
    cargarAreasSelect(areaAcademicaSelect);
    areaAcademicaSelect.value = areaAcademica.toLowerCase()
    //=====================
    //EDITAR CURSOS
    coursesDiv.innerHTML=""
    mostrarCursos(cargarCursos(areaAcademicaSelect.value),cursosProfesor)
    //=====================
    //DATOS DEL PROFESOR
        let profesorData = buscarProfesores(editBtn.dataset.id)
    //=====================

    overlay.scrollTop=0 //RESET SCROLLBAR

    //MOSTRAR EL MODAL
    editProfesorDiv.classList.remove("hidden")
    overlay.classList.remove("hidden")
    document.body.style.overflow =  "hidden";
    //====================

    //CARGAR INFO PROFESOR
    persInfoImg.src=profesorData[0].fotoUrl
    persInfoName.textContent=profesorData[0].nombres + " " + profesorData[0].apellidos
    persInfoDocument.textContent=profesorData[0].identificacion
    persInfoEmail.textContent=profesorData[0].email
    persInfoId.textContent=profesorData[0].codigo
    //======================
}
areaAcademicaSelect.addEventListener("change",()=>{
    mostrarCursos(cargarCursos(areaAcademicaSelect.value))
})
//=============
function cerrarEdit(){
    editProfesorDiv.classList.add("hidden")
    overlay.classList.add("hidden")
    document.body.style.overflow="auto";
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

function deleteProfesor(deleteBtn){
    
}
tableDiv.addEventListener("click", (e)=>{
    const editBtn = e.target.closest(".editBtn");
    const deleteBtn = e.target.closest(".deleteBtn");
    if(editBtn){
        editProfesor(editBtn)
    }
    if(deleteBtn){
        deleteProfesor(deleteBtn)
    }
})
function capitalizar(string) { //funcion que hice porque el value de area del form para editar-
    //-estaba toda en minuscula
    if (string.length === 0) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
}

async function popupConfirm(message) {
    popup.classList.remove("hidden")
    popupText.textContent=message
    return new Promise((resolve) => {
        const closePopup = (value) => {
            popup.classList.add("hidden");
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
editProfesorForm.addEventListener("submit",async (e)=>{
    e.preventDefault()
    if (await popupConfirm("Quieres confirmar y guardar los cambios realizados?")){
    
//AGARRAR DATOS DEL FORM
    const formData = new FormData(e.target)
    const nuevosCursos = formData.getAll("curso")
    const nuevaArea = formData.get("area")
//AGARRAR DATOS DEL DOM
    const id = persInfoId.textContent

    let profesores = JSON.parse(localStorage.getItem("profesores"))
//BUSCAR AL PROFESOR EN LA LISTA DE LOCALSTORAGE
    const index = profesores.findIndex(p => p.codigo === id)
    if(index !== -1){
        //VERIFICAR QUE EXISTA
        profesores[index].areaAcademica = capitalizar(nuevaArea)

        profesores[index].cursos = nuevosCursos.map(cursoId => ({
            categoriaId: Number(cursoId[0]),
            cursoId: Number(cursoId)
        }))
        localStorage.setItem("profesores", JSON.stringify(profesores))
    }
//FINALMENTE, RECARGAR LA PAGINA PARA APLICAR CAMBIOS
    window.location.href="docentes.html"
} else {
    cerrarEdit
}
})
const themeBtn = document.querySelector(".themeBtn img");

function toggleTheme(){
    document.documentElement.classList.toggle("dark-theme");

    const isDark = document.documentElement.classList.contains("dark-theme");

    if(isDark){
        themeBtn.src = "../media/moon.png";
        localStorage.setItem("theme","dark");
    }else{
        themeBtn.src = "../media/sun.png";
        localStorage.setItem("theme","light");
    }
}

document.querySelector(".themeBtn").addEventListener("click", toggleTheme);

// Cargar tema guardado
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.documentElement.classList.add("dark-theme");
    themeBtn.src = "../media/moon.png";
}