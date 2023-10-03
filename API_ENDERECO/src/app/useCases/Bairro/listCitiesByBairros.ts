import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

export async function listCitiesByBairros(req: Request, res: Response) {
	try {
		const {cidadeId} = req.params;
		const endereco = await Endereco.find().where('cidade').equals(cidadeId);
		res.json(endereco);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}

}