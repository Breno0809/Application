/*
console.log({
    objetivo: ["validar login", "buscar dados da api"]
});*/

async function getResponse() {
    try {
        const response = await fetch('http://localhost:3000/patient/')
        const users = await response.json()

        for (const user of users) { 
            let userCity = user.address.city
            let userName = user.firstName

            console.log(`${userName} more em ${userCity}`);
        }

        // console.table(data)
        // show(users)
    } catch(err) {
        console.error(err);
    }
}

// getResponse()

function show(users) {
    let output = ''

    for (const user of users) {

        let userCity = user.address.city
        let userName = user.firstName

        output += `<li>${userName} more em ${userCity}</li>`
    }

    document.querySelector('label.name').innerHTML = output
}
