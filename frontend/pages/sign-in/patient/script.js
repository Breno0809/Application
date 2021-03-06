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

const addClassToField = (element, ...className) => {
    for (const classProp of className) element.classList.add(classProp)
}
const removeClassToField = (element, ...className) => {
    for (const classProp of className) element.classList.remove(classProp)
}
const checkFieldTypeInElement = element => {
    return {
        'commonText': `"commonText" don't need to validation`,
        'date': () => { 'Validation for "date"' },
        'phone': () => { 'Validation for "phone"' },
        'email': () => { 'Validation for "email"' },
        'susCard': () => { 'Validation for "susCard"' },
        'rg': () => { 'Validation for "rg"' },
        'cpf': () => { 'Validation for "cpf"' },
        'number': () => { 'Validation for "number"' },
        'alphanumeric': () => { 'Validation for "alphanumeric"' },
        'zipcode': () => { 'Validation for "zipcode"' },
        'default': 'Mask not found'
    }[element ? element : 'default']
}

buttonSubmit.addEventListener('click', event => {
    const dataForm = document.querySelectorAll('input')
    dataForm.forEach(item => {
        const fieldValue = item.value,
            itemTypeId = item.getAttribute('data-type-id'),
            itemAttributeName = item.attributes[0].localName,
            isRequired = itemAttributeName === 'required' ? true : false,
            fieldIsEmpty = fieldValue === '' ? true : false

        itemTypeId === 2 ? (
            fieldIsEmpty ? (
                isRequired ? addClassToField(item, 'fieldEmpty') : undefined
            ) : removeClassToField(item, 'fieldEmpty')
        ) : (
            fieldIsEmpty ? (
                isRequired ? addClassToField(item, 'fieldEmpty') : undefined
            ) : removeClassToField(item, 'fieldEmpty')
        );
    })
})

allInputs.forEach(input => {
    const allAttributes = input.attributes
    const attributesNameAsArray = []
    const attributesValueAsArray = []

    for (let i = 0; i < allAttributes.length; i++) {
        attributesNameAsArray.push(allAttributes[i].nodeName)
        attributesValueAsArray.push(allAttributes[i].nodeValue)
    }
    // console.log(attributesNameAsArray.find(attr => attr === 'required') === undefined ?
    //     'n??o est?? aqui' :
    //     'ENCONTRADO'
    // )
    // console.log(input);

    input.addEventListener('focus', () => removeClassToField(input, 'fieldEmpty', 'fieldFilled'))

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
})

// N??o enviar formul??rio
document.querySelector("form")
    .addEventListener("submit", event => {
        console.log("Enviando formul??rio!");

        // N??o envia o formul??rio
        event.preventDefault()
    })