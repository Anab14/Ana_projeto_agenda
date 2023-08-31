const form = document.getElementById('form-agenda');
const imgContato = '<img src="./images/contato.png" alt"ícone de pessoa" />';
const Contatos = [];
const telefone = [];
let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if (Contatos.includes(inputNomeContato.value)) {
        alert(`O número de:  ${inputNomeContato.value} já foi inserido`);
    } else {
        Contatos.push(inputNomeContato.value);
        telefone.push(parseInt(inputNumeroTelefone.value));
    
        let linha = '<tr>';
        linha += `<td>${imgContato}${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
