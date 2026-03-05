import { inicializarCursosDisponibles, inicializarProfesores} from "./data.js";
import { cargarTema ,cambiarTema, modificarProfilePanel} from "./basicFuntions.js"

cargarTema()
modificarProfilePanel()

document.getElementById("themeBtn").addEventListener("click",cambiarTema)

//localStorage.clear();

inicializarCursosDisponibles();
inicializarProfesores()
let cursosDisponibles = JSON.parse(localStorage.getItem("cursosDisponibles"));
let profesores = JSON.parse(localStorage.getItem("profesores"));

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
                <span class="spanInfo time">${curso.duracion} semanas</span>
                <img src="${curso.imagen}">
                <div class="info">
                    <h2>${curso.titulo}</h2>
                    <p>${curso.descripcion}</p>
                </div>
                <div class="btns" data-id="${curso.id}"> 
                    <button class="btnEnrollNow">Enroll Now</button>
                    <div>
                        <button class="btnEdit"><i class="fa-solid fa-pen"></i></button>
                        <button class="btnRemove"><i class="fa-solid fa-xmark"></i></button>
                    </div>
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
    crearCursoForm.reset();
    document.getElementById("btnCrearCurso").textContent = "Crear";
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

function eliminarCurso(IDcurso){
    return {
        ...cursosDisponibles,
        categorias: cursosDisponibles.categorias.map(cat => ({
            ...cat,
            cursos: cat.cursos.filter(curso => curso.id !== IDcurso)
        }))
    };
}

function eliminarCursoAProfesor(codigoProfesor,IDcurso){
    return profesores.map( p => {
        if (p.codigo !== codigoProfesor) return p

        return {
            ...p,
            cursos: p.cursos.filter(c => c.cursoId !== IDcurso)
        }
    })
}

pageContent.addEventListener("click", function(event) {
    
    const btnContainer = event.target.closest(".btns");

    if (!btnContainer) return;

    const IDcurso = Number(btnContainer.dataset.id);

    const IDcategoria = Math.floor(IDcurso / Math.pow(10, Math.floor(Math.log10(IDcurso))));
        
    const dataCategoria = cursosDisponibles.categorias.find(categoria => categoria.id === IDcategoria);
    const dataCurso = dataCategoria.cursos.find(curso => curso.id === IDcurso);
    const dataProfesor = profesores.find(p =>
        p.cursos.some(c => c.cursoId === IDcurso)
    );

    if (event.target.closest(".btnEnrollNow")) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        pageContent.innerHTML = '<button id="backBtn"><--Back to courses</button>';
        document.getElementById("backBtn").addEventListener("click", showCursosDisponibles);

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

    if (event.target.closest(".btnEdit")) {
        document.getElementById("btnCrearCurso").textContent = "Edict";

        cursosDisponibles = eliminarCurso(IDcurso)
        localStorage.setItem(
            "cursosDisponibles",
            JSON.stringify(cursosDisponibles)
        );
        profesores = eliminarCursoAProfesor(dataProfesor.codigo,IDcurso)
        localStorage.setItem(
            "profesores",
            JSON.stringify(profesores)
        );

        console.log(cursosDisponibles)
        console.log(profesores)

        divCCF.classList.remove("invi")

        document.getElementById("titulo").value = dataCurso.titulo
        document.getElementById("descripcion").value = dataCurso.descripcion
        document.getElementById("temas").value = dataCurso.temasClaves.join(", ")
        document.getElementById("prerequisitos").value = dataCurso.prerequisitos.join(", ")

        dataCurso.modulos.forEach( m => {
            modulosContainer.innerHTML += `
                <div class="moduloCreated">
                    <span>Modulo ${m.titulo}</span>
                    <p>${m.contenido}</p>
                </div>
            `
        })
        
        document.getElementById("duracion").value = dataCurso.duracion
        document.getElementById("valor").value = dataCurso.valor
        document.getElementById("imagen").value = dataCurso.imagen
        document.getElementById("nivel").value = dataCurso.nivel
        document.getElementById("categoria").value = dataCategoria.id
        document.getElementById("profesor").value = dataProfesor.codigo
    }
    
    if (event.target.closest(".btnRemove")) {
        localStorage.setItem(
            "cursosDisponibles",
            JSON.stringify(eliminarCurso(IDcurso))
        );
        localStorage.setItem(
            "profesores",
            JSON.stringify(eliminarCursoAProfesor(dataProfesor.codigo,IDcurso))
        );
        window.location.reload();
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
            duracion: Number(formData.get("duracion")),
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