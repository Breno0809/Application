const buttonSubmit = document.querySelector('button[type="submit"]')
const allInputs = document.querySelectorAll('input')

const inputDate = document.querySelector('input[type="date"]')
const getDateToday = () => {
    const date = new Date(),
        day = String(date.getDate()).padStart(2, '0'),
        month = String(date.getMonth() + 1).padStart(2, '0'),
        year = date.getFullYear()
    return `${year}-${month}-${day}`
}
inputDate.setAttribute('max', getDateToday())

const addClassToField = (element, className = 'empty-class') => { element.classList.add(className) }
const removeClassToField = (element, className = 'empty-class') => { element.classList.remove(className) }

buttonSubmit.addEventListener('click', event => {
    const dataForm = document.querySelectorAll('input')
    dataForm.forEach(item => {
        const fieldValue = item.value,
            itemTypeId = item.getAttribute('data-type-id'),
            itemAttributeName = item.attributes[0].localName,
            isRequired = itemAttributeName === 'required' ? true : false,
            fieldIsEmpty = fieldValue === '' ? true : false

        itemTypeId === 2 ? (fieldIsEmpty ? (
            isRequired ? addClassToField(item, 'fieldEmpty') : undefined
        ) : removeClassToField(item, 'fieldEmpty')) : (fieldIsEmpty ? (
            isRequired ? addClassToField(item, 'fieldEmpty') : undefined
        ) : removeClassToField(item, 'fieldEmpty'))
    })
})

allInputs.forEach(input => {
    const inputDataset = Number(input.dataset.typeId)

    const allAttributes = input.attributes
    const attributesNameAsArray = []

    for (let i = 0; i < allAttributes.length; i++) {
        attributesNameAsArray.push(allAttributes[i].nodeName)
    }
    // console.log(attributesNameAsArray.find(attr => attr === 'required') === undefined ?
    //     'não está aqui' :
    //     'ENCONTRADO'
    // )
    // console.log(input);

    input.addEventListener('blur', event => {
            const inputValue = input.value
            inputValue === '' ? (
                // Caso campo esteja vazio
                addClassToField(input, 'fieldEmpty'),
                removeClassToField(input, 'fieldFilled')
            ) : (
                // Caso campo seja preenchido
                addClassToField(input, 'fieldFilled'),
                removeClassToField(input, 'fieldEmpty')
            )
        })
        // if (inputDataset === 0) console.log('Dados do Paciente')
        // if (inputDataset === 1) console.log('Endereço do Paciente')
        // if (inputDataset === 2) console.log('Dados do Responsável')
})

// Não enviar formulário
document.querySelector("form")
    .addEventListener("submit", event => {
        console.log("Enviando formulário!");

        // Não envia o formulário
        event.preventDefault()
    })