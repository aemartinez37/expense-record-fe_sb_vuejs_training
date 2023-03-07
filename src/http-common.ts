import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default apiClient
