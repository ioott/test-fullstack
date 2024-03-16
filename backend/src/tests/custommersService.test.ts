import custommerModel from '../models/CustommersModel';
import * as custommerService from '../services/CustommersService';
import ServiceResponse, { StatusNames } from '../utils/ServiceResponse';
import { mockedData, mockedRequest } from './__mocks__/mockedData';

jest.mock('../models/CustommersModel');

describe('Custommer Service Tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('All Custommers', async () => {
        (custommerModel.allCustommers as jest.Mock).mockResolvedValue(mockedData.allCustommers.data);

        const response = await custommerService.allCustommers();

        expect(custommerModel.allCustommers).toHaveBeenCalledTimes(1);
        expect(response).toEqual(new ServiceResponse<object>(StatusNames.OK, mockedData.allCustommers.data));
    });

    test('Create Custommer', async () => {
        (custommerModel.createCustommer as jest.Mock).mockResolvedValue(mockedData.createCustommer.data);

        const response = await custommerService.createCustommer(mockedData.custommerToCreateOrUpdate);

        expect(custommerModel.createCustommer).toHaveBeenCalledWith(mockedData.custommerToCreateOrUpdate);
        expect(response).toEqual(new ServiceResponse<object>(StatusNames.CREATED, mockedData.createCustommer.data));
    });

    test('Update Custommer', async () => {
        (custommerModel.updateCustommer as jest.Mock).mockResolvedValue(mockedData.updateCustommer.data);

        const response = await custommerService.updateCustommer(Number(mockedRequest.params), mockedRequest.body);

        expect(custommerModel.updateCustommer).toHaveBeenCalledWith(Number(mockedRequest.params), mockedRequest.body);
        expect(response).toEqual(new ServiceResponse<object>(StatusNames.OK, mockedData.updateCustommer.data));
    });

    test('Find Custommer by Id', async () => {
        (custommerModel.findCustommerById as jest.Mock).mockResolvedValue(mockedData.findCustommerById.data);

        const response = await custommerService.findCustommerById(Number(mockedRequest.params));

        expect(custommerModel.findCustommerById).toHaveBeenCalledWith(Number(mockedRequest.params));
        expect(response).toEqual(new ServiceResponse<object>(StatusNames.OK, mockedData.findCustommerById.data));
    });

    test('Delete Custommer', async () => {
        (custommerModel.deleteCustommer as jest.Mock).mockResolvedValue(mockedData.deleteCustommer.data);

        const response = await custommerService.deleteCustommer(Number(mockedRequest.params));

        expect(custommerModel.deleteCustommer).toHaveBeenCalledWith(Number(mockedRequest.params));
        expect(response).toEqual(new ServiceResponse<object>(StatusNames.OK, mockedData.deleteCustommer.data));
    });

});
