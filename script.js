let id = 1
let contatos = []

class Contato{
    constructor({
        id,
        nome,
        telefone,
        email
    }) {
        this.id = id,
        this.nome = nome,
        this.telefone = telefone,
        this.email = email
    }
}

const abrirPainel = (mostrarPainel) => {
    const elementoPainel = document.getElementById("painel-de-dados")
    const elementoOverlay = document.getElementById("overlay")

    const elementoNome = document.getElementById("formulario-input--nome")
    elementoNome.value = ""

    const elementoTelefone = document.getElementById("formulario-input--telefone")
    elementoTelefone.value = ""

    const elementoEmail = document.getElementById("formulario-input--email")
    elementoEmail.value = ""

    if (mostrarPainel) {
        elementoPainel.style.display = "block"
        elementoPainel.style.pointerEvents = "all"
        elementoPainel.style.opacity = 1

        elementoOverlay.style.opacity = .5
        elementoOverlay.style.pointerEvents = "all"
    } else {
        elementoPainel.style.pointerEvents = "none"
        elementoPainel.style.opacity = 0
        elementoPainel.style.display = "none"

        elementoOverlay.style.opacity = 0
        elementoOverlay.style.pointerEvents = "none"
    }
}

const criarContato = () => {
    const elementoNome = document.getElementById("formulario-input--nome")
    const nome = elementoNome.value

    const elementoTelefone = document.getElementById("formulario-input--telefone")
    const telefone = elementoTelefone.value

    const elementoEmail = document.getElementById("formulario-input--email")
    const email = elementoEmail.value

 
    const novoContato = new Contato({
        id,
        nome,
        telefone,
        email
    })

    contatos.push(novoContato)

    const formularioBodyElemento = document.querySelector(".agenda-de-contatos--body")

    const rowTemplate = `
        <div id=${`contato-${novoContato.id}`} class="agenda-de-contatos--body__item-row">
            <div class="agenda-de-contatos--body__column">
                <label>${novoContato.nome}</label>
            </div>
            <div class="agenda-de-contatos--body__column">
                <label>${novoContato.telefone}</label>
            </div>
            <div class="agenda-de-contatos--body__column">
                <label>${novoContato.email}</label>
            </div>
            <div class="agenda-de-contatos--body__column agenda-de-contatos--body__column--flex">
                <div>
                    <button class="btn btn--outlined">Editar</button>
                </div>
                <div class="btn-delete">
                    <button class="btn btn--outlined" onclick='deletarContato(${novoContato.id})'>Deletar</button>
                </div>
            </div>          
        </div>
    `
    formularioBodyElemento.insertAdjacentHTML("afterbegin", rowTemplate)
    abrirPainel(false)

    id += 1
} 

const deletarContato = (contatoID) => {
    contatos = contatos.filter((c, index) => c.id !== contatoID)

    const contatoElemento = document.getElementById(`${`contato-${contatoID}`}`)
    contatoElemento.parentNode.removeChild(contatoElemento)
}
