import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

export async function createEndereco(req: Request, res: Response) {
	try {
		const { nome, numero, complemento, bairro, cidade } = req.body;
		const endereco = await Endereco.create({
			nome,
			numero: Number(numero),
			complemento,
			bairro,
			cidade,
		});
		res.status(201).json(endereco);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}