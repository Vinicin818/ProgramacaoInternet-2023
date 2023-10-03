import {model, Schema } from 'mongoose';

export const Endereco = model('Endereco', new Schema({
	nome: {
		type: String,
		required: true,
	},
	numero: {
		type: Number,
		required: true,
	},
	complemento: {
		type: String,
		required: true,
	},
	bairro: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Bairro',
	},cidade: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Cidade',
	},
}));