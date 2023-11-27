console.log("se carga el codigo");
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Dom complemente cargado y procesado");
    const menuBtn = document.getElementById("menu");
    const nav = document.querySelector(".navmenu");

    menuBtn.addEventListener("click", (event) => {
        menuBtn.classList.toggle("salir");
        nav.classList.toggle("mostrar");
    });
});