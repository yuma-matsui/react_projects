import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { User } from "../types";

type LocationState = {
  state: {
    user: User
  }
}

const UserDetail: FC = () => {
  const { id } = useParams()
  const userId = Number(id)

  const location = useLocation()
  const { state }: LocationState = location

  const navigate = useNavigate()

  const [user, setUser] = useState<User>()

  useEffect(() => {
    if (Number.isNaN(userId) || (state === null)) {
      navigate('/users')
    } else {
      setUser(state.user)
    }
  }, [userId, navigate, state])

  return (
    <>
      <h1>User個別ページです</h1>
      <div>
        <h2>名前: { user?.name }</h2>
        <p>If you'd like to contact me. Please Text below.</p>
        <p>{ user?.email }</p>
      </div>
    </>
  )
  
}

export default UserDetail
