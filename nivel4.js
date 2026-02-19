console.log(
  "Exercício 10_____________________________________________________",
);

// Exercício 10 — Sistema de Notificações
// Crie uma classe base Notificacao com o método enviar(mensagem).
// Crie subclasses Email, SMS e PushNotification. Cada uma deve implementar enviar() de forma diferente (ex: "Enviando email para...", "Enviando SMS...").

class Notificacao {
  enviar(mensagem) {
    console.log(mensagem);
  }
}

class Email extends Notificacao {
  enviar(mensagem, destinatario) {
    console.log(
      `Enviando "${mensagem}" através de Email para ${destinatario}.`,
    );
  }
}
class SMS extends Notificacao {
  enviar(mensagem, destinatario) {
    console.log(`Enviando "${mensagem}" através de SMS para ${destinatario}.`);
  }
}
class PushNotification extends Notificacao {
  enviar(mensagem, destinatario) {
    console.log(
      `Enviando "${mensagem}" através de Notificação Push para ${destinatario}.`,
    );
  }
}

const notificacao = new Notificacao();
notificacao.enviar("Olá mundo!");

const email = new Email();
email.enviar("No aguardo dos boletos do mês", "Contabilidade");

const sms = new SMS();
sms.enviar("Adquira o novo plano", "48955663322");

const push = new PushNotification();
push.enviar("Seu trigo está pronto para colher", "xxZika123xx");

console.log(
  "___________________________________________________________________",
);

console.log(
  "Exercício 11_____________________________________________________",
);

// Exercício 11 — Processador de Pagamentos
// Crie uma função processarPagamento(metodo, valor) que receba um objeto genérico.
// Esse objeto pode ser uma instância de CartaoCredito, Boleto ou PayPal.
// O polimorfismo deve garantir que o método correto de cobrança seja chamado sem que a função precise saber qual é a classe exata.

class CartaoCredito {
  cobrar(valor) {
    console.log(`Debitando ${valor} do seu limite.`);
  }
}

class Boleto {
  cobrar(valor) {
    console.log(`O valor de R$${valor} terá baixa em 3 dias úteis.`);
  }
}

class Paypal {
  cobrar(valor) {
    console.log(`O valor de $${valor} teve uma taxa de $5.00 dólares.`);
  }
}

function processarPagamento(metodo, valor) {
  metodo.cobrar(valor);
}

const cartao = new CartaoCredito();
const boleto = new Boleto();
const paypal = new Paypal();

processarPagamento(cartao, 500);
processarPagamento(boleto, 500);
processarPagamento(paypal, 500);

console.log(
  "___________________________________________________________________",
);

// Exercício 12 — Renderização de Componentes
// Crie uma lista de objetos variados (Botão, Input, Imagem) que herdam de ComponenteVisual.
// Percorra essa lista com um laço forEach chamando o método renderizar().
// Cada objeto deve desenhar sua própria representação no console, demonstrando comportamento polimórfico.
