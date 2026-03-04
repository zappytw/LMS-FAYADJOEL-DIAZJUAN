import { inicializarCursosDisponibles, inicializarProfesores} from "./data.js";

localStorage.clear();

inicializarCursosDisponibles();
inicializarProfesores()
const cursosDisponibles = JSON.parse(localStorage.getItem("cursosDisponibles"));
const profesores = JSON.parse(localStorage.getItem("profesores"));

const pageContent = document.getElementById("pageContent")
const btnCrearForm = document.getElementById("btmCrear")

const divCCF = document.getElementById("divCCF")
const crearCursoForm = document.getElementById("createCursoForm")
const crearModuloBtn = document.getElementById("crearModuloBtn")
const modulosContainer = document.getElementById("modulosContainer")

function showCursosDisponibles(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
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
                <span class="spanInfo level">${curso.nivel}</span>
                <span class="spanInfo time">${curso.duracion}</span>
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

function añadirSelectCategoriaProfeForm(){
    const btnSubmit = document.getElementById("btnCrearCurso")
    
    const selectCategoria = document.createElement("select");
    selectCategoria.id = "categoria"
    selectCategoria.name = "categoria";
    selectCategoria.required = true;

    const selectProfe = document.createElement("select");
    selectProfe.id = "profesor"
    selectProfe.name = "profesor";
    selectProfe.required = true;

    selectCategoria.innerHTML = `<option value="">Seleccione Categoría</option>`;
    selectProfe.innerHTML = `<option value="">Seleccione Docente</option>`;

    const categorias = cursosDisponibles.categorias.map(c => c.nombre)
    categorias.forEach((c,index) => {
        selectCategoria.innerHTML += `
            <option value="${index+1}">${c}</option>
        `;
    })

    profesores.forEach(p => {
        selectProfe.innerHTML += `
            <option value="${p.codigo}">${p.nombres} ${p.apellidos}</option>
        `;
    })

    const divCategoria = document.createElement("div")
    divCategoria.classList.add("form-group")
    divCategoria.innerHTML = '<label for="categoria">Categoria</label>'
    divCategoria.appendChild(selectCategoria)

    const divProfe = document.createElement("div")
    divProfe.classList.add("form-group")
    divProfe.innerHTML = '<label for="profesor">Docente</label>'
    divProfe.appendChild(selectProfe)
    
    crearCursoForm.insertBefore(divCategoria, btnSubmit);
    crearCursoForm.insertBefore(divProfe, btnSubmit);
}

showCursosDisponibles();
añadirSelectCategoriaProfeForm();

//aparecer el formulario
btnCrearForm.addEventListener("click",()=>{
    divCCF.classList.remove("invi")
})

//desaparecer el formulario
divCCF.addEventListener("click",function(e){
    if (e.target === divCCF){
        divCCF.classList.add("invi")
    }
})

crearModuloBtn.addEventListener("click",()=>{
    const moduloTitulo = document.getElementById("moduloTitulo")
    const moduloContenido = document.getElementById("moduloContenido")

    modulosContainer.innerHTML += `
        <div class="moduloCreated">
            <span>Modulo ${moduloTitulo.value}</span>
            <p>${moduloContenido.value}</p>
        </div>
    `
    moduloTitulo.value = ""
    moduloContenido.value = ""
})

pageContent.addEventListener("click", function(event) {
    
    if (event.target.classList.contains("btnEnrollNow")) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        pageContent.innerHTML = '<button id="backBtn"><--Back to courses</button>';
        document.getElementById("backBtn").addEventListener("click", showCursosDisponibles);

        const IDcurso = Number(event.target.id);
        const IDcategoria = Math.floor(IDcurso / Math.pow(10, Math.floor(Math.log10(IDcurso))));
        
        const dataCategoria = cursosDisponibles.categorias.find(categoria => categoria.id === IDcategoria);
        const dataCurso = dataCategoria.cursos.find(curso => curso.id === IDcurso);

        const dataProfesor = profesores.find(p =>
            p.cursos.some(c => c.cursoId === IDcurso)
        );

        const divImgInfo = document.createElement("div");
        divImgInfo.classList.add("divImgInfo");
        divImgInfo.style.backgroundImage = `url(${dataCurso.imagen})`;
        divImgInfo.style.backgroundSize = "cover";
        divImgInfo.style.backgroundPosition = "center";
        divImgInfo.style.backgroundRepeat = "no-repeat";

        divImgInfo.innerHTML = `
            <h1>${dataCurso.titulo}</h1>
            <div>
                <span class="spanInfo">${dataCurso.duracion}</span>
                <span class="spanInfo">${dataCurso.nivel}</span>
            </div>
            <p>${dataCurso.descripcion}</p>
            <div class="teacherInfo">
                <img src="${dataProfesor.fotoUrl}">
                <div>
                    <h3>Course Instructor</h3>
                    <p>${dataProfesor.nombres + " " + dataProfesor.apellidos}</p>
                </div>
            </div>
        `;

        const divInfoCourse = document.createElement("div")
        divInfoCourse.classList.add("divInfoCourse")

        let temasCurso = []
        dataCurso.temasClaves.forEach(t => {
            temasCurso.push(`<p>${t}</p>`)
        })

        let modulosCurso = ""
        dataCurso.modulos.forEach(m => {
            modulosCurso += `
                <div class="modulo">
                    <span>modulo ${m.numero}</span>
                    <span>${m.titulo}</span>
                </div>
            `;
        })

        divInfoCourse.innerHTML = `
            <div class="cardsContainer">
                <div class="card">
                    <h2>Course Overview</h2>
                    <p>${dataCurso.descripcion}</p>
                </div>
                <div class="card">
                    <h2>Prerequisites</h2>
                    <p>${dataCurso.prerequisitos}</p>
                </div>
                <div class="card">
                    <h2>What You'll Learn</h2>
                    <div class="espace">
                        ${temasCurso.join("<hr>")} 
                    </div>  
                </div>
                <div class="card">
                    <h2>Course Structure</h2>
                    <div class="espace">
                        ${modulosCurso}  
                    </div>
                </div>
            </div>
            <div class="card">
                <div>
                    <h1>$ ${dataCurso.valor}</h1>
                    <p>One-time payment</p>
                </div>
                <div class="espace">
                    <p><i class="fa-solid fa-check"></i> Lifetime access</p>
                    <p><i class="fa-solid fa-check"></i> Certificate of completion</p>
                    <p><i class="fa-solid fa-check"></i> 30-day money-back guarantee</p>
                    <p><i class="fa-solid fa-check"></i> Direct instructor support</p>
                </div>
                <button>Start Learning</button>
            </div>
        `;

        pageContent.appendChild(divImgInfo);
        pageContent.appendChild(divInfoCourse);
    }

});

crearCursoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(crearCursoForm);

    const arrayTemas = formData.get("temas")
        .split(",")
        .map(tema => tema.trim());

    const modulos = document.querySelectorAll(".moduloCreated")
    const arrayModulos = []
    modulos.forEach((modulo,index) => {
        const titulo = modulo.querySelector("span").textContent;
        const contenido = modulo.querySelector("p").textContent;

        const moduloNuevo = {
            numero:(index + 1),
            titulo:titulo,
            contenido:contenido 
        }
        arrayModulos.push(moduloNuevo)
    });

    const IDcategoria = Number(formData.get("categoria"))
    const dataCategoria = cursosDisponibles.categorias.find(c => c.id === IDcategoria)
    const IDcurso = (IDcategoria * 100)+(dataCategoria.cursos.length + 1)

    const dataCurso = {
            id: IDcurso,
            titulo: formData.get("titulo"),
            descripcion: formData.get("descripcion"),
            imagen: formData.get("imagen"),
            duracion: Number(formData.get("duracion")) + " semanas",
            nivel: formData.get("nivel"),
            prerequisitos: [formData.get("prerequisitos")],
            valor: Number(formData.get("valor")),
            temasClaves: arrayTemas,
            modulos: arrayModulos
        }
    
    let cursosDisponiblesNuevo = cursosDisponibles
    cursosDisponiblesNuevo.categorias[IDcategoria-1].cursos.push(dataCurso)

    const codigoProfesor = formData.get("profesor")
    let profesoresNuevo = profesores
    profesoresNuevo
        .find(p => p.codigo === codigoProfesor)
        .cursos.push({categoriaId: IDcategoria, cursoId: IDcurso})
    
    
    localStorage.setItem("cursosDisponibles", JSON.stringify(cursosDisponiblesNuevo));
    localStorage.setItem("profesores", JSON.stringify(profesoresNuevo));
    window.location.reload();
});

