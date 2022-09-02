const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click',(evento) => {
    evento.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-list]')
    const valor = input.value
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="constant">${valor}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(botao())


    lista.appendChild(tarefa)

    input.value = ""

})

const botao = () =>{

    const botaoConclui = document.createElement('button')
    botaoConclui.innerHTML = 'conclui'
    botaoConclui.addEventListener('click',() =>{
        console.log("Fui clicado")
    })

    return botaoConclui

}


