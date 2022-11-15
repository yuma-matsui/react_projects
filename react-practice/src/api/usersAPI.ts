import axios from "axios"
import { UserProfile } from "../types"

const ENDPOINT_URL = 'https://jsonplaceholder.typicode.com/users'

const usersAPI = {
  async getAllUsers () {
    return (await axios.get<Array<UserProfile>>(ENDPOINT_URL)).data
  }
}

export default usersAPI
