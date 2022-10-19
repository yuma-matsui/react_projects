import type { FC } from 'react'
import type { User } from '../types/user'

export const ListItem: FC<User> = ({ id, name, age, personColor, hobbies }: User) => {
  return (
    <p style={ { color: personColor }}>
      { id }：{ name }({ age }) { hobbies?.join('/') }
    </p>
  )
}
