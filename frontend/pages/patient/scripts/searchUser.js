async function getResponse() {
    try {
        const response = await fetch('http://localhost:8989/patient/')
        const users = await response.json()

        for (const user of users) {
            let userCity = user.address.city
            let userName = user.firstName

            // console.log(`${userName} more em ${userCity}`);
        }

        // console.table(data)
        show(users)
    } catch (err) {
        console.error(err);
    }
}

// getResponse()

function show(users) {
    let mainList = document.querySelector("main")
        // let newTable = document.createElement("table")

    let output = '<table><tr><th>Nome</th><th>Cidade</th></tr>'

    for (const user of users) {

        let userCity = user.address.city
        let userName = user.firstName

        output += `<tr><td>${userName}</td><td>${userCity}</td></tr>`

        // output += `<li>${userName} more em ${userCity}</li>`
    }

    output += `</table>`

    mainList.innerHTML = output
}