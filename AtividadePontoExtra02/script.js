
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  document.getElementById('gerarButton').addEventListener('click', function () {
    const numero = gerarNumeroAleatorio();
    document.getElementById('resultado').textContent = `Número gerado: ${numero}`;
  });
  
  