import type { Request, Response, NextFunction } from "express";
import 'dotenv/config'

export interface AppError extends Error {
    status?: number;
}

export const errorHandler = (
    err: AppError,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    console.error(`[Error] ${err.message}`);

    const status = err.status || 500;
    const message =
        status === 500
            ? "Internal Server Error"
            : err.message || "Something went wrong";

    console.log(err.stack)
    
    res.status(status).json({
        success: false,
        message,
    });
};

// Helper function to create custom errors easily
export const createError = (status: number, message: string): AppError => {
    const err: AppError = new Error(message);
    err.status = status;
    throw err;
};
