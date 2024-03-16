export interface Custommer {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phoneNumber?: string | null;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
