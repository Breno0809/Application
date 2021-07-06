const main = document.querySelector("main")
const dataTable = [
    ['Id', 'Nome', 'Sobrenome', 'Idade', 'Urgência'],
    ['01', 'Breno', 'Rodrigues', '17', 'Consulta'],
    ['02', 'A', 'Silva', '16', 'Emergencia'],
    ['03', 'B', 'Oliveira', '21', 'Urgente'],
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
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        tBody.appendChild(tr)
        tr.appendChild(td)
        console.log(i);
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