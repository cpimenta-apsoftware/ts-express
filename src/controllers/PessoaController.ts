import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Pessoa from '../models/Pessoa';
import PessoaView from '../views/PessoaView'

export default {
  async create(requisicao: Request, resposta: Response){    
    const {
      nome,
      email,
      instagram,
      facebook,
      linkedin
    } = requisicao.body;
  
    const pessoasRepository = getRepository(Pessoa);

    const data = {
      nome,
      email,
      instagram,
      facebook,
      linkedin
    };    

    const pessoa = pessoasRepository.create(data);
  
    await pessoasRepository.save(pessoa);
  
    return resposta.status(201).json(pessoa);
  },

  async index(requisicao: Request, resposta: Response){
     const pessoasRepository = getRepository(Pessoa);
     const pessoas = await pessoasRepository.find();
     return resposta.json(PessoaView.renderMany(pessoas));    
  },

  async show(requisicao: Request, resposta: Response){
    const { id } = requisicao.params;

    const pessoasRepository = getRepository(Pessoa);

    const pessoa = await pessoasRepository.findOneOrFail(id);

    return resposta.json(PessoaView.render(pessoa));
  },
};