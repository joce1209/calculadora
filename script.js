function calcular(operacao) {
  const valor1 = parseFloat(document.getElementById('valor1').value);
  const valor2 = parseFloat(document.getElementById('valor2').value);
  let resultado;

  if (isNaN(valor1) || isNaN(valor2)) {
    resultado = "Erro!";
  } else {
    switch (operacao) {
      case "+":
        resultado = valor1 + valor2;
        break;
      case "-":
        resultado = valor1 - valor2;
        break;
      case "*":
        resultado = valor1 * valor2;
        break;
      case "/":
        resultado = valor2 !== 0 ? valor1 / valor2 : "Erro!";
        break;
      default:
        resultado = "Inválido";
    }
  }

  document.getElementById('resultado').innerText = resultado;
}
