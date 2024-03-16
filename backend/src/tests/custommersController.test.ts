import { Request, Response } from 'express';
import * as controller from '../controllers/CustommersController';
import custommerService from '../services/CustommersService';
import { mockedData, mockedRequest } from './__mocks__/mockedData';
import { StatusNames } from '../utils/ServiceResponse';

jest.mock('../services/CustommersService');

describe('Custommer Controller Test', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            send: jest.fn()
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('All Customers', async () => {
        (custommerService.allCustommers as jest.Mock).mockResolvedValue(mockedData.allCustommers);
        await controller.allCustommers(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(StatusNames.OK);
        expect(res.json).toHaveBeenCalledWith(mockedData.allCustommers.data);
    });

    test('Create Customer', async () => {
        const mockRequest = { body: { name: 'New Customer' } };
        (custommerService.createCustommer as jest.Mock).mockResolvedValue(mockedData.createCustommer);
        req.body = mockRequest.body;
        await controller.createCustommer(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(StatusNames.CREATED);
        expect(res.json).toHaveBeenCalledWith(mockedData.createCustommer.data);
    });

    test('Update Customer', async () => {
        (custommerService.updateCustommer as jest.Mock).mockResolvedValue(mockedData.updateCustommer);
        req.params = mockedRequest.params;
        req.body = mockedRequest.body;
        await controller.updateCustommer(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(StatusNames.OK);
        expect(res.json).toHaveBeenCalledWith(mockedData.updateCustommer.data);
    });

    test('Find Customer By Id', async () => {
        (custommerService.findCustommerById as jest.Mock).mockResolvedValue(mockedData.findCustommerById);
        req.params = mockedRequest.params;
        await controller.findCustommerById(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(StatusNames.OK);
        expect(res.json).toHaveBeenCalledWith(mockedData.findCustommerById.data);
    });

    test('Delete Customer', async () => {
        (custommerService.deleteCustommer as jest.Mock).mockResolvedValue(mockedData.deleteCustommer);
        req.params = mockedRequest.params;
        await controller.deleteCustommer(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(StatusNames.OK);
        expect(res.json).toHaveBeenCalledWith(mockedData.deleteCustommer.data);
    });
});
