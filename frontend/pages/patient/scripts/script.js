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
    { id: '01', nomeCompleto: 'Breno Rodrigues', idade: '17', urgencia: 'Consulta' },
    { id: '02', nomeCompleto: 'João Silva', idade: '16', urgencia: 'Emergencia' },
    { id: '03', nomeCompleto: 'Carlos Oliveira', idade: '21', urgencia: 'Consulta' },
    { id: '04', nomeCompleto: 'Julio Cesar', idade: '14', urgencia: 'Consulta' },
    { id: '05', nomeCompleto: 'Maria Eduarda', idade: '19', urgencia: 'Emergencia' },
    { id: '06', nomeCompleto: 'João Pedro', idade: '25', urgencia: 'Urgente' },
    { id: '07', nomeCompleto: 'Matheus Henrique', idade: '05', urgencia: 'Urgente' },
    { id: '08', nomeCompleto: 'Thiago Oliveria', idade: '31', urgencia: 'Emergencia' },
    { id: '09', nomeCompleto: 'José Santos', idade: '45', urgencia: 'Consulta' },
    { id: '10', nomeCompleto: 'Walter Sousa', idade: '51', urgencia: 'Urgente' },
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

function addRow(users) {
    let tBody = document.querySelector("tbody")

    for (const user of users) {
        // <tr> TAG DEFINED
        let tr = document.createElement('tr')

        // <tr> TAG WAS INCLUDED IN <tBody>
        tBody.appendChild(tr)
        tr.classList.add('row')

        // console.log(user)
        tr.appendChild(document.createElement('td')).innerHTML = user.id
        tr.appendChild(document.createElement('td')).innerHTML = user.nomeCompleto
        tr.appendChild(document.createElement('td')).innerHTML = user.idade + ' anos'
        tr.appendChild(document.createElement('td')).innerHTML = user.urgencia

        /**
         *  for (let i = 0; i < tableHeadLength; i++) {
         *      let td = document.createelement('td)
         *      tr.appendChild(td)
         *      console.log(user);
         *      td.innerHTML = user
         *  }
         */
    }
    /*
    for (let i = 0; i < contents.length - 1; i++) {
        let tr = document.createElement('tr')

        tBody.appendChild(tr)

        for (let j = 0; j < (dataTableColums); j++) {
            let td = document.createElement('td')
            tr.appendChild(td)
            td.innerHTML = contents[j + 1]

        }

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