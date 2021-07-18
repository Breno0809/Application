const main = document.querySelector("main"),
    tableHead = ['Código', 'Nome', 'Sobrenome', 'Idade', 'Urgência'],
    tableHeadLength = tableHead.length,
    urlUser = 'https://google.com.br'
    /**
     *      dataTable deve ser um requisição da tabela de pacientes
     * neste caso é apenas um arquivo pré definido para poder exemplificar o código
     */
const dataTable = [
    { id: '01', nome: 'Breno', sobrenome: 'Rodrigues', idade: '17', urgencia: 'Consulta' },
    { id: '02', nome: 'João', sobrenome: 'Silva', idade: '16', urgencia: 'Emergencia' },
    { id: '03', nome: 'Carlos', sobrenome: 'Oliveira', idade: '21', urgencia: 'Consulta' },
    { id: '04', nome: 'Julio', sobrenome: 'Cesar', idade: '14', urgencia: 'Consulta' },
    { id: '05', nome: 'Maria', sobrenome: 'Eduarda', idade: '19', urgencia: 'Emergencia' },
    { id: '06', nome: 'João', sobrenome: 'Pedro', idade: '25', urgencia: 'Urgente' },
    { id: '07', nome: 'Matheus', sobrenome: 'Henrique', idade: '05', urgencia: 'Urgente' },
    { id: '08', nome: 'Thiago', sobrenome: 'Oliveria', idade: '31', urgencia: 'Emergencia' },
    { id: '09', nome: 'José', sobrenome: 'Santos', idade: '45', urgencia: 'Consulta' },
    { id: '10', nome: 'Walter', sobrenome: 'Sousa', idade: '51', urgencia: 'Urgente' },
]

function createNewTable(container, contents) {
    let table = document.createElement('table')
    let tHead = document.createElement('thead')
    let tBody = document.createElement('tbody')
    let tr = document.createElement('tr')

    // TABLE CREATED
    table.appendChild(tHead)
    table.appendChild(tBody)

    // ADDING TABLE HEADER
    tHead.appendChild(tr)
    for (let i = 0; i < contents.length; i++) {
        let th = document.createElement('th')
        tr.appendChild(th)
        th.innerHTML = contents[i]
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
        tr.appendChild(document.createElement('td')).innerHTML = user.nome
        tr.appendChild(document.createElement('td')).innerHTML = user.sobrenome
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

createNewTable(main, tableHead)

addRow(dataTable)