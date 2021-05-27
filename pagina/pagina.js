let infoLogin = {
    usuario: "alive123",
    password: "aliveee"
}

function boton(){
    let tomarUser = document.getElementById("username").value;
    let tomarPassword = document.getElementById("password").value;

    if (tomarUser==infoLogin.usuario && tomarPassword==infoLogin.password) {
        console.log("bien")
        document.getElementById("registro").style.display="none";
        document.getElementById("materias").style.display="block";
        alert("Registro correcto, bienvenidx :)")
        
    } else {
        console.log("mal")
        alert("Incorrecto, inténtalo de nuevo")
    }

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
