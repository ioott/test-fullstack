import * as Joi from 'joi';
import validateCustommerMiddleware from '../middlewares/validateCustommer.middleware';
import mapCreationCustommerError from '../utils/mapCreationCustommersError';
import ServiceResponse, { StatusNames } from '../utils/ServiceResponse';
import { mockedData, mockedRequest } from './__mocks__/mockedData';
import {createCustommerSchema} from '../middlewares/schemas.joi';

describe('Joi Validation Tests', () => {
  it('should validate a valid custommer object', () => {
    const { error } = createCustommerSchema.validate(mockedData.custommerToCreateOrUpdate);
    expect(error).toBeFalsy();
  });

  it('should return an error for invalid custommer data', () => {
    const invalidData = {
      name: 'Jo',
      email: 'john.example.com',
      cpf: '123.456.789',
      phoneNumber: '123456',
      status: 'active',
    };

    const { error } = createCustommerSchema.validate(invalidData);
    expect(error).toBeTruthy();
  });
});

describe('mapCustommerError Tests', () => {
  it('should map a Prisma error to the appropriate ServiceResponse', () => {
    const prismaError = new Error('Unique constraint failed');
    prismaError.message = 'Unique constraint failed: custommers_email_key';

    const response = mapCreationCustommerError(prismaError);
    expect(response.statusCode).toBe(StatusNames.CONFLICT);
    expect((response.data as { message: string }).message).toBe('Este e-mail já existe no cadastro');
  });

  it('should return a default ServiceResponse for other errors', () => {
    const error = new Error('An internal error has occurred.');

    const response = mapCreationCustommerError(error);
    expect(response.statusCode).toBe(StatusNames.INTERNAL_ERROR);
    expect((response.data as { message: string }).message).toBe('An internal error has occourred.');
  });
});

describe('ServiceResponse Tests', () => {
  it('should create a ServiceResponse instance with the given status and data', () => {
    const response = new ServiceResponse(StatusNames.OK, mockedRequest.body);

    expect(response.statusCode).toBe(StatusNames.OK);
    expect(response.data).toEqual(mockedRequest.body);
  });

  it('should change the message of a ServiceResponse', () => {
    const response = new ServiceResponse(StatusNames.OK, 'New message');
    response.changeMessage('New message');

    expect(response.data).toEqual({message: 'New message'});
  });

  it('should change the status code of a ServiceResponse', () => {
    const response = new ServiceResponse(StatusNames.OK, mockedRequest.body);
    response.changeStatusCode(StatusNames.CREATED);

    expect(response.statusCode).toBe(StatusNames.CREATED);
  });
});
