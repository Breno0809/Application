const url = 'http://localhost:8989/patient/' // PATIENTS ROUTE
const main = document.querySelector("main"),
    tableHead = ['Código', 'Nome Completo', 'Idade', 'Urgência'],
    tableHeadLength = tableHead.length,
    urlUser = 'https://google.com.br'
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

const getUser = (url, nameParams) => {
    if (nameParams == null) {
        fetch(url + 'all')
            .then(response => {
                // console.log('Response', response)
                return response.json()
            })
            .then(users => {
                console.log('All users ->', users)
                return users
            })
            .catch(error => console.log(error))
    } else {
        fetch(url + `search?name=${nameParams}`)
            .then(response => {
                console.log('Response', response)
                return response.json()
            })
            .then(users => {
                console.log('User', users);
                if (users.patientExists) users
                else throw error = new Error('Usuário Não encontrado')
            })
            .catch(error => console.error(error))
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
    while (firstCHildInParent) {
        parent.removeChild(firstCHildInParent)
    }
}

const addRecords = users => {
    let tBody = document.querySelector('tbody')
    removeAllRecords(tBody)
    console.log(users);

    for (const user of users) {
        let tr = document.createElement('tr')

        tBody.appendChild(tr)
        tr.classList.add('row')

        tr.appendChild(document.createElement('td')).innerHTML = user.idPatient
        tr.appendChild(document.createElement('td')).innerHTML = user.nomeCompleto
        tr.appendChild(document.createElement('td')).innerHTML = user.dataNascimento + ' anos'
        tr.appendChild(document.createElement('td')).innerHTML = user.urgencia
    }
}

// Searching all users
getUser(url)
    // console.log(getUser(url, searchUser.value))

// Creating a table
createNewTable(main)

// Adding table row
addRecords(dataTable)

    }

    for (let i = 0; i < contents[0].length; i++) {
        let td = document.createElement('td')
        tr.appendChild(td)
        for (let j = 0; j < contents.length - 1; j++) {
            td.innerHTML = contents[i + 1]
            console.log(j + i);
        }
    } */
}

// Creating a table
createNewTable(main, tableHead)

// Adding table row
addRow(dataTable)