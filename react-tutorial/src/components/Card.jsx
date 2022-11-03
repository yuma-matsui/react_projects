import { memo } from "react"
import EditButton from "./EditButton"

const Card = memo(() => {
  return (
    <>
      <p>山田太郎</p>
      <EditButton />
    </>
  )
})

export default Card
