import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { listBairro } from './app/useCases/Bairro/listBairro';
import { createBairro } from './app/useCases/Bairro/createBairro';
import { listEnderecos } from './app/useCases/Endereco/listEnderecos';
import { createEndereco } from './app/useCases/Endereco/createEndereco';
import { listCitiesByBairros } from './app/useCases/Bairro/listCitiesByBairros';
import { listCidades } from './app/useCases/Cidade/listCidades';
import { createCidade } from './app/useCases/Cidade/createCidade';
export const router = Router();

//configuração do multer
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback){
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback){
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	})

});

//List Bairros
router.get('/bairros', listBairro);

//Create Bairro
router.post('/bairros', createBairro);

//List Cidades
router.get('/cidades', listCidades);

//Create Cidade
router.post('/cidades', createCidade);

//Get Endereços por bairros
router.get('/bairros/:cidadeId/products', listCitiesByBairros);

//List Endereços
router.get('/enderecos', listEnderecos);

//Create Endereços
router.post('/enderecos', createEndereco);