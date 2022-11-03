import { useContext } from "react"
import { AdminFlagContext } from "../providers/AdminFlagProvider"

export const useAdminFlag = () => useContext(AdminFlagContext)
