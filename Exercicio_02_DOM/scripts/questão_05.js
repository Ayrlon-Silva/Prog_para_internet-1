let selectImagem = getById('selectImagem');

selectImagem.addEventListener('change', function(){
    let imgPath = selectImagem.value;

    if(imgPath){
        let img = document.createElement('img')
        img.src = imgPath
        img.id = 'imagemEscolhida'
        
        getById('resultado').innerHTML = '';
        getById('resultado').appendChild(img);
    }
    else{
        exibirErro('Por favor Escolha uma imagem primeiro', 'mensagemErro')
    }
})