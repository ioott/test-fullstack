import { PrismaClient } from "@prisma/client";
import { Custommer } from "../interfaces/Custommer";
import { CreateCustommer } from "../interfaces/CreateCustommer";

const model = new PrismaClient().custommer;

async function allCustommers(): Promise<Custommer[]> {
  const custommers = await model.findMany();
  return custommers;
}

async function createCustommer(data: CreateCustommer): Promise<Custommer> {
  const custommer = await model.create({
    data: {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      phoneNumber: data.phoneNumber,
      status: data.status,
    },
  });
  return custommer;
}

async function updateCustommer(id: number, data: Partial<Custommer>): Promise<Custommer> {
  const custommer = await model.update({
    data: {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      phoneNumber: data.phoneNumber,
      status: data.status,
    },
    where: {id}
  });
  return custommer;
}

async function findCustommerById(id: number): Promise<Custommer> {
  const custommer = await model.findUnique({
    where: {id}
  });
  return custommer;
}

async function deleteCustommer(id: number) {
  const custommer = await model.delete({
    where: {id}
  });
}

export default {
  allCustommers,
  createCustommer,
  updateCustommer,
  findCustommerById,
  deleteCustommer
}
