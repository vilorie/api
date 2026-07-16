import type { Request, Response } from "express"

export type HandlerFn = (req: Request, res: Response) => void;