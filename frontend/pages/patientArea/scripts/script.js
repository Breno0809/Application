const url = 'http://localhost:8989/patients/'
const getUser = async(endpoint, idParams) => {
    const response = await fetch(`${endpoint}/user/${idParams}`)
    const user = await response.json()
    return user
}

console.log(getUser(url, 1))