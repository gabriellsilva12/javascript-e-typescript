import Aluno from '../models/Aluno';
class HomeController {
  async index(req,res) {
    const novoAluno = await Aluno.create({
      nome: 'Tiago',
      sobrenome: 'Sousa',
      email: 'Tiago@email.com',
      idade: 25,
      peso: 79.4,
      altura: 1.70
    })
    res.json(novoAluno)
  }
}

export default new HomeController();
