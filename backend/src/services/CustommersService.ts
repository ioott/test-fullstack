import ServiceResponse, { StatusNames } from '../utils/ServiceResponse';
import { Custommer } from '../interfaces/Custommer';
import custommerModel from '../models/CustommersModel';
import mapCustommerError from '../utils/mapCreationCustommersError';

export async function allCustommers(): Promise<ServiceResponse<object>> {
  try {
    const custommersList = await custommerModel.allCustommers();
    return new ServiceResponse<object>(StatusNames.OK, custommersList);
  } catch (error) {
    return mapCustommerError(error as Error)
  }
}

export async function createCustommer(data: Custommer): Promise<ServiceResponse> {
  try {
    const custommerToCreate = {...data};
    await custommerModel.createCustommer(custommerToCreate);
    return new ServiceResponse<object>(StatusNames.CREATED, 'Cliente cadastrado com sucesso');
  } catch (error) {
    return mapCustommerError(error as Error)
  }
}

export async function updateCustommer(id: number, data: Partial<Custommer>): Promise<ServiceResponse> {
  try {
    const custommerToUpdate = {...data};
    await custommerModel.updateCustommer(id, custommerToUpdate);
    return new ServiceResponse<object>(StatusNames.OK, 'Cliente atualizado com sucesso');
  } catch (error) {
    return mapCustommerError(error as Error)
  }
}

export async function findCustommerById(id: number): Promise<ServiceResponse> {
  try {
    const custommerFound = await custommerModel.findCustommerById(id);
    return new ServiceResponse<object>(StatusNames.OK, custommerFound);
  } catch (error) {
    return mapCustommerError(error as Error)
  }
}

export async function deleteCustommer(id: number) {
  try {
    await custommerModel.deleteCustommer(id);
    return new ServiceResponse<object>(StatusNames.OK, 'Cliente excluído com sucesso');
  } catch (error) {
    return mapCustommerError(error as Error)
  }
}

export default {
  allCustommers,
  createCustommer,
  updateCustommer,
  findCustommerById,
  deleteCustommer,
};
