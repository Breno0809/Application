const url = 'http://localhost:8989/patients/'
const patientInfo = document.querySelector('aside.userInfo')
const nameSpace = document.querySelector('span.pName')
const oxygenField = document.querySelectorAll('span.oxygenField')

// const oxygenValue = new Array()
// oxygenField.forEach(field => {
//     const fieldValue = field.innerText
//     const fieldValueAsNumber = parseFloat(fieldValue.replace('SP O²: ', ''))
//     return oxygenValue.push(fieldValueAsNumber)
// })

const fieldNameAsArray = new Array(
    'Código', 'Nome', 'Idade', 'Cartão do SUS', 'RG', 'CPF', 'Telefone', 'Celular',
    'E-mail', 'responsável', 'E-mail do Responsável', 'Telefone do Responsável',
    'Celular do Responsável', 'Endereço', 'Número', 'Bairro', 'Cidade', 'CEP',
    'Comorbidade', 'Urgência')

const getUser = async(endpoint, idParams) => {
    try {
        const response = await fetch(`${endpoint}user/${idParams}`)
        const user = await response.json()
        return user
    } catch (error) {
        console.error(error)
        return false
    }
}

const calculateBirthday = date => {
    const today = new Date(),
        getBithday = new Date(date),
        dateDiff = Math.abs(today.getTime() - getBithday.getTime())

    return Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365))
}

const showPatientInfo = (data) => {
    const user = data
    nameSpace.innerHTML = `${user.nomeCompleto}`
    for (const key in user) {
        const keyAsName = key
        if (Object.hasOwnProperty.call(user, keyAsName)) {
            const value = user[keyAsName]
            if (keyAsName == 'createdAt' || keyAsName == 'updatedAt') continue
            else {
                if (value == '') {
                    patientInfo.innerHTML += `
                    <div class="userColumn">
                        <label>${keyAsName}</label>
                        <div class="dataBox">
                            <span class="empty">Campo não preenchido</span>
                        </div>
                    </div>`
                } else {
                    if (keyAsName == 'dataNascimento') {
                        const idade = calculateBirthday(value)
                        patientInfo.innerHTML += `
                        <div class="userColumn">
                            <label>${keyAsName}</label>
                            <div class="dataBox">
                                <span>${idade} anos</span>
                            </div>
                        </div>`
                    } else {
                        patientInfo.innerHTML += `
                        <div class="userColumn">
                            <label>${keyAsName}</label>
                            <div class="dataBox">
                                <span>${value}</span>
                            </div>
                        </div>`
                    }
                }
            }
        }
    }
}

window.addEventListener('load', async() => {
    const userIdInLocalStorage = localStorage.getItem('userId')
    const resp = await getUser(url, userIdInLocalStorage)
    const user = resp.dataUser
    document.title = user.nomeCompleto
    showPatientInfo(user, fieldNameAsArray)
})