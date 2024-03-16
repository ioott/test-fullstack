import { PrismaClient } from '@prisma/client';
import { mockedData, mockedRequest } from './__mocks__/mockedData';

const prismaMock = new PrismaClient();

jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    custommer: {
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      findUnique: jest.fn(),
      delete: jest.fn(),
    },
  })),
}));

describe('Custommer Model Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return all custommers from the database', async () => {
    (prismaMock.custommer.findMany as jest.Mock).mockResolvedValueOnce(mockedData.allCustommers.data);

    const result = await prismaMock.custommer.findMany();

    expect(result).toEqual(mockedData.allCustommers.data);
    expect(prismaMock.custommer.findMany).toHaveBeenCalled();
  });

  it('should create a custommer in the database', async () => {
    (prismaMock.custommer.create as jest.Mock).mockResolvedValueOnce(mockedData.createCustommer.data);

    const result = await prismaMock.custommer.create({data: {...mockedData.custommerToCreateOrUpdate}});

    expect(result).toEqual(mockedData.createCustommer.data);
    expect(prismaMock.custommer.create).toHaveBeenCalledWith({data: {...mockedData.custommerToCreateOrUpdate}});
  });

  it('should update a custommer in the database', async () => {
    (prismaMock.custommer.update as jest.Mock).mockResolvedValueOnce(mockedData.updateCustommer.data);

    const result = await prismaMock.custommer.update({
      where: { id: Number(mockedRequest.params.id) },
      data: { ...mockedData.custommerToCreateOrUpdate },
    });

    expect(result).toEqual(mockedData.updateCustommer.data);
    expect(prismaMock.custommer.update).toHaveBeenCalledWith({
      where: { id: Number(mockedRequest.params.id) },
      data: { ...mockedData.custommerToCreateOrUpdate },
    });
  });

  it('should find a custommer by id in the database', async () => {
    (prismaMock.custommer.findUnique as jest.Mock).mockResolvedValueOnce(mockedData.findCustommerById.data);

    const result = await prismaMock.custommer.findUnique({
      where: { id: mockedData.findCustommerById.data.id },
    });

    expect(result).toEqual(mockedData.findCustommerById.data);
    expect(prismaMock.custommer.findUnique).toHaveBeenCalledWith({
      where: { id: Number(mockedRequest.params.id) },
    });
  });

  it('should delete a custommer from the database', async () => {
    (prismaMock.custommer.delete as jest.Mock).mockResolvedValueOnce(mockedData.deleteCustommer.data);

    const result = await prismaMock.custommer.delete({
      where: { id: Number(mockedRequest.params.id) },
    });

    expect(result).toEqual(mockedData.deleteCustommer.data);
    expect(prismaMock.custommer.delete).toHaveBeenCalledWith({
      where: { id: Number(mockedRequest.params.id) },
    });
  });
});
