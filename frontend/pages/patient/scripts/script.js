const url = 'http://localhost:8989/patient/' // PATIENTS ROUTE
const main = document.querySelector("main"),
    submitSearchUser = document.querySelector('label[for="searchUser"]'),
    searchUser = document.querySelector('input[name="searchUser"]')

/**
 *      dataTable deve ser um requisição da tabela de pacientes
 * neste caso é apenas um arquivo pré definido para poder exemplificar o código
 */
const dataTable = [
    { idPatient: '01', nomeCompleto: 'Breno Rodrigues', dataNascimento: '17', urgencia: 'Consulta' },
    { idPatient: '02', nomeCompleto: 'João Silva', dataNascimento: '16', urgencia: 'Emergencia' },
    { idPatient: '03', nomeCompleto: 'Carlos Oliveira', dataNascimento: '21', urgencia: 'Consulta' },
    { idPatient: '04', nomeCompleto: 'Julio Cesar', dataNascimento: '14', urgencia: 'Consulta' },
    { idPatient: '05', nomeCompleto: 'Maria Eduarda', dataNascimento: '19', urgencia: 'Emergencia' },
    { idPatient: '06', nomeCompleto: 'João Pedro', dataNascimento: '25', urgencia: 'Urgente' },
    { idPatient: '07', nomeCompleto: 'Matheus Henrique', dataNascimento: '05', urgencia: 'Urgente' },
    { idPatient: '08', nomeCompleto: 'Thiago Oliveria', dataNascimento: '31', urgencia: 'Emergencia' },
    { idPatient: '09', nomeCompleto: 'José Santos', dataNascimento: '45', urgencia: 'Consulta' },
    { idPatient: '10', nomeCompleto: 'Walter Sousa', dataNascimento: '51', urgencia: 'Urgente' },
]

const getUser = async(url, nameParams) => {
    if (!nameParams) {
        // ALL PATIENTS
        try {
            const response = await fetch(`${url}all`)
            const users = await response.json()
            return users
        } catch (error) {
            console.error(error);
            return false
        }
    }
    try {
        // PATIENT BY NAME
        const response = await fetch(`${url}search?name=${nameParams}`)
        const users = await response.json()
        return users
    } catch (err) {
        console.error(err);
        return false
    }
}

const createNewTable = container => {
    const headerAsName = ['Código', 'Nome Completo', 'Data de Nascimento', 'Urgência']
    let table = document.createElement('table'),
        tHead = document.createElement('thead'),
        tBody = document.createElement('tbody'),
        tr = document.createElement('tr')

    // TABLE CREATED
    table.appendChild(tHead)
    table.appendChild(tBody)

    // ADDING TABLE HEADER
    tHead.appendChild(tr)
    for (let i = 0; i < headerAsName.length; i++) {
        let th = document.createElement('th')
        tr.appendChild(th)
        th.innerHTML = headerAsName[i]
    }

    container.appendChild(table)
}

const removePreviousRecords = () => {
    const lines = document.querySelector('table').rows

    for (i = lines.length - 1; i >= 1; i--) {
        // console.log(`Deletando o ${i}º registro`);
        document.querySelector("table").deleteRow(i)
    }
}

const calculateBirthday = date => {
    const today = new Date(),
        getBithday = new Date(date),
        dateDiff = Math.abs(today.getTime() - getBithday.getTime())

    return Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365))
}

const addRecords = users => {
    let tBody = document.querySelector('tbody')

    const usersAsObject = users

    for (const user of usersAsObject) {
        let tr = document.createElement('tr')

        tBody.appendChild(tr)
        tr.classList.add('row')

        const userAge = calculateBirthday(user.dataNascimento)

        tr.appendChild(document.createElement('td')).innerHTML = user.idPatient
        tr.appendChild(document.createElement('td')).innerHTML = user.nomeCompleto
        tr.appendChild(document.createElement('td')).innerHTML = `${userAge} anos`
        tr.appendChild(document.createElement('td')).innerHTML = user.urgencia
    }
}

/**
 *      The code below is to create a 
 * table and display all records as soon
 * the window is 'started'/'on load'.
 */
createNewTable(main)
window.addEventListener('load', async() => {
    try {
        const allUsers = await getUser(url)
        if (allUsers) {
            const allUsersAsObject = await allUsers.patients
            return addRecords(allUsersAsObject)
        }
        throw err = new Error(`Não foi possível efetuar a conexão com o servidor!`)
    } catch (err) {
        console.error(err)
    }
})

submitSearchUser.addEventListener('click', async event => {
    const searchUserAsName = searchUser.value,
        allUsers = await getUser(url),
        allUsersAsObject = allUsers.patients

    removePreviousRecords()

    try {
        if (allUsersAsObject) addRecords(allUsersAsObject)
        if (searchUserAsName == '') throw err = new Error(
            'Campo vázio. Digite um nome para resolver!'
        )
    } catch (err) {
        console.error(err);
        window.alert(err)
    }
})