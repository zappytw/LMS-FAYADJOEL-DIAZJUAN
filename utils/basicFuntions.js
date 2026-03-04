export function cargarTema(){
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        if (savedTheme === "dark"){
            document.body.classList.add("dark");
        }
    }else{
        localStorage.setItem("theme", "light");
    }
}

export function cambiarTema(){
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    const img = document.querySelector("#themeBtn img");

    img.src = isDark ? "../media/sun.png" : "../media/moon.png";
}