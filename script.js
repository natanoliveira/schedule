const paciente = document.getElementById("inPaciente")
const saidaFila = document.getElementById("listaPaciente")
const quantidadeFila = document.getElementById("qtdPaciente")
const saidaAtendimento = document.getElementById("listaAtendimento")
const quantidadeAtendimento = document.getElementById("qtdAtendimento")

var btnAdicionar = document.getElementById("btnAdicionar")
var btnUrgencia = document.getElementById("btnUrgencia")
var btnAtender = document.getElementById("btnAtender")

btnAdicionar.addEventListener('click', adicionarPaciente)
btnUrgencia.addEventListener('click', urgencia)
btnAtender.addEventListener('click', atenderPaciente)

var pacientes = []
var atendimento = []

function adicionarPaciente() {

    // var paciente = document.getElementById("inPaciente")
    // var saida = document.getElementById("listaPaciente")
    // var quantidade = document.getElementById("qtdPaciente")

    var nomePaciente = paciente.value

    if (nomePaciente == '') {
        alert('Informe o Nome do paciente')
        paciente.focus()
        return
    }

    pacientes.push(nomePaciente)

    var lista = ''

    for (var n = 0; n < pacientes.length; n++) {
        // lista += (n+1) +'. '+ pacientes[n]
        lista += '<li class="list-group-item d-flex justify-content-between lh-condensed">'
        lista += '    <div>'
        lista += '        <h6 class="my-0">' + (n + 1) + '. ' + pacientes[n] + '</h6>'
        lista += '    </div>'
        lista += '</li>'
    }

    quantidadeFila.textContent = pacientes.length
    saidaFila.innerHTML = lista

    paciente.value = ''
    paciente.focus()
}

function atenderPaciente() {

    if (pacientes.length == 0) {
        alert('Não há pacientes na lista de espera')
        paciente.focus()
        return
    }

    // remove o paciente do inicio da fila
    var atender = pacientes.shift()

    var item = ''

    atendimento.push(atender)

    item += '<li class="list-group-item d-flex justify-content-between lh-condensed">'
    item += '    <div>'
    item += '        <h6 class="my-0">' + atender + '</h6>'
    item += '    </div>'
    item += '</li>'

    saidaAtendimento.innerHTML = item

    var lista = ''

    for (n = 0; n < pacientes.length; n++) {
        lista += '<li class="list-group-item d-flex justify-content-between lh-condensed">'
        lista += '    <div>'
        lista += '        <h6 class="my-0">' + (n + 1) + '. ' + pacientes[n] + '</h6>'
        lista += '    </div>'
        lista += '</li>'
    }

    var vazio = ''

    vazio += '<li class="list-group-item d-flex justify-content-between lh-condensed">'
    vazio += '    <div>'
    vazio += '        <h6 class="my-0">Fila</h6>'
    vazio += '    </div>'
    vazio += '</li>'

    if (pacientes.length == 0) {
        saidaFila.innerHTML = vazio
    } else {
        saidaFila.innerHTML = lista
    }

    quantidadeFila.textContent = pacientes.length
    quantidadeAtendimento.textContent = atendimento.length
}

function urgencia() {

    var nomePaciente = paciente.value

    if (nomePaciente == '') {
        alert('Informe o Nome do paciente')
        paciente.focus()
        return
    }

    pacientes.unshift(nomePaciente)

    var lista = ''

    for (var n = 0; n < pacientes.length; n++) {
        lista += '<li class="list-group-item d-flex justify-content-between lh-condensed">'
        lista += '    <div>'
        lista += '        <h6 class="my-0">' + (n + 1) + '. ' + pacientes[n] + '</h6>'
        lista += '    </div>'
        lista += '</li>'
    }

    quantidadeFila.textContent = pacientes.length
    saidaFila.innerHTML = lista

    paciente.value = ''
    paciente.focus()

}