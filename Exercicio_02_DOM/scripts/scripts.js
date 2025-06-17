function getById(Id){
    return document.getElementById(Id);
}

function exibirErro(mensagem, idElemento) {
  let elementoErro = getById(idElemento);
  
  if (elementoErro) {
    elementoErro.textContent = mensagem;
    elementoErro.classList.remove('oculto');

    setTimeout(function() {
      elementoErro.classList.add('oculto');
    }, 3000);
  }
}