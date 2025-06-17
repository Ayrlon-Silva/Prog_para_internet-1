let botao_selecionados = getById('enviarBtn');

botao_selecionados.addEventListener('click', mostrarSelecionadas)

function mostrarSelecionadas(){
    let redesSociais = document.getElementsByName('redesSociais');

    let selecionadas = [];

    for(let i = 0; i < redesSociais.length; i++){
        if(redesSociais[i].checked){
            selecionadas.push(redesSociais[i].value);
        }
    }

    getById('redesSelecionadas').textContent = '';

    if(selecionadas.length === 0){
        exibirErro('Por favor selecione ao menos uma rede social.', 'mensagemErro')
    }
    else{
        getById('redesSelecionadas').textContent = 'Redes selecionadas : ' + selecionadas.join(', ');
    }

}