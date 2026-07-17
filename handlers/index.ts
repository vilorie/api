import type { Request, Response } from "express"
import { getData, newCustomer } from "../database/repository/repository";


export function searchData(req: Request, res: Response) {
    const data = getData()

    res.send(data)
}

export function dataCreate(req: Request, res: Response) {
    const body = req.body
    
    console.log(body)
}