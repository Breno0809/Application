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
    let headerAsName = ['Código', 'Nome Completo', 'Data de Nascimento', 'Urgência']
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

const removeAllRecords = parent => {
    const firstCHildInParent = parent.firstChild
    while (firstCHildInParent) parent.removeChild(firstCHildInParent)
}

const calculateBirthday = date => {
    const today = new Date(),
        getBithday = new Date(date),
        dateDiff = Math.abs(today.getTime() - getBithday.getTime())

    return Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365))
}

const addRecords = users => {
    let tBody = document.querySelector('tbody')
        // console.log(users);
    const usersAsArray = users

    console.dir(usersAsArray);

    for (const user of usersAsArray) {
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

// Creating a table
createNewTable(main)

// const loadAllUsers = async() => {
//     const allUsers = await getUser(url)
//     const allUsersAsArray = new Array(allUsers)
// }

// window.onload(loadAllUsers())

submitSearchUser.addEventListener('click', async() => {
    const tBody = document.querySelector('tbody'),
        searchUserAsName = searchUser.value,
        allUsers = await getUser(url),
        allUsersAsArray = allUsers.patients

    // removeAllRecords(tBody)

    //console.log(typeof allUsers.patients, allUsers.patients);

    try {
        if (allUsersAsArray) addRecords(allUsersAsArray)
        if (searchUserAsName == '') {
            throw err = new Error('Campo vázio. Digite um nome para resolver!')
        } //else console.log(`Usuário ${searchUserAsName} não encontrado`)
    } catch (err) {
        console.error(err);
        window.alert('Por favor insira um nome.')
    }
})