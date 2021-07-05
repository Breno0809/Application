const fields = document.querySelectorAll("[required]")

function validityField(field) {
    // lógica para verificação de erros
    function verifyErrors() {
        let foundError = false

        for (let error in field.validity) {
        
            // Procura por outro erro além de customError
            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }
        return foundError
    }

    function customMessage(typeError) {
        const messages = {
            email: {
                valueMissing: "Email é obrigatório!",
                typeMismatch: "Por favor, preencha um campo válido!"
            },
            password: {
                valueMissing: "Por favor, preencha este campo!"
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error")

        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ''
        }
    }

    return function () {
        
        const error = verifyErrors()

        if (error) {
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
        } else {
            field.style.borderColor = "green"
            setCustomMessage()
        }

    }

}

function customValidation(event) {
    const field = event.target
    const validation = validityField(field)

    validation()
}

for (field of fields) {
    field.addEventListener("invalid", event => {
        event.preventDefault()

        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}

/*
document.querySelector("form")
.addEventListener("submit", event => {
    console.log("Enviando formulário!");

    // Não envia o formulário
    event.preventDefault()
})
*/