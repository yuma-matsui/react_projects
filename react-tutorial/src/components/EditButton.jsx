import { memo } from "react"
import { useAdminFlag } from "../hooks/useAdminFlag"

const EditButton = memo(() => {
  const { isAdmin } = useAdminFlag()
  return (
    <button disabled={!isAdmin}>編集</button>
  )
})

export default EditButton
