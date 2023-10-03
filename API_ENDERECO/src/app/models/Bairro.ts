import {model, Schema } from 'mongoose';

export const Bairro = model('Bairro', new Schema({
	nome: {
		type: String,
		required: true,
	},
}));