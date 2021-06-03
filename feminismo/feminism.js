function pasoPag1(){
    document.getElementById("bienvenida").style.display="none"
    document.getElementById("pagRegistro").style.display="block"
}

let infoLogin = {
    usuario: "damarisAlive",
    password: "damaris123"
}

function registroo(){
    let tomarUser = document.getElementById("username").value;
    let tomarPassword = document.getElementById("password").value;

    if (tomarUser==infoLogin.usuario && tomarPassword==infoLogin.password) {
        document.getElementById("pagRegistro").style.display="none";
        document.getElementById("navegador-fijo").style.display="block";
        //document.getElementById("inicio").style.display="block"
        alert("Registro correcto, bienvenidx :)")
        
    } else {
        alert("Incorrecto, inténtalo de nuevo")
    }

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}