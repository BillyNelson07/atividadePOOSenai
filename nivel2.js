// Exercício 4 — Campos Privados Modernos
// Utilize a sintaxe de campos privados do JavaScript (prefixo #) para criar uma classe Cofre.
// O segredo (senha) e o conteúdo devem ser inacessíveis de fora da classe.
// Crie métodos públicos apenas para inserir ou retirar itens, exigindo a senha correta.

console.log(
  "Exercício 4___________________________________________________________________",
);

class Cofre {
  #senha;
  #conteudo = [];
  constructor(senhaCofre) {
    this.#senha = senhaCofre;
  }

  inserirItem(item, senha) {
    if (senha === this.#senha) {
      console.log("_____ADICIONAR_____");
      this.#conteudo.push(item);
      console.log(`Item ${item} foi guardado no cofre`);
    } else {
      console.log("Senha invalida");
    }
  }

  retirarItem(itemASerRemovido, senha) {
    if (senha === this.#senha) {
      const indiceDoItem = this.#conteudo.indexOf(itemASerRemovido);
      if (indiceDoItem != -1) {
        console.log("_____REMOVER_____");

        this.#conteudo.splice(indiceDoItem, 1);
        console.log(`Item ${itemASerRemovido} removido do cofre.`);
      } else {
        console.log("Item inexistente");
      }
    } else {
      console.log("Senha incorreta");
    }
  }

  verCofre(senha) {
    if (senha === this.#senha) {
      console.log("____CONTEÚDO_____");
      for (let cadaItem of this.#conteudo) {
        console.log(`${cadaItem} está no cofre.`);
      }
    } else {
      console.log("Não há itens no cofre");
    }
  }
}

const cofre = new Cofre("12345");

cofre.inserirItem("Dinheiro", "12345");
cofre.inserirItem("Arma", "12345");
cofre.inserirItem("Foto", "12345");
cofre.inserirItem("Moeda", "12345");
cofre.retirarItem("Foto", "12345");
cofre.verCofre("12345");

console.log(
  "___________________________________________________________________",
);

// Exercício 5 — Getters e Setters Inteligentes
// Crie uma classe Usuario com um campo privado para a idade.
// Use um setter para validar se a idade inserida é um número positivo e realista (ex: menor que 120).
// Use um getter para ler o valor. Tente atribuir valores inválidos e capture os erros.

console.log("Exercício 5_____________________________________________________");
class Usuario {
  #idade;

  setIdade(idadeDoUsuario) {
    if (idadeDoUsuario < 120 && idadeDoUsuario > 0) {
      this.#idade = idadeDoUsuario;
      console.log("Idade registrada com sucesso!");
    } else {
      console.log("Idade inválida!");
    }
  }

  getIdade() {
    return `A idade do usuário é ${this.#idade}`;
  }
}

const usuario1 = new Usuario();
usuario1.setIdade(15);
console.log(usuario1.getIdade());
usuario1.setIdade(-2);
console.log(usuario1.getIdade());
usuario1.setIdade(125);
console.log(usuario1.getIdade());

console.log(
  "___________________________________________________________________",
);

console.log("Exercício 6_____________________________________________________");

// Exercício 6 — Propriedades Somente Leitura
// Modele uma classe Configuracao onde certos parâmetros (como o ID do servidor)
// são definidos apenas no construtor e não podem ser alterados posteriormente.
// Implemente isso usando getters sem setters correspondentes ou usando Object.freeze().

//não compreendi este exercicio
class Configuracao {
  #idServidor;
  #senhaServidor;
  constructor(idServidor, senhaServidor) {
    ((this.#idServidor = idServidor), (this.#senhaServidor = senhaServidor));
  }

  getIdServidor() {
    console.log(`O ID do servidor é ${this.#idServidor}`);
  }
}

const config = new Configuracao(552, 101010);
config.getIdServidor();

console.log(
  "___________________________________________________________________",
);
