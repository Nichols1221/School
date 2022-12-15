import axios from 'axios'

const baseUrl = 'http://localhost:8080'


export const getUserByEmail = (email) => {
    const data = {}
    axios.get(baseUrl + `getUserByEmail/${email}`)
        .then((response) => {
            data = response.data
        })
        .catch((e) => {
          console.log(e)
        })
        console.log('here' + data)
        return data
    // return await axios.get(baseUrl + `getUserByEmail/${email}`)
    
}

export const login = async (user, email) => {

    return await axios.get(baseUrl + `/login`, user)
        .then((response) => {
            return response.data
        })
        .catch((e) => {
          console.log(e)
          return null
        })

    // return await axios.get(baseUrl + `getUserByEmail/${email}`)
    
}

