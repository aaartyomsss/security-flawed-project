import axios from 'axios'

export interface RegisterData {
  username: string
  password: string
  social_security_number: string
  first_name: string
  last_name: string
}

export const registerUser = (data: RegisterData) =>
  axios.post('auth/register/', data, { withCredentials: false })

export const login = (username: string, password: string) =>
  axios.post('auth/login/', { username, password }, { withCredentials: false })
