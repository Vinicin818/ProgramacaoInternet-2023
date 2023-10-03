import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';

export async function createBairro(req: Request, res: Response) {
	try {
		const {icon, nome} = req.body;
		const bairro = await Bairro.create({nome});
		res.status(201).json(bairro);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}