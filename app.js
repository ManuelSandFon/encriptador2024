//--Elementos--//
const textoEncriptador = document.querySelector(".presentacion__encriptador__texto");
const botonDeEncriptar = document.querySelector(".presentacion__encriptador__botones__encriptar");
const botonDeDesencriptar = document.querySelector(".presentacion__encriptador__botones__desencriptar");
const aviso = document.querySelector(".presentacion__encriptador__aviso__texto");
const textoResultado = document.querySelector(".presentacion__caja-de-resultado__area__evaluar");
const botonCopiar = document.querySelector(".presentacion__caja-de-resultado__dos__copiar");
const mensaje = document.querySelector(".presentacion__caja-de-resultado__columna__texto");
const imagen = document.querySelector(".presentacion__caja-de-resultado__columna__muñeco");
const botonLimpieza = document.querySelector(".limpieza");

//Variables//


///////////////////Caja de Texto////////////////////

textoEncriptador.addEventListener("click", e =>{
    e.preventDefault();
    textoEncriptador.placeholder = "";

    textoEncriptador.addEventListener("blur", function(){
        if (textoEncriptador === "");
        textoEncriptador.placeholder = "Ingrese el texto aquí";
    });
});

////////////////Boton de Encriptar//////////////////
botonDeEncriptar.addEventListener("click", e =>{
    e.preventDefault();
    let texto = textoEncriptador.value;
    let quitarAcentos = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "")
    
    if(texto == "") {
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "Debe escribir un texto"

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    
    else if(texto !== quitarAcentos){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "No debe contener caracteres especiales ni acentos"

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "No debe escribir mayúsculas"

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if (texto >= '0' && texto <= '9') {
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "No se permite números, solo letras"

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        textoResultado.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        mensaje.style.visibility = "hidden";
        imagen.style.visibility = "hidden";
        textoEncriptador.value = "";        
    }   
});

////////////////Boton de Desencriptar//////////////////
botonDeDesencriptar.addEventListener("click", e =>{
    e.preventDefault();
    let texto = textoEncriptador.value;
    let quitarAcentos = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "")
    
    if(texto == "") {
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "Debe escribir un texto"

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    
    else if(texto !== quitarAcentos){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "No debe contener caracteres especiales ni acentos"

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "No debe escribir mayúsculas"

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if (texto >= '0' && texto <= '9') {
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "No se permite números, solo letras"

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        textoResultado.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        mensaje.style.visibility = "hidden";
        imagen.style.visibility = "hidden";
        textoEncriptador.value = ""; 
    }   
});

////////////////Boton de Copiar//////////////////
botonCopiar.addEventListener("click", e =>{
    e.preventDefault();
    let copiar = textoResultado;
    copiar.select();
    document.execCommand("copy");    
    textoResultado.innerHTML = "";
});

///////////////Botón de Limpieza/////////////////
botonLimpieza.addEventListener("click", e =>{
    e.preventDefault();
    textoEncriptador.value = "";
    textoResultado.innerHTML = "";    
    botonCopiar.style.visibility = "hidden";
    mensaje.style.visibility = "inherit";
    imagen.style.visibility = "inherit";               
});



