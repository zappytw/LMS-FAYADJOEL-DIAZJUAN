import{inicializarProfesores} from "./data.js"
inicializarProfesores();

const tableDiv = document.getElementById("tableDiv")
const profesoresData = JSON.parse(localStorage.getItem("profesores"))
const searchForm = document.getElementById("searchForm")
const searchInput = document.getElementById("searchInput")
const searchSelect = document.getElementById("searchSelect")


function mostrarProfesores(data){
    data.forEach(profesor => {
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
        <div class="profesorDivBtns"><button class="btn editBtn" title="Editar Docente"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn deleteBtn" title="Eliminar Docente"><i class="fa-solid fa-xmark"></i></button></div>
        `
        tableDiv.append(profesorDiv)
    });
}
function buscarProfesores(searchQuery){
    return profesoresData.filter(profesor =>
    profesor.nombres.toLowerCase().includes(searchQuery.toLowerCase())
    || profesor.apellidos.toLowerCase().includes(searchQuery.toLowerCase()) 
    || profesor.codigo.toLowerCase().includes(searchQuery.toLowerCase()))
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