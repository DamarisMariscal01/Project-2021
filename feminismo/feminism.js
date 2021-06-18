function pasoPag1(){
    document.getElementById("bienvenida").style.display="none"
    document.getElementById("pagLogin").style.display="block"
}

function irLogin(){
    document.getElementById("pagRegistro").style.display="none";
    document.getElementById("pagLogin").style.display="block";
}

function irRegistro(){
    document.getElementById("pagLogin").style.display="none";
    document.getElementById("pagRegistro").style.display="block";
}

//información para Login
let infoLogin = {
    user: "damarisAlive",
    contrasena: "damaris123"
}

//Inicio de sesión
function loginn(){
    let tomarUsername = document.getElementById("user").value;
    let tomarContrasena = document.getElementById("contrasena").value;

    if (tomarUsername==infoLogin.user && tomarContrasena==infoLogin.contrasena) {
        document.getElementById("pagLogin").style.display="none";
        document.getElementById("navegador-fijo").style.display="block";
        document.getElementById("pagInfo").style.display="block";
        //document.getElementById("inicio").style.display="block"
        alert("Es correcto, bienvenidx, " +  document.getElementById("nombre").value + " :)")
        
        
    } else {
        alert("Incorrecto, inténtalo de nuevo");
    }

    document.getElementById("nombre").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}


//información para entrar
let infoEntrar = {
    nombre: "Damaris" ,
    usuario: "damarisAlive",
    password: "damaris123"
}

//Registro
function registroo(){
    let tomarNombre = document.getElementById("nombre").value;
    let tomarUser = document.getElementById("username").value;
    let tomarPassword = document.getElementById("password").value;

    if (tomarUser==infoEntrar.usuario && tomarPassword==infoEntrar.password && tomarNombre==infoEntrar.nombre) {
        document.getElementById("pagRegistro").style.display="none";
        document.getElementById("navegador-fijo").style.display="block";
        document.getElementById("pagInfo").style.display="block";
        //document.getElementById("inicio").style.display="block"
        alert("Inicio de sesión correcto, bienvenidx, " +  document.getElementById("nombre").value) + " :)";
        
    } else {
        alert("Incorrecto, inténtalo de nuevo");
    }
    
    document.getElementById("nombre").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function pag1(){
    document.getElementById("definicion").style.display="block";
    document.getElementById("latinoamerica").style.display="none";
    document.getElementById("actualidad").style.display="none";
    document.getElementById("olas").style.display="none";
    document.getElementById("radical").style.display="none";
}

function pag2(){
    document.getElementById("latinoamerica").style.display="block";
    document.getElementById("definicion").style.display="none";
    document.getElementById("actualidad").style.display="none";
    document.getElementById("olas").style.display="none";
    document.getElementById("radical").style.display="none";
}

function pag3(){
    document.getElementById("actualidad").style.display="block";
    document.getElementById("definicion").style.display="none";
    document.getElementById("latinoamerica").style.display="none";
    document.getElementById("olas").style.display="none";
    document.getElementById("radical").style.display="none";
}

function pag4(){
    document.getElementById("olas").style.display="block";
    document.getElementById("definicion").style.display="none";
    document.getElementById("latinoamerica").style.display="none";
    document.getElementById("latinoamerica").style.display="none";
    document.getElementById("actualidad").style.display="none";
    document.getElementById("radical").style.display="none";
}

function pag5(){
    document.getElementById("radical").style.display="block";
    document.getElementById("definicion").style.display="none";
    document.getElementById("latinoamerica").style.display="none";
    document.getElementById("latinoamerica").style.display="none";
    document.getElementById("actualidad").style.display="none";
    document.getElementById("olas").style.display="none";
}