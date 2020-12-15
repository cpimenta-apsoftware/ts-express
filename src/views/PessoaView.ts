import Pessoa from '../models/Pessoa';

export default {
  render(pessoa: Pessoa) {
    return {
      id: pessoa.id,
      nome: pessoa.nome,
      email: pessoa.email      
    };
  },

  renderMany(pessoas: Pessoa[]){
    return pessoas.map(pessoa => this.render(pessoa));
  }
};