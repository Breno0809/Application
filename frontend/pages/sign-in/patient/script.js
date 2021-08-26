const inputSubmit = document.querySelector('input[type="submit"]')

inputSubmit.addEventListener('click', (event) => {
    const dataForm = document.querySelectorAll('input[class="inputData"]')

    // console.dir(event)

    dataForm.forEach(item => {
        const fieldValue = item.value,
            itemAttributes = item.attributes,
            itemAttributesName = itemAttributes[0].localName
        console.log(fieldValue === '' ? 'Field empty' : fieldValue)
            // console.dir(item)
        console.log(itemAttributesName !== 'required' ?
            'Dados do responsável' : // Aqui terão os dados do Responsável
            'Dados do Paciente' // Aqui terão os dados do Paciente
        );
    })
})

document.querySelector("form")
    .addEventListener("submit", event => {
        console.log("Enviando formulário!");

        // Não envia o formulário
        event.preventDefault()
    })