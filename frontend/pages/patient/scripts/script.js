const main = document.querySelector("main")
const dataTable = [
    ['Id', 'Nome', 'Sobrenome', 'Idade', 'Urgência'],
    ['01', 'Breno', 'Rodrigues', '17', 'Consulta'],
    ['02', 'João', 'Silva', '16', 'Emergencia'],
    ['03', 'Carlos', 'Oliveira', '21', 'Urgente'],
    ['04', 'Julio', 'Cesar', '14', 'Consulta'],
    ['05', 'Maria', 'Eduarda', '19', 'Emergencia'],
    ['06', 'João', 'Pedro', '25', 'Urgente'],
]
const dataTableColums = dataTable[0].length

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
    for (let i = 0; i < contents[0].length; i++) {
        let th = document.createElement('th')
        tr.appendChild(th)
        th.innerHTML = contents[0][i]
    }

    container.appendChild(table)
}

function addRow(contents) {
    let tBody = document.querySelector("tbody")

    // ADDING TABLE HEADER
    for (let i = 0; i < contents.length - 1; i++) {
        let tr = document.createElement('tr')

        tBody.appendChild(tr)

        for (let j = 0; j < (dataTableColums); j++) {
            let td = document.createElement('td')
            tr.appendChild(td)
            td.innerHTML = contents[j + 1]

        }

    }

    // for (let i = 0; i < contents[0].length; i++) {
    //     let td = document.createElement('td')
    //     tr.appendChild(td)
    //     for (let j = 0; j < contents.length - 1; j++) {
    //         td.innerHTML = contents[i + 1]
    //         console.log(j + i);
    //     }
    // }
}

createNewTable(main, dataTable)

addRow(dataTable)