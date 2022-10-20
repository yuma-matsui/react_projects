import { useState } from 'react'
import axios from 'axios'

export const useFetchUsers = () => {
  const [userList, setUserList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const onClickFetchUser = () => {
    setIsLoading(true)
    setIsError(false)

    axios
      .get('https://example.com/users')
      .then(res => {
        const users = res.data.map(user => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          age: user.age
        }))
        setUserList(users)
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
    }

  return {
    userList,
    isLoading,
    isError,
    onClickFetchUser
  }
}
