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
            descripcion: "Aprende Python desde cero creando proyectos prácticos.",
            imagen: "",
            duracion: "8 semanas",
            nivel: "Principiante - Intermedio",
            prerequisitos: [
              "Conocimientos básicos de computación"
            ],
            valor: 49.99,
            temasClaves: [
              "Variables",
              "Condicionales",
              "Funciones",
              "Listas",
              "POO"
            ],
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
            descripcion: "Domina JavaScript para desarrollo web.",
            imagen: "",
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
            descripcion: "Aprende a crear servidores y APIs.",
            imagen: "",
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
            descripcion: "Bases de la física clásica.",
            imagen: "",
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
            descripcion: "Principios fundamentales de la química.",
            imagen: "",
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
            descripcion: "Introducción al estudio de la vida.",
            imagen: "",
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
            descripcion: "Aprende técnicas básicas de dibujo.",
            imagen: "",
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
            descripcion: "Técnicas modernas con acrílicos.",
            imagen: "",
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
            descripcion: "Aprende a capturar imágenes profesionales.",
            imagen: "",
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
            descripcion: "Aprende a crear y lanzar tu negocio.",
            imagen: "",
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
            descripcion: "Estrategias modernas de marketing online.",
            imagen: "",
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
            descripcion: "Aprende a administrar tu dinero.",
            imagen: "",
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
      codigo: "PROF001",
      identificacion: "1023456789",
      nombres: "Laura",
      apellidos: "Gómez Martínez",
      email: "laura.gomez@lmsacademy.com",
      fotoUrl: "https://randomuser.me/api/portraits/women/45.jpg",
      areaAcademica: "Biología"
    },
    {
      codigo: "PROF002",
      identificacion: "1034567891",
      nombres: "Carlos",
      apellidos: "Ramírez Torres",
      email: "carlos.ramirez@lmsacademy.com",
      fotoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      areaAcademica: "Informática"
    },
    {
      codigo: "PROF003",
      identificacion: "1045678912",
      nombres: "Mariana",
      apellidos: "López Herrera",
      email: "mariana.lopez@lmsacademy.com",
      fotoUrl: "https://randomuser.me/api/portraits/women/12.jpg",
      areaAcademica: "Matemáticas"
    },
    {
      codigo: "PROF004",
      identificacion: "1056789123",
      nombres: "Andrés",
      apellidos: "Castro Díaz",
      email: "andres.castro@lmsacademy.com",
      fotoUrl: "https://randomuser.me/api/portraits/men/41.jpg",
      areaAcademica: "Física"
    },
    {
      codigo: "PROF005",
      identificacion: "1067891234",
      nombres: "Valentina",
      apellidos: "Morales Ríos",
      email: "valentina.morales@lmsacademy.com",
      fotoUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      areaAcademica: "Química"
    },
    {
      codigo: "PROF006",
      identificacion: "1078912345",
      nombres: "Sebastián",
      apellidos: "Vargas Peña",
      email: "sebastian.vargas@lmsacademy.com",
      fotoUrl: "https://randomuser.me/api/portraits/men/55.jpg",
      areaAcademica: "Historia"
    },
    {
      codigo: "PROF007",
      identificacion: "1089123456",
      nombres: "Daniela",
      apellidos: "Ortega Ruiz",
      email: "daniela.ortega@lmsacademy.com",
      fotoUrl: "https://randomuser.me/api/portraits/women/27.jpg",
      areaAcademica: "Lengua Castellana"
    },
    {
      codigo: "PROF008",
      identificacion: "1091234567",
      nombres: "Juan",
      apellidos: "Pérez Salazar",
      email: "juan.perez@lmsacademy.com",
      fotoUrl: "https://randomuser.me/api/portraits/men/18.jpg",
      areaAcademica: "Educación Física"
    },
    {
      codigo: "PROF009",
      identificacion: "1102345678",
      nombres: "Camila",
      apellidos: "Navarro Silva",
      email: "camila.navarro@lmsacademy.com",
      fotoUrl: "https://randomuser.me/api/portraits/women/33.jpg",
      areaAcademica: "Inglés"
    },
    {
      codigo: "PROF010",
      identificacion: "1113456789",
      nombres: "Miguel",
      apellidos: "Rojas Méndez",
      email: "miguel.rojas@lmsacademy.com",
      fotoUrl: "https://randomuser.me/api/portraits/men/60.jpg",
      areaAcademica: "Filosofía"
    }
];

localStorage.setItem("cursosDisponibles", JSON.stringify(cursosDisponibles));
localStorage.setItem("profesores", JSON.stringify(profesores));