import ServiceResponse, { StatusNames } from "./ServiceResponse";

export default function mapCustommerError(error: Error): ServiceResponse {
  const { message } = error;
  const response = new ServiceResponse<object>(
    StatusNames.INTERNAL_ERROR,
    'An internal error has occourred.',
  );

  if (message.includes('Unique constraint failed')) {
    response.changeStatusCode(StatusNames.CONFLICT);
    if (message.includes('custommers_email_key')) {
      response.changeMessage('Este e-mail já existe no cadastro');
    } else if (message.includes('custommers_cpf_key')) {
      response.changeMessage('Este CPF já existe no cadastro');
    }
  }

  return response;
}
