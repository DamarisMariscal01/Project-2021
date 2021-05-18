function boton(){
    let tomarUser = document.getElementById("username").value;
    let tomarPassword = document.getElementById("password").value;

    /*alert ('Tu e-mail es: ' + tomarUser);
    alert ('Tu contraseña es: ' + tomarPassword);*/

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    let seccion = document.getElementById("section");

    let tarjeta = document.createElement("div");

    let user = document.createElement("h1");
    let pwd = document.createElement("h1");

    seccion.append(tarjeta);
    tarjeta.append(user);
    tarjeta.append(pwd);

    user.innerText = "Tu user es: " + tomarUser;
    pwd.innerText = "Tu contraseña es: " + tomarPassword;
}