import axios from '../libs/axios.libs'

export const registerMainUser = async (username:string, email:string, password:string) => {
  return axios.post("/register" , ({username, email, password}))
}
export const loginMainUser = async (email:string, password:string) => {
  return axios.post("/login" , ({email, password}))
}

export const verifyTokenController = async () => {
  return axios.get("/")
}