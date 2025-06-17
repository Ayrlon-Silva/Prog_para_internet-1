let botaoExibir = getById('botaoExibir');
botaoExibir.addEventListener('click', exibirConteudo);

function exibirConteudo() {
  let conteudoCampo = document.getElementById('caixaDeTexto').value.trim();

  if (conteudoCampo === "") {
    exibirErro('O campo não pode estar vazio', 'mensagemErro');
  } else {
    document.getElementById('conteudo').innerHTML = conteudoCampo;
  }
}