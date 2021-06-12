import axios from 'axios'

const url = 'https://api.github.com/'

export const getUserData = username =>{
    return axios.get(url + `users/${username}`)
}