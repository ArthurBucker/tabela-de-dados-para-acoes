class Tabela {
  constructor (empresa, ticker, dataC, quantidade, precoC, totC, dataV, precoV, totV, tipo, ajuste, resultado, mes ) {
    this.empresa = empresa;
    this.ticker = ticker;
    this.dataC = dataC;
    this.quantidade = quantidade;
    this.precoC = precoC;
    this.totC = totC;
    this.dataV = dataV;
    this.precoV = precoV;
    this.totV = totV;
    this.tipo = tipo;
    this.ajuste = ajuste;
    this.resultado = resultado;
    this.mes = mes;
  }
}


class UI {
 
  //Adiciona fileiras vazias
  addFileira(tabela) {
    const tcorpo = document.querySelector('.corpo'),
          tr = document.createElement('tr');

    tr.innerHTML = `
    <td>${tabela.empresa}</td>
    <td>${tabela.ticker}</td>
    <td>${tabela.dataC}</td>
    <td>${tabela.quantidade}</td>
    <td>${tabela.precoC}</td>
    <td>${tabela.totC}</td>
    <td>${tabela.dataV}</td>
    <td>${tabela.precoV}</td>
    <td>${tabela.totV}</td>
    <td>${tabela.tipo}</td>
    <td>${tabela.ajuste}</td>
    <td>${tabela.resultado}</td>
    <td>${tabela.mes}</td>
    <td class="deletar"><a href="#" class="delete">X</a></td>
    `;

    tcorpo.appendChild(tr);
  }

  //Remove fileira escolhida
  delFileira(e) {
      if (e.target.className == 'delete') {
        let res = confirm('Você deseja remover essa fileira?')
        if(res) {
          e.target.parentElement.parentElement.remove();
        }
      }
    
      e.preventDefault()
  }
}