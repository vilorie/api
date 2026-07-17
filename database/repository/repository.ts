import type { Customer } from "../../models"
import { DATABASE } from "../database"

export function getData(): Customer[] {
    return DATABASE
}

export function newCustomer(customer:Customer): boolean {
    DATABASE.push(customer)
    return false
}