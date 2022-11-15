import { useContext } from "react";
import { UsersContext } from "../providers/UsersProvider";

export const useAllUsers = () => useContext(UsersContext)
