import { UserAddress } from "./UserAddress.interface"
import { UserFullname } from "./UserFullname.interface"

export interface User {
    id: number
    email: string
    username: string,
    password: string,
    name: UserFullname,
    address: UserAddress,
    phone: string
}