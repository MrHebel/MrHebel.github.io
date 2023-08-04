let menuVisible = false;
//ESTA COSA MUESTRA EL MENU
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //AQUI OCULTA EL MENU DESPUES DE SELECCIONAR ALGO
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// ANIMACION DE LAS HABILIDADES (LAS LINEAS SCROLL)
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("unop");
        habilidades[1].classList.add("dosp");
        habilidades[2].classList.add("tresp");
        habilidades[3].classList.add("cuatrop");
        habilidades[4].classList.add("cincop");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//DETECTAR EL SCROLL PARA QUE EMPIECE A ANIMAR LO DE ARRIBA
window.onscroll = function(){
    efectoHabilidades();
} 

//QUE LA MINIATURA DE LA PAW SE VUELVA A PONER DEL MISMO TAMAÑO AL FINAL
let paw = document.getElementById("paw");
paw.onended = function() {
    paw.poster = "img/portfolio/poster paw.png"
    paw.src = "img/portfolio/v2.mp4"
};