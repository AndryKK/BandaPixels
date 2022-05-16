import { User } from "../types/User";
import { get } from "./api";
import { ENDPOINTS } from "./api.constants";

export const getUsers: () => Promise<User[]> = () => get(ENDPOINTS.users) 