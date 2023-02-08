const btnSubmit = document.getElementById('btnSubmit');
const fieldName = document.getElementById('textName');
const fieldNota = document.getElementById('textNota');
const form = document.getElementById('formAtividade');
const statusMedia = document.getElementById('statusMedia')
let linhas = '';
let notas = [ ];
let somaNotas = 0;
const statusAprovado = '<span class="resultado aprovado">Aprovado</span>';
const statusReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota minima:'));

form.addEventListener('submit', function(e){
    e.preventDefault();

    AddTBody();

    notas.push(parseInt(fieldNota.value));
    somaNotas += parseInt(fieldNota.value);

    AddTFoot();
    ClearFields();
});

function AddTBody(){
    let line = '<tr>';
    line += `<td> ${fieldName.value}</td>`;
    line += `<td> ${fieldNota.value}</td>`;
    line += `<td> ${parseInt(fieldNota.value) >= notaMinima ? 'Aprovado' : 'Reprovado'}</td>`;
    line += `</tr>`;

    linhas += line;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function ClearFields(){
    fieldName.value = '';
    fieldNota.value = '';
}

function AddTFoot(){
    let media = somaNotas / notas.length;

    let mediaLine = '<tr>';
    mediaLine += `<td> Media </td>`;
    mediaLine += `<td> ${media}</td>`;
    mediaLine += `<td> ${media >= notaMinima ? statusAprovado : statusReprovado} </td>`;
    mediaLine += '</tr>';

    const footerTabela = document.querySelector('tfoot');
    footerTabela.innerHTML = mediaLine

}

