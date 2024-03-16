import * as Joi from 'joi';

const cpfPattern = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
const phonePattern = /^\d{2}\d{8,9}$/;

const createCustommerSchema = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required(),
    cpf: Joi.string()
    .pattern(cpfPattern, 'CPF inválido')
    .required()
    .messages({
      'string.pattern.base': 'O CPF precisa estar no formato XXX.XXX.XXX-XX ou XXXXXXXXXXX',
      'string.empty': 'Informe o CPF',
    }),
    phone: Joi.string()
    .pattern(phonePattern, 'Telefone inválido')
    .messages({
        'string.pattern.base': 'O telefone deve ter entre 10 e 11 dígitos, apenas numéricos',
    }),
    status: Joi.boolean().required()
});;

export { createCustommerSchema }