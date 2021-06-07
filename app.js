//Mostrar local storage quando carregar a página
document.addEventListener('DOMContentLoaded', Deposito.mostrarDeposito);


//Adicionar fileira 
document.querySelector('.grid').addEventListener('submit', (e) => {
  //Variáveis do formulário
  const empresa = document.querySelector('.empresa').value.toUpperCase(),
        ticker = document.querySelector('.ticker').value.toUpperCase(),
        dataC = document.querySelector('.data-c').value.toUpperCase(),
        quantidade = Number(document.querySelector('.quantidade').value),
        precoC = Number(document.querySelector('.preco-c').value),
        totC = quantidade * precoC,
        dataV = document.querySelector('.data-v').value,
        precoV = Number(document.querySelector('.preco-v').value),
        totV = quantidade * precoV,
        tipo = document.querySelector('.tipo').value.toUpperCase(),
        ajuste = Number(document.querySelector('.ajuste').value),
        resultado = (totV - totC) + ajuste,
        mes = document.querySelector('.mes').value.toUpperCase();
  
  
  //Init Tabela e UI
  const tabela = new Tabela(empresa, ticker, dataC, quantidade, precoC, totC, dataV, precoV, totV, tipo, ajuste, resultado, mes);

  const ui = new UI();

  ui.erro(tabela);
  ui.addFileira(tabela);
  Deposito.addDeposito(tabela);

  e.preventDefault()
})

//Deletar Fileira
document.querySelector('.corpo').addEventListener('click', (e) => {
  const ui = new UI()
  ui.delFileira(e);

  Deposito.delDeposito(
    e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.textContent, 

    e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.textContent, 

    e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.textContent
    );
})

document.querySelector('.apagar-tudo').addEventListener('click', () => {
  document.querySelector('.corpo').innerHTML = '';
  localStorage.clear()
})

//Calcular média
document.querySelector('.calcular-media').addEventListener('click', () => {
 Media.calcMedia()
})

//Gerar Gráfico
document.querySelector('.gerar-grafico').addEventListener('click', () => {
  Grafico.gerarGrafico()
})
