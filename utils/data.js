const cursosDisponibles = {
  categorias: [
    {
      id: 1,
      nombre: "Programación",
      descripcion: "Cursos relacionados con desarrollo de software y tecnología.",
      cursos: [
        {
          id: 101,
          titulo: "Curso Completo de Python",
          descripcion: "Aprende Python desde cero creando proyectos prácticos y entendiendo los fundamentos del lenguaje más versátil del mercado.",
          imagen: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
          duracion: "8 semanas",
          nivel: "Principiante - Intermedio",
          prerequisitos: ["Conocimientos básicos de computación"],
          valor: 49.99,
          temasClaves: ["Variables", "Condicionales", "Funciones", "Listas", "POO"],
          modulos: [
            { numero: 1, titulo: "Introducción a Python", contenido: "Instalación y primeros pasos." },
            { numero: 2, titulo: "Variables y Datos", contenido: "Tipos de datos y operadores." },
            { numero: 3, titulo: "Estructuras de Control", contenido: "If, else y bucles." },
            { numero: 4, titulo: "Funciones", contenido: "Creación y uso de funciones." },
            { numero: 5, titulo: "Proyecto Final", contenido: "Aplicación práctica del curso." }
          ]
        },
        {
          id: 102,
          titulo: "JavaScript desde Cero",
          descripcion: "Domina JavaScript y aprende a crear páginas web dinámicas e interactivas con buenas prácticas modernas.",
          imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          duracion: "6 semanas",
          nivel: "Principiante",
          prerequisitos: ["HTML básico"],
          valor: 44.99,
          temasClaves: ["Variables", "DOM", "Eventos", "Funciones", "Arrays"],
          modulos: [
            { numero: 1, titulo: "Introducción a JS", contenido: "¿Qué es JavaScript?" },
            { numero: 2, titulo: "Variables y Tipos", contenido: "Declaraciones y tipos de datos." },
            { numero: 3, titulo: "Funciones", contenido: "Funciones tradicionales y flecha." },
            { numero: 4, titulo: "Manipulación del DOM", contenido: "Seleccionar y modificar elementos." },
            { numero: 5, titulo: "Proyecto Web", contenido: "Crear una página interactiva." }
          ]
        },
        {
          id: 103,
          titulo: "Desarrollo Backend con Node.js",
          descripcion: "Aprende a crear servidores, APIs REST y conectar bases de datos usando Node.js y Express.",
          imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
          duracion: "7 semanas",
          nivel: "Intermedio",
          prerequisitos: ["JavaScript básico"],
          valor: 59.99,
          temasClaves: ["Node", "Express", "APIs", "Middleware", "Bases de datos"],
          modulos: [
            { numero: 1, titulo: "Introducción a Node", contenido: "Entorno y configuración." },
            { numero: 2, titulo: "Express", contenido: "Creación de servidor." },
            { numero: 3, titulo: "Rutas y Middleware", contenido: "Estructura de API." },
            { numero: 4, titulo: "Base de Datos", contenido: "Conexión y consultas." },
            { numero: 5, titulo: "Proyecto API", contenido: "API REST completa." }
          ]
        }
      ]
    },
    {
      id: 2,
      nombre: "Ciencias",
      descripcion: "Cursos enfocados en el estudio científico.",
      cursos: [
        {
          id: 201,
          titulo: "Fundamentos de Física",
          descripcion: "Explora las bases de la física clásica comprendiendo movimiento, fuerzas y energía con ejemplos prácticos.",
          imagen: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
          duracion: "10 semanas",
          nivel: "Principiante",
          prerequisitos: ["Álgebra básica"],
          valor: 59.99,
          temasClaves: ["Movimiento", "Fuerza", "Energía", "Gravedad"],
          modulos: [
            { numero: 1, titulo: "Introducción", contenido: "Conceptos básicos." },
            { numero: 2, titulo: "Cinemática", contenido: "Estudio del movimiento." },
            { numero: 3, titulo: "Leyes de Newton", contenido: "Dinámica básica." },
            { numero: 4, titulo: "Trabajo y Energía", contenido: "Conceptos energéticos." },
            { numero: 5, titulo: "Proyecto Final", contenido: "Resolución de problemas." }
          ]
        },
        {
          id: 202,
          titulo: "Química General",
          descripcion: "Comprende los principios fundamentales de la química y las reacciones que explican el mundo que nos rodea.",
          imagen: "https://amautas.com/wp-content/uploads/2025/05/post-que-es-la-quimica-organica.jpg",
          duracion: "9 semanas",
          nivel: "Principiante",
          prerequisitos: ["Matemáticas básicas"],
          valor: 54.99,
          temasClaves: ["Átomos", "Tabla periódica", "Enlaces", "Reacciones"],
          modulos: [
            { numero: 1, titulo: "Materia y Energía", contenido: "Conceptos iniciales." },
            { numero: 2, titulo: "Estructura Atómica", contenido: "Partículas subatómicas." },
            { numero: 3, titulo: "Tabla Periódica", contenido: "Propiedades periódicas." },
            { numero: 4, titulo: "Enlaces Químicos", contenido: "Tipos de enlaces." },
            { numero: 5, titulo: "Reacciones", contenido: "Balanceo químico." }
          ]
        },
        {
          id: 203,
          titulo: "Biología Básica",
          descripcion: "Descubre cómo funciona la vida desde la célula hasta los ecosistemas en este curso introductorio.",
          imagen: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe",
          duracion: "8 semanas",
          nivel: "Principiante",
          prerequisitos: ["Interés por la ciencia"],
          valor: 49.99,
          temasClaves: ["Células", "ADN", "Evolución", "Ecosistemas"],
          modulos: [
            { numero: 1, titulo: "La Célula", contenido: "Unidad básica de la vida." },
            { numero: 2, titulo: "Genética", contenido: "ADN y herencia." },
            { numero: 3, titulo: "Evolución", contenido: "Selección natural." },
            { numero: 4, titulo: "Sistemas del Cuerpo", contenido: "Órganos y funciones." },
            { numero: 5, titulo: "Ecosistemas", contenido: "Relaciones ecológicas." }
          ]
        }
      ]
    },
    {
      id: 3,
      nombre: "Arte",
      descripcion: "Cursos enfocados en creatividad y expresión artística.",
      cursos: [
        {
          id: 301,
          titulo: "Dibujo para Principiantes",
          descripcion: "Aprende técnicas esenciales de dibujo y desarrolla tu habilidad artística paso a paso.",
          imagen: "https://videocursos.co/wp-content/uploads/2022/07/curso-dibujo.webp",
          duracion: "6 semanas",
          nivel: "Principiante",
          prerequisitos: ["Ninguno"],
          valor: 39.99,
          temasClaves: ["Proporción", "Sombreado", "Perspectiva"],
          modulos: [
            { numero: 1, titulo: "Materiales", contenido: "Herramientas básicas." },
            { numero: 2, titulo: "Líneas y Formas", contenido: "Dibujo estructural." },
            { numero: 3, titulo: "Perspectiva", contenido: "Profundidad." },
            { numero: 4, titulo: "Sombreado", contenido: "Luces y sombras." },
            { numero: 5, titulo: "Proyecto Final", contenido: "Ilustración completa." }
          ]
        },
        {
          id: 302,
          titulo: "Pintura Acrílica",
          descripcion: "Descubre técnicas modernas de pintura acrílica y crea composiciones llenas de color.",
          imagen: "https://www.tallersalamandra.com/wp-content/uploads/2022/06/anna-kolosyuk-D5nh6mCW52c-unsplash.jpg",
          duracion: "7 semanas",
          nivel: "Intermedio",
          prerequisitos: ["Dibujo básico"],
          valor: 45.99,
          temasClaves: ["Color", "Texturas", "Composición"],
          modulos: [
            { numero: 1, titulo: "Teoría del Color", contenido: "Colores primarios." },
            { numero: 2, titulo: "Técnicas Básicas", contenido: "Aplicación de pintura." },
            { numero: 3, titulo: "Texturas", contenido: "Efectos visuales." },
            { numero: 4, titulo: "Composición", contenido: "Equilibrio visual." },
            { numero: 5, titulo: "Obra Final", contenido: "Creación artística." }
          ]
        },
        {
          id: 303,
          titulo: "Fotografía Digital",
          descripcion: "Aprende a capturar imágenes impactantes dominando luz, composición y edición básica.",
          imagen: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
          duracion: "5 semanas",
          nivel: "Principiante",
          prerequisitos: ["Cámara digital"],
          valor: 42.99,
          temasClaves: ["Exposición", "Iluminación", "Composición"],
          modulos: [
            { numero: 1, titulo: "Fundamentos", contenido: "Uso de la cámara." },
            { numero: 2, titulo: "Iluminación", contenido: "Tipos de luz." },
            { numero: 3, titulo: "Composición", contenido: "Regla de tercios." },
            { numero: 4, titulo: "Edición Básica", contenido: "Ajustes digitales." },
            { numero: 5, titulo: "Proyecto Fotográfico", contenido: "Serie de fotos." }
          ]
        }
      ]
    },
    {
      id: 4,
      nombre: "Negocios",
      descripcion: "Cursos enfocados en emprendimiento y gestión empresarial.",
      cursos: [
        {
          id: 401,
          titulo: "Emprendimiento desde Cero",
          descripcion: "Aprende a convertir una idea en un negocio rentable con estrategias claras y prácticas.",
          imagen: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
          duracion: "8 semanas",
          nivel: "Principiante",
          prerequisitos: ["Ninguno"],
          valor: 59.99,
          temasClaves: ["Modelo de negocio", "Validación", "Marketing"],
          modulos: [
            { numero: 1, titulo: "Idea de Negocio", contenido: "Cómo generar ideas." },
            { numero: 2, titulo: "Validación", contenido: "Estudio de mercado." },
            { numero: 3, titulo: "Modelo Canvas", contenido: "Estructura empresarial." },
            { numero: 4, titulo: "Marketing", contenido: "Promoción digital." },
            { numero: 5, titulo: "Lanzamiento", contenido: "Salida al mercado." }
          ]
        },
        {
          id: 402,
          titulo: "Marketing Digital",
          descripcion: "Descubre estrategias modernas para posicionar marcas y vender productos en internet.",
          imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
          duracion: "6 semanas",
          nivel: "Intermedio",
          prerequisitos: ["Uso básico de redes sociales"],
          valor: 49.99,
          temasClaves: ["SEO", "Publicidad", "Redes Sociales"],
          modulos: [
            { numero: 1, titulo: "Fundamentos", contenido: "Conceptos básicos." },
            { numero: 2, titulo: "SEO", contenido: "Optimización web." },
            { numero: 3, titulo: "Publicidad", contenido: "Anuncios pagados." },
            { numero: 4, titulo: "Redes Sociales", contenido: "Estrategias sociales." },
            { numero: 5, titulo: "Campaña Final", contenido: "Estrategia completa." }
          ]
        },
        {
          id: 403,
          titulo: "Finanzas Personales",
          descripcion: "Aprende a administrar tu dinero, ahorrar e invertir con inteligencia financiera.",
          imagen: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
          duracion: "5 semanas",
          nivel: "Principiante",
          prerequisitos: ["Ninguno"],
          valor: 39.99,
          temasClaves: ["Ahorro", "Inversión", "Presupuesto"],
          modulos: [
            { numero: 1, titulo: "Ingresos y Gastos", contenido: "Control financiero." },
            { numero: 2, titulo: "Presupuesto", contenido: "Planificación mensual." },
            { numero: 3, titulo: "Ahorro", contenido: "Estrategias efectivas." },
            { numero: 4, titulo: "Inversión Básica", contenido: "Conceptos iniciales." },
            { numero: 5, titulo: "Plan Financiero", contenido: "Plan personal." }
          ]
        }
      ]
    }
  ]
};

const profesores = [
  {
    active: true,
    codigo: "PROF001",
    identificacion: "1023456789",
    nombres: "Laura",
    apellidos: "Gómez Martínez",
    email: "laura.gomez@lmsacademy.com",
    fotoUrl: "https://randomuser.me/api/portraits/women/45.jpg",
    areaAcademica: "Ciencias",
    cursos: [
      { categoriaId: 2, cursoId: 201 }
    ]
  },
  {
    active: true,
    codigo: "PROF002",
    identificacion: "1034567891",
    nombres: "Carlos",
    apellidos: "Ramírez Torres",
    email: "carlos.ramirez@lmsacademy.com",
    fotoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    areaAcademica: "Programación",
    cursos: [
      { categoriaId: 1, cursoId: 101 },
      { categoriaId: 1, cursoId: 102 }
    ]
  },
  {
    active: true,
    codigo: "PROF003",
    identificacion: "1045678912",
    nombres: "Mariana",
    apellidos: "López Herrera",
    email: "mariana.lopez@lmsacademy.com",
    fotoUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    areaAcademica: "Ciencias",
    cursos: [
      { categoriaId: 2, cursoId: 203 }
    ]
  },
  {
    active: true,
    codigo: "PROF004",
    identificacion: "1056789123",
    nombres: "Andrés",
    apellidos: "Castro Díaz",
    email: "andres.castro@lmsacademy.com",
    fotoUrl: "https://randomuser.me/api/portraits/men/41.jpg",
    areaAcademica: "Ciencias",
    cursos: [
      { categoriaId: 2, cursoId: 202 }
    ]
  },
  {
    active: true,
    codigo: "PROF005",
    identificacion: "1067891234",
    nombres: "Valentina",
    apellidos: "Morales Ríos",
    email: "valentina.morales@lmsacademy.com",
    fotoUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    areaAcademica: "Programación",
    cursos: [
      { categoriaId: 1, cursoId: 103 }
    ]
  },
  {
    active: true,
    codigo: "PROF006",
    identificacion: "1078912345",
    nombres: "Sebastián",
    apellidos: "Vargas Peña",
    email: "sebastian.vargas@lmsacademy.com",
    fotoUrl: "https://randomuser.me/api/portraits/men/55.jpg",
    areaAcademica: "Arte",
    cursos: [
      { categoriaId: 3, cursoId: 301 }
    ]
  },
  {
    active: true,
    codigo: "PROF007",
    identificacion: "1089123456",
    nombres: "Daniela",
    apellidos: "Ortega Ruiz",
    email: "daniela.ortega@lmsacademy.com",
    fotoUrl: "https://randomuser.me/api/portraits/women/27.jpg",
    areaAcademica: "Arte",
    cursos: [
      { categoriaId: 3, cursoId: 302 }
    ]
  },
  {
    active: true,
    codigo: "PROF008",
    identificacion: "1091234567",
    nombres: "Juan",
    apellidos: "Pérez Salazar",
    email: "juan.perez@lmsacademy.com",
    fotoUrl: "https://randomuser.me/api/portraits/men/18.jpg",
    areaAcademica: "Arte",
    cursos: [
      { categoriaId: 3, cursoId: 303 }
    ]
  },
  {
    active: true,
    codigo: "PROF009",
    identificacion: "1102345678",
    nombres: "Camila",
    apellidos: "Navarro Silva",
    email: "camila.navarro@lmsacademy.com",
    fotoUrl: "https://randomuser.me/api/portraits/women/33.jpg",
    areaAcademica: "Negocios",
    cursos: [
      { categoriaId: 4, cursoId: 401 }
    ]
  },
  {
    active: true,
    codigo: "PROF010",
    identificacion: "1113456789",
    nombres: "Miguel",
    apellidos: "Rojas Méndez",
    email: "miguel.rojas@lmsacademy.com",
    fotoUrl: "https://randomuser.me/api/portraits/men/60.jpg",
    areaAcademica: "Negocios",
    cursos: [
      { categoriaId: 4, cursoId: 402 },
      { categoriaId: 4, cursoId: 403 }
    ]
  }
];

export function inicializarCursosDisponibles(){
  const cursosDisponiblesExists = localStorage.getItem("cursosDisponibles");

  if(!cursosDisponiblesExists){
    console.log("No se encontraron datos previamente colocador usaremos los de por defecto")
    localStorage.setItem("cursosDisponibles", JSON.stringify(cursosDisponibles));
  }else{
    console.log("Datos encontrados exitosamente")
  }
}

export function inicializarProfesores(){
  const profesoresExists = localStorage.getItem("profesores");  

  if(!profesoresExists){
    console.log("No se encontraron datos previamente colocador usaremos los de por defecto")
    localStorage.setItem("profesores", JSON.stringify(profesores));
  }else{
    console.log("Datos encontrados exitosamente")
  }
}