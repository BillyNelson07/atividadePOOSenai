console.log("Exercício 7_____________________________________________________");

// Exercício 7 — Hierarquia de Veículos
// Crie uma classe base Veiculo com métodos como mover().
// Crie subclasses Carro e Aviao. O carro deve mover-se "pela estrada" e o avião "pelo ar".
//  Adicione atributos específicos, como quantidadePortas para o carro e altitudeMaxima para o avião.

class Veiculo {
  constructor(tipoMotor, potencia) {
    ((this.tipoMotor = tipoMotor), (this.potencia = potencia));
  }

  mover() {}
}

class Carro extends Veiculo {
  constructor(tipoMotor, potencia, quantidadePortas) {
    (super(tipoMotor, potencia), (this.quantidadePortas = quantidadePortas));
  }

  mover() {
    console.log("O Carro move-se pela estrada");
  }
}

class Aviao extends Veiculo {
  constructor(tipoMotor, potencia, altitudeMaxima) {
    (super(tipoMotor, potencia), (this.altitudeMaxima = altitudeMaxima));
  }

  mover() {
    console.log("O Avião move-se pelo céu");
  }
}

console.log(
  "___________________________________________________________________",
);

console.log("Exercício 8_____________________________________________________");

// Exercício 8 — O uso do Super
// Crie uma classe Funcionario com salário base.
// Crie uma subclasse Gerente que herda de Funcionário.
// No construtor do Gerente, utilize super() para repassar dados e adicione um atributo extra departamento.
// Sobrescreva um método de exibir dados para incluir o departamento.

class Funcionario {
  constructor(salario) {
    this.salario = salario;
  }

  exibirDados() {
    console.log(`O salário do funcionário é ${this.salario}.`);
  }
}

class Gerente extends Funcionario {
  constructor(salario, departamento) {
    (super(salario), (this.departamento = departamento));
  }

  exibirDados() {
    console.log(
      `O salário do funcionário do departarmento ${this.departamento} é ${this.salario}.`,
    );
  }
}

const funcionario1 = new Funcionario(2000);
funcionario1.exibirDados();

const gerente1 = new Gerente(5000, "Fiscal");
gerente1.exibirDados();

console.log(
  "___________________________________________________________________",
);

console.log("Exercício 9_____________________________________________________");

// Exercício 9 — Extensão de Funcionalidade
// Utilize uma classe nativa do JavaScript, como Array, e crie uma subclasse chamada ListaOrdenada.
// Sobrescreva o método push() para garantir que, sempre que um item for adicionado, a lista se mantenha automaticamente ordenada.

class ListaOrdenada extends Array {
  push(dadoASerAdicionado) {
    let novoArray = super.push(...dadoASerAdicionado);
    this.sort((a, b) => a - b);
    return novoArray;
  }
}

const lista = new ListaOrdenada();

lista.push([5, 2, 3, 8]);

console.log(lista);
