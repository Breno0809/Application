const url = 'http://localhost:8989/patients/' // PATIENTS ROUTE
const main = document.querySelector("main")
const searchUser = document.querySelector('input[name="searchUser"]')
const showAllPatients = document.querySelector('button#showEveryone')
const printTable = document.querySelector('button#printTable')
const submitSearchUser = document.querySelector('label[for="searchUser"]')

const getUser = async(endpoint, nameParams) => {
    if (!nameParams) {
        // ALL PATIENTS
        try {
            const response = await fetch(`${endpoint}all`)
            const users = await response.json()
            return users
        } catch (error) {
            console.error(error);
            return false
        }
    }
    try {
        // PATIENT BY NAME
        const response = await fetch(`${endpoint}search?name=${nameParams}`)
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
    const usersAsObject = users
    let tBody = document.querySelector('tbody')

    for (const user of usersAsObject) {
        let tr = document.createElement('tr')

        tBody.appendChild(tr)
        tr.classList.add('row')

        for (const prop in user) {
            if (Object.hasOwnProperty.call(user, prop)) {
                const element = user[prop];
                let td = document.createElement('td')
                td.classList.add('userLink')

                if (prop === 'dataNascimento') {
                    const userAge = calculateBirthday(element)
                    tr.appendChild(td)
                    td.innerHTML = `${userAge} anos`
                } else {
                    tr.appendChild(td)
                    td.innerHTML = element
                }
            }
        }
    }


    const tds = document.querySelectorAll('td.userLink')
    tds.forEach(td => td.addEventListener('click', event => {
        const clikedElement = event.path[1]
        const userId = clikedElement.querySelector('td.userLink')
        const userIdAsValue = userId.innerHTML
        const userIdAsRoute = localStorage.setItem('userId', userIdAsValue)
        window.open(`http://127.0.0.1:5500/frontend/pages/patientArea/index.html`)
    }))
}

const searchByAllUsers = async() => {
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
}

/**
 *      The code below is to create a 
 * table and display all records as soon
 * the window is 'started'/'on load'.
 */
createNewTable(main)
window.addEventListener('load', searchByAllUsers())

submitSearchUser.addEventListener('click', async() => {
    try {
        const searchUserValue = searchUser.value
        const allUsers = await getUser(url, searchUserValue)

        if (searchUserValue == "") {
            throw err = new Error('Campo vázio. Insira um nome primeiro!')
        }
        if (allUsers.patientExists === false) {
            throw err = new Error(`Paciente '${searchUserValue}' não encontrado!`)
        } else {
            removePreviousRecords()
            addRecords(allUsers)
        }
    } catch (err) {
        console.error(err);
        // window.alert(err)
    }
})

showAllPatients.addEventListener('click', async() => {
    try {
        const allUsers = await getUser(url)
        if (allUsers) {
            const allUsersAsObject = await allUsers.patients
            removePreviousRecords()
            searchUser.value = ''
            return addRecords(allUsersAsObject)
        }
        throw err = new Error(`Não foi possível efetuar a conexão com o servidor!`)
    } catch (err) {
        console.error(err)
    }
})