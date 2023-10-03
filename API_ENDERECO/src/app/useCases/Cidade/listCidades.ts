import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

export async function listCidades(req: Request, res: Response) {
	try {
		const cidades = await Cidade.find()
		res.json(cidades);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}

}