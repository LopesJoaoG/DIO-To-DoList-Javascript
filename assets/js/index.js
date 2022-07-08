const tasks = document.querySelector("#tasks");
const caixaTexto = document.querySelector("#caixaTexto");
const botaoAdicionar = document.querySelector("#botaoAdicionar");

botaoAdicionar.addEventListener('click', function(){
    const textoTarefa = caixaTexto.value;
    caixaTexto.value = '';

    tasks.appendChild(adicionaTarefa(textoTarefa));

    caixaTexto.focus();
})

function adicionaTarefa(textoTarefa){
    const elementoLi = document.createElement('li');
    const elementoCheckBox = document.createElement('input')
    const elementoSpan = document.createElement('span');

    elementoCheckBox.setAttribute('type', 'checkbox');
    elementoSpan.textContent = textoTarefa;

    elementoLi.setAttribute('class', 'task-item');
    elementoLi.appendChild(elementoCheckBox);
    elementoLi.appendChild(elementoSpan);

    return elementoLi;
}