import{inicializarProfesores} from "./data.js"
inicializarProfesores();

const tableDiv = document.getElementById("tableDiv")
const profesoresData = JSON.parse(localStorage.getItem("profesores"))
const searchForm = document.getElementById("searchForm")
const searchInput = document.getElementById("searchInput")
const searchSelect = document.getElementById("searchSelect")
const editProfesorDiv = document.getElementById("bigProfesorDiv")
const overlay = document.getElementById("overlay")

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
let areas = [];
    profesoresData.forEach(profesor => {
        if(areas.includes(profesor.areaAcademica) === false){
            areas.push(profesor.areaAcademica)
        }
    })
    areas.forEach(area => {
        let areaOpt = document.createElement("option")
        areaOpt.value=area.toLowerCase()
        areaOpt.innerHTML=area
        searchSelect.append(areaOpt)
    })


function editProfesor(editBtn){
    console.log("EDITAR"+editBtn.dataset.id)
    let profesorData = buscarProfesores(editBtn.dataset.id)
    console.log(profesorData)
    editProfesorDiv.classList.remove("hidden")
    overlay.classList.remove("hidden")
    document.body.style.overflow =  "hidden";

    persInfoImg.src=profesorData[0].fotoUrl
    persInfoName.textContent=profesorData[0].nombres + " " + profesorData[0].apellidos
    persInfoDocument.textContent=profesorData[0].identificacion
    persInfoEmail.textContent=profesorData[0].email
    persInfoId.textContent=profesorData[0].codigo

}
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
tableDiv.addEventListener("click", (e)=>{
    const editBtn = e.target.closest(".editBtn");
    const deleteBtn = e.target.closest(".deleteBtn");
    if(editBtn){
        editProfesor(editBtn)
    }
    if(deleteBtn){
    console.log("ELIMINAR" + deleteBtn.dataset.id)
    }
})

