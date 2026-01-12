import { NextFunction, Request, Response } from 'express';
import { IResponse } from '../controllers/book.controller';
import jwt, { Secret } from "jsonwebtoken"


export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const cookie = req.headers.cookie;
        const token = cookie?.split("=")[1]

        if (!token) {
            return res.status(401).json({ success: false, message: "Access denied", data: null } as IResponse)
        }

        const data = jwt.verify(token, process.env.JWT_SECRET as Secret) as { id: string, role: string }
        req.id = data.id;
        req.role = data.role
        next()

    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message, data: null })
    }

}