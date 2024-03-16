export interface CreateCustommer {
  name: string;
  email: string;
  cpf: string;
  phoneNumber?: string | null;
  status: boolean;
}