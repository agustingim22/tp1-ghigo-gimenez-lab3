function comentarPublicacion(){

  let inputUsuario = document.getElementById("ingresarUsuario").value.trim();
  let inputComentario = document.getElementById("dejar-comentario").value.trim();

  if (inputUsuario === "" || inputComentario === "") {
    alert("Se debe completar ambos datos(Comentario y Nombre de Usuario)");
    return;
  }
  let comentarioFinal = inputUsuario.bold() + "   " + inputComentario;

  document.getElementById("nuevoComentario").innerHTML = comentarioFinal;
}

function eliminarComentario(){
    let borrarComentario = document.getElementById("nuevoComentario").innerHTML.trim();
    
    if(borrarComentario === ""){
      document.getElementById("nuevoComentario").innerHTML = "Se debe haber ingresado algun comentario y/o ingresar el usuario antes!";
      return;
    }
    document.getElementById("nuevoComentario").innerHTML = "¡Comentario Eliminado!";
}
function meGustaModificar(){  
    let actualizarMeGusta = parseInt(document.getElementById("span-megusta").innerHTML);
    actualizarMeGusta = actualizarMeGusta + 1; 
    document.getElementById("span-megusta").innerHTML = actualizarMeGusta;
    document.getElementById("boton-megusta").removeAttribute("onclick");
  }

  function seguirDejarDeSeguir() {
    let btn = document.getElementById("btn");

    if (btn.innerHTML === "Seguir") {
      btn.innerHTML = "Dejar de seguir";
      return;
    }
    
    btn.innerHTML = "Seguir";
  }
  