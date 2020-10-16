class Contato{
    constructor({
        nome,
        telefone,
        email
    }) {
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
        nome,
        telefone,
        email
    })

    const formularioBodyElemento = document.querySelector(".agenda-de-contatos--body")

    const rowTemplate = `
        <div class="agenda-de-contatos--body__item-row">
            <div class="agenda-de-contatos--body__column">
                <label>${novoContato.nome}</label>
            </div>
            <div class="agenda-de-contatos--body__column">
                <label>${novoContato.telefone}</label>
            </div>
            <div class="agenda-de-contatos--body__column">
                <label>${novoContato.email}</label>
            </div>
        </div>
    `
    formularioBodyElemento.insertAdjacentHTML("afterbegin", rowTemplate)
    abrirPainel(false)
} 