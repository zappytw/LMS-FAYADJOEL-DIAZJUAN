import { inicializarCursosDisponibles} from "./data.js";

localStorage.clear();
inicializarCursosDisponibles();

const cursosDisponibles = JSON.parse(localStorage.getItem("cursosDisponibles"));
const pageContent = document.getElementById("pageContent")

function showCursosDisponibles(){
    pageContent.innerHTML = ""
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
                    <button id="${curso.id}" class="btnEnrollNow">Enroll Now</button>
                    <button>More Info</button>
                </div>
            `;

            divCursos.appendChild(divCurso)
        })

        divCategoria.appendChild(divCursos)

        pageContent.appendChild(divCategoria)
    });
    
}

showCursosDisponibles();

pageContent.addEventListener("click", function(event) {
    
    if (event.target.classList.contains("btnEnrollNow")) {
        
        const IDcurso = Number(event.target.id);

        pageContent.innerHTML = '<button id="backBtn">Back to courses</button>';
        document.getElementById("backBtn")
            .addEventListener("click", showCursosDisponibles);

        const IDcategoria = Math.floor(
            IDcurso / Math.pow(10, Math.floor(Math.log10(IDcurso)))
        );

        const [dataCategoria] = cursosDisponibles.categorias.filter(
            categoria => categoria.id === IDcategoria
        );

        const [dataCurso] = dataCategoria.cursos.filter(
            curso => curso.id === IDcurso
        );

        let divImgInfo = document.createElement("div");
        divImgInfo.classList.add("divImgInfo");
        divImgInfo.style.backgroundImage = `url(${dataCurso.imagen})`;
        divImgInfo.style.backgroundSize = "cover";
        divImgInfo.style.backgroundPosition = "center";
        divImgInfo.style.backgroundRepeat = "no-repeat";

        pageContent.appendChild(divImgInfo);
    }

});

