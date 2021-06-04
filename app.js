//Adicionar fileira 
document.querySelector('.grid').addEventListener('submit', (e) => {
  //Variáveis do formulário
  const empresa = document.querySelector('.empresa').value;
  const ticker = document.querySelector('.ticker').value;
  const dataC = document.querySelector('.data-c').value;
  const quantidade = Number(document.querySelector('.quantidade').value);
  const precoC = Number(document.querySelector('.preco-c').value);
  const totC = quantidade * precoC;
  const dataV = document.querySelector('.data-v').value;
  const precoV = Number(document.querySelector('.preco-v').value);
  const totV = quantidade * precoV;
  const tipo = document.querySelector('.tipo').value;
  const ajuste = document.querySelector('.ajuste').value;
  const resultado = (totV - totC) + Number(ajuste);
  const mes = document.querySelector('.mes').value;
  
  
  //Init Tabela e UI
  const tabela = new Tabela(empresa, ticker, dataC, quantidade, precoC, totC, dataV, precoV, totV, tipo, ajuste, resultado, mes);

  const ui = new UI();

  ui.addFileira(tabela);


    e.preventDefault()
})

//Deletar Fileira
document.querySelector('.corpo').addEventListener('click', (e) => {
  const ui = new UI()
  ui.delFileira(e);

  e.preventDefault()
})
