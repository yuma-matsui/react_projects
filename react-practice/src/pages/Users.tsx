import { FC } from "react";

import { Link } from "react-router-dom";
import { useAllUsers } from "../hooks/useAllUsers";

const Users: FC = () => {
  const { users } = useAllUsers()

  return (
      <>
        <h1>User一覧ページです</h1>
        <ul>
          { users.map(user => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`} state={{ user }}>
                <div>
                  <p>{ user.name }({ user.email })</p>
                  <span>{ user.phone }</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
}

export default Users
