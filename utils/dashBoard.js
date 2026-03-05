import { inicializarAdministradores,inicializarProfesores,inicializarCursosDisponibles } from "./data.js";
import { cargarTema ,cambiarTema, modificarProfilePanel} from "./basicFuntions.js"

cargarTema()
modificarProfilePanel()

document.getElementById("themeBtn").addEventListener("click",cambiarTema)

inicializarAdministradores();
inicializarCursosDisponibles();
inicializarProfesores();

const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"))
const cursosDisponibles = JSON.parse(localStorage.getItem("cursosDisponibles"));
const profesores = JSON.parse(localStorage.getItem("profesores"));
const administradores = JSON.parse(localStorage.getItem("administradores"));

const main = document.getElementById("main")

function saludar(){
    main.innerHTML = `
        <div class="saludo">
            <h1>Bienvenido ${usuarioLogeado.nombres + " " + usuarioLogeado.apellidos}</h1>
            <p>${usuarioLogeado.cargo}</p>
        </div>
    `
}

function showInfoBasic(){
    const divInfoBasic = document.createElement("div")
    divInfoBasic.classList.add("divInfoBasic")

    let nCursos = 0;
    let nModulos = 0;
    let nProfesores = profesores.length
    let nAdministradores = administradores.length

    cursosDisponibles.categorias.forEach(c => {
        nCursos += c.cursos.length
        c.cursos.forEach(curso => {
            nModulos += curso.modulos.length
        })
    });

    let infoBasic = [
        {nombre : "Cursos", num : nCursos},
        {nombre : "Modulos", num : nModulos},
        {nombre : "Profesores", num : nProfesores},
        {nombre : "Administradores", num : nAdministradores}
    ];

    infoBasic.forEach(i => {
        divInfoBasic.innerHTML += `
            <div class="card">
                <h2>${i.nombre}</h2>
                <p>${i.num}</p>
            </div>
        `
    });

    main.appendChild(divInfoBasic)
}

function profesoresInactivos(){
    const inactivos = profesores.filter(p => !p.active)

    const table = document.createElement("table")
    table.classList.add("tablaInactivos")

    table.innerHTML = `
            <tr>
                <th>Codigo</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Area academica</th>
            </tr>
        `
    inactivos.forEach( i => {
        table.innerHTML += `
            <tr>
                <th>${i.codigo}</th>
                <th>${i.nombres}</th>
                <th>${i.apellidos}</th>
                <th>${i.areaAcademica}</th>
            </tr>
        `
    })

    main.appendChild(table)
}

saludar();
showInfoBasic();
profesoresInactivos();