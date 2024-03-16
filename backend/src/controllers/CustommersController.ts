import { Request, Response } from 'express';
import custommerService from '../services/CustommersService';
import ServiceResponse from '../utils/ServiceResponse';

export const homePage = (req: Request, res: Response) => {
    res.send('Bem-vindo à página principal!');
};

export async function allCustommers(req: Request, res: Response) {
    const { statusCode, data }: ServiceResponse<object> = await custommerService
    .allCustommers()
    return res.status(statusCode).json(data)
}

export async function createCustommer(req: Request, res: Response) {
    const { statusCode, data }: ServiceResponse = await custommerService
    .createCustommer(req.body);
    return res.status(statusCode).json(data);
}

export async function updateCustommer(req: Request, res: Response) {
    const { statusCode, data }: ServiceResponse = await custommerService
    .updateCustommer(Number(req.params.id), req.body);
    return res.status(statusCode).json(data);
}

export async function findCustommerById(req: Request, res: Response) {
    const { statusCode, data }: ServiceResponse = await custommerService
    .findCustommerById(Number(req.params.id));
    return res.status(statusCode).json(data);
}

export async function deleteCustommer(req: Request, res: Response) {
        const { statusCode, data }: ServiceResponse = await custommerService
        .deleteCustommer(Number(req.params.id));
        return res.status(statusCode).json(data);
}