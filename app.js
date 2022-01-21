window.onload = principal

function principal(){
    document.getElementById("boton").addEventListener("click",genTabla)
}


function genTabla(){
    let filTabla = "<table>"
    let tabla = document.getElementById("tabla").value
    for (let i=1; i<=12; i++){
        filTabla = `${filTabla}<tr><td>${tabla} x ${i} = ${tabla*i}</td></tr>`
    }
    document.getElementById("salida").innerHTML=filTabla
}