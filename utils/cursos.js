import { inicializarCursosDisponibles} from "./data.js";

localStorage.clear();
inicializarCursosDisponibles();

const cursosDisponibles = JSON.parse(localStorage.getItem("cursosDisponibles"));
const pageContent = document.getElementById("pageContent")

function showCursosDisponibles(cursosDisponibles){
    cursosDisponibles.categorias.forEach(categoria => {
        let divCategoria = document.createElement("div")
        divCategoria.classList.add("divCategoria")

        divCategoria.innerHTML = `
            <h1>${categoria.nombre}</h1>
            <p class="desCate">${categoria.descripcion}</p>
        `;

        let divCursos = document.createElement("div")
        divCursos.classList.add("divCursos")

        categoria.cursos.forEach( curso => {
            let divCurso = document.createElement("div")
            divCurso.classList.add("divCurso")

            divCurso.innerHTML = `
                <span class="level">${curso.nivel}</span>
                <span class="time">${curso.duracion}</span>
                <img src="${curso.imagen}">
                <div class="info">
                    <h2>${curso.titulo}</h2>
                    <p>${curso.descripcion}</p>
                </div>
                <div class="btns">
                    <button>Enroll Now</button>
                    <button>More Info</button>
                </div>
            `;

            divCursos.appendChild(divCurso)
        })

        divCategoria.appendChild(divCursos)

        pageContent.appendChild(divCategoria)
    });
    
}

showCursosDisponibles(cursosDisponibles);