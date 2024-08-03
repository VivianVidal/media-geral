let nome;

function salvaNomeUsuario() {
    nome = document.getElementById('nomeAluno').value
    document.getElementById('notas').style.display = 'flex'
    document.getElementById('notas').style.flexDirection = 'column'
    document.getElementById('notas').style.gap = '10px'
    limpaValue('nomeAluno')
    escondeHTML('nome')
    document.getElementById('titulo-notas').innerHTML = `Olá ${nome}! Digite abaixo suas notas para realizar o cálculo.`
}

function calcularNota() {
    const nota1 = document.getElementById('nota1').value
    const nota2 = document.getElementById('nota2').value
    const nota3 = document.getElementById('nota3').value
    const nota4 = document.getElementById('nota4').value
    limpaValue('nota1')
    limpaValue('nota2')
    limpaValue('nota3')
    limpaValue('nota4')


    if (nota1 && nota2 && nota3 && nota4) {
        const resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
        if (resultado >= 7) {
            document.getElementById('resultado').innerHTML = `Parabéns ${nome}! Você foi aprovado(a), sua média foi de ${resultado}`
            document.getElementById('resultado').style.color='#74A57B'
        } else {
            document.getElementById('resultado').innerHTML = `Poxa que pena, ${nome}! Você foi reprovado(a), sua média foi de ${resultado}`
            document.getElementById('resultado').style.color='#f8fc02'
        }
        createButton()
        escondeHTML('notas')
    } else {
        document.getElementById('resultado').innerHTML = `Por favor insira valores para que seja efetuado o cálculo`
        document.getElementById('resultado').style.color='#ff00000'
    }

}

function createButton() {
    const buttonVoltar = document.createElement("button");
    const texto = document.createTextNode("Voltar");
    buttonVoltar.appendChild(texto);
    buttonVoltar.onclick = function () {
        voltar()
    };
    document.getElementById('botao').appendChild(buttonVoltar)
}

function voltar() {
    location.reload()
}

function escondeHTML(id) {
    document.getElementById(id).style.display = 'none'
}

function limpaValue(id) {
    document.getElementById(id).value = ''
}
