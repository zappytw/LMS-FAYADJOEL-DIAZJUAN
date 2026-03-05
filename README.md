# 🎓 LMS - Learning Management System

![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Status](https://img.shields.io/badge/status-academic_project-green)

Sistema web tipo **Learning Management System (LMS)** desarrollado con **HTML, CSS y JavaScript** que simula una plataforma educativa para gestionar cursos, docentes y navegación dentro de un panel académico.

Este proyecto fue desarrollado como práctica de **desarrollo frontend y organización de proyectos web**.

---

# 📑 Tabla de Contenido

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Arquitectura del Proyecto](#arquitectura-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Modelo de Datos](#modelo-de-datos)
- [Flujo del Sistema](#flujo-del-sistema)
- [Instalación](#instalación)
- [Uso](#uso)
- [Posibles Mejoras](#posibles-mejoras)
- [Autores](#autores)

---

# 📌 Descripción

Este proyecto implementa una **interfaz web para la gestión básica de un sistema educativo**.

El sistema permite visualizar información académica como:

- Cursos
- Docentes
- Panel de control del sistema
- Navegación entre módulos

Los datos utilizados en el sistema se almacenan en archivos JavaScript (`data.js`) que simulan una base de datos.

---

# 🚀 Características

- Sistema de login  
- Panel principal (Dashboard)  
- Gestión de cursos  
- Gestión de docentes  
- Navegación entre páginas  
- Uso de datos simulados en JavaScript  
- Arquitectura modular  
- Organización por carpetas

---

# 🛠 Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura del sistema |
| CSS3 | Diseño y estilos |
| JavaScript | Lógica de la aplicación |
| FontAwesome | Iconografía |
| Google Fonts | Tipografía |

---

# 🧠 Arquitectura del Proyecto

El sistema está dividido en tres capas principales:

## 1️⃣ Presentación

Archivos HTML encargados de la interfaz visual.

index.html
pages/cursos.html
pages/docentes.html
pages/dashBoard.html

---

## 2️⃣ Estilos

Los estilos están organizados en la carpeta:

Se dividen en:

- estilos globales
- variables de diseño
- estilos por página

---

## 3️⃣ Lógica del sistema

La lógica de la aplicación se encuentra en:


| Archivo | Función |
|---|---|
| index.js | lógica de login |
| cursos.js | manejo de cursos |
| docentes.js | manejo de docentes |
| dashBoard.js | lógica del dashboard |
| basicFunctions.js | funciones reutilizables |
| data.js | almacenamiento de datos |

---

# 📂 Estructura del Proyecto

LMS-FAYADJOEL-DIAZJUAN
│
├── index.html
├── README.md
│
├── css
│ ├── vars.css
│ ├── main.css
│ ├── index.css
│ └── pagesCSS
│ ├── cursos.css
│ ├── docentes.css
│ └── dashBoard.css
│
├── media
│ ├── images/
│ └── favicon_io/
│
├── pages
│ ├── cursos.html
│ ├── docentes.html
│ └── dashBoard.html
│
└── utils
├── data.js
├── index.js
├── cursos.js
├── docentes.js
├── dashBoard.js
└── basicFunctions.js

---

### Flujo del Sistema

Usuario
   │
   ▼
Login (index.html)
   │
   ▼
Dashboard
   │
   ├── Cursos
   │
   └── Docentes


---

# 📊 Modelo de Datos

El proyecto utiliza **datos simulados almacenados en `data.js`**.  
Esto permite representar información sin necesidad de base de datos real.

---

## 📘 Modelo de Datos: Cursos

| Campo | Tipo | Ejemplo | Descripción |
|---|---|---|---|
| id | number | 1 | identificador del curso |
| nombre | string | JavaScript | nombre del curso |
| docente | string | Carlos Gómez | docente encargado |
| duracion | string | 40 horas | duración del curso |
| categoria | string | Programación | área del curso |

### Ejemplo en código

```javascript
const cursos = [
  {
    id: 1,
    nombre: "JavaScript",
    docente: "Carlos Gómez",
    duracion: "40 horas",
    categoria: "Programación"
  }
]