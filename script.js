function calcular() {
  const valor1 = parseFloat(document.getElementById('valor1').value);
  const valor2 = parseFloat(document.getElementById('valor2').value);
  const operacao = document.getElementById('operacao').value;
  let resultado;

  if (isNaN(valor1) || isNaN(valor2)) {
    resultado = "Por favor, preencha os dois números!";
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
        resultado = valor2 !== 0 ? valor1 / valor2 : "Não é possível dividir por zero!";
        break;
      default:
        resultado = "Operação inválida!";
    }
  }

  document.getElementById('resultado').innerText = "Resultado: " + resultado;
}
