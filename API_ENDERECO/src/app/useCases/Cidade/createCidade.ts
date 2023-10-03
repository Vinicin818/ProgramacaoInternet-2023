import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

export async function createCidade(req: Request, res: Response) {
	try {
		const {nome, estado} = req.body;
		const cidade = await Cidade.create({ nome, estado });
		res.status(201).json(cidade);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}