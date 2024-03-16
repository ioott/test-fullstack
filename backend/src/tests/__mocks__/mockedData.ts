export const mockedData = {
  allCustommers: {
      statusCode: 200,
      data: [
          {
              id: 1,
              name: 'John Doe',
              email: 'john@example.com',
              cpf: '123.456.789-10',
              phoneNumber: '123-456-7890',
              status: true,
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              id: 2,
              name: 'Jane Doe',
              email: 'jane@example.com',
              cpf: '987.654.321-00',
              phoneNumber: null,
              status: true,
              createdAt: new Date(),
              updatedAt: new Date()
          }
      ]
  },
  createCustommer: {
      statusCode: 201,
      data: 'Cliente cadastrado com sucesso'
  },
  custommerToCreate:{
        name: 'Jane Doe',
        email: 'jane@example.com',
        cpf: '987.654.321-00',
        phoneNumber: '123-456-7890',
        status: true,
  },
  updateCustommer: {
      statusCode: 200,
      data: 'Cliente atualizado com sucesso'
  },
  findCustommerById: {
      statusCode: 200,
      data: {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          cpf: '123.456.789-10',
          phoneNumber: '123-456-7890',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
      }
  },
  deleteCustommer: {
      statusCode: 200,
      data: 'Cliente excluído com sucesso'
  }
};

export const mockedRequest = {
    params: { id: '1' },
    body: { name: 'Updated Customer' }
};