document.addEventListener('DOMContentLoaded', function(){
let botaoCalcular = getById('calcularTaxa');
botaoCalcular.addEventListener('click', calcular_taxa_engajamento)
})


function calcular_taxa_engajamento(){

    let Total_interacoes = getById('numeroInteracoes').value.trim();
    let Total_vizualizacoes = getById('numeroVizualizacoes').value.trim();

    if(Total_interacoes === '' || Total_vizualizacoes === '' || isNaN(Total_interacoes) || isNaN(Total_vizualizacoes)){
        exibirErro('Por Favor insira valores numéricos validos', 'mensagemErro')
        return
    }
    else{
        let resultado = (Total_interacoes / Total_vizualizacoes) * 100;

        getById('ResultadoPercentual').textContent = 'Taxa de Engajamento:' + resultado.toFixed(2) + '%'
        console.log(resultado)
    }
}