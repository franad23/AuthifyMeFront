import axios from '../libs/axios.libs'

export const registerMainUser = async (username:string, email:string, password:string) => {
  return axios.post("/register" , ({username, email, password}))
}