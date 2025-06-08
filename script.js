let expressao = '';

function adicionar(valor) {
  expressao += valor;
  document.getElementById('visor').innerText = expressao;
}

function limpar() {
  expressao = '';
  document.getElementById('visor').innerText = '0';
}

function calcular() {
  try {
    const resultado = eval(expressao);
    document.getElementById('visor').innerText = resultado;
    expressao = resultado.toString();
  } catch (e) {
    document.getElementById('visor').innerText = 'Erro';
    expressao = '';
  }
}

