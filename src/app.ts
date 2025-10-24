import express from 'express';
import type { Express, NextFunction, Request, Response } from 'express';
import { errorHandler } from './utils/errorHandler';

const app: Express = express();
app.use(errorHandler);

app.get("/test", (_: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({ message: "Server working" });
    } catch (error) {
        next(error)
    }
})

export default app