import { createContext, Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from "react";
import { usersAPI } from "../api";
import { User, UserProfile } from "../types";

type UsersContextType = {
  users: Array<User>;
  setUsers?: Dispatch<SetStateAction<User[]>>
}

export const UsersContext = createContext<UsersContextType>({} as UsersContextType)

type Props = {
  children: ReactNode;
}

export const UsersProvider: FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<Array<User>>([])

  const fetchUsers = async () => {
    const users = (await usersAPI.getAllUsers()).map((userProfile: UserProfile) => ({
      id: userProfile.id,
      name: userProfile.name,
      email: userProfile.email,
      phone: userProfile.phone
    }))
    setUsers(users)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <UsersContext.Provider value={{ users }}>
      { children }
    </UsersContext.Provider>
  )

}

