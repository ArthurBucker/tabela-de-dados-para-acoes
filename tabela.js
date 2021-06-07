class Tabela {
  constructor (empresa, ticker, dataC, quantidade, precoC, totC, dataV, precoV, totV, tipo, ajuste, resultado, mes, posicao ) {
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
    this.posicao = posicao;
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
    if (tabela.empresa !== '' && tabela.ticker !== '' &&tabela.dataC !== '' && tabela.quantidade !== '' && tabela.precoC !== '' && tabela.dataV !== '' && tabela.precoV!== '' && tabela.tipo !== '' && tabela.mes !== '') {
      tcorpo.appendChild(tr);
      const ui = new UI();
      
    }
  }

  //Erro
  erro(tabela) {
    if (tabela.empresa === '' || tabela.ticker === '' ||tabela.dataC === '' || tabela.quantidade === '' || tabela.precoC === '' || tabela.dataV === '' || tabela.precoV=== '' || tabela.tipo === '' || tabela.mes === '') {
      alert ('Favor preencher campos obrigatórios!');
    }
  }

  limparTexto() {
  const empresa = document.querySelector('.empresa'),
        ticker = document.querySelector('.ticker'),
        dataC = document.querySelector('.data-c'),
        quantidade = (document.querySelector('.quantidade')),
        precoC = (document.querySelector('.preco-c')),
        dataV = document.querySelector('.data-v'),
        precoV = (document.querySelector('.preco-v')),
        tipo = document.querySelector('.tipo'),
        ajuste = document.querySelector('.ajuste'),
        mes = document.querySelector('.mes');

  empresa.value = '';
  ticker.value = '';
  dataC.value = '';
  quantidade.value = '';
  precoC.value = '';
  dataV.value = '';
  precoV.value = '';
  tipo.value = '';
  ajuste.value = '';
  mes.value = '';

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

class Deposito {
  //Pegar do local storage
  static pegarFileiras() {
    let fileiras;
    if(localStorage.getItem('fileiras') === null) {
      fileiras = [];
    } else {
      fileiras = JSON.parse(localStorage.getItem('fileiras'));
    }
    return fileiras;
  }

  //Add local storage
  static addDeposito(fileira) {
    if (fileira.empresa !== '' && fileira.ticker !== '' &&fileira.dataC !== '' && fileira.quantidade !== '' && fileira.precoC !== '' && fileira.dataV !== '' && fileira.precoV!== '' && fileira.tipo !== '' && fileira.mes !== '') {
    const fileiras = Deposito.pegarFileiras();

    fileiras.push(fileira);
    localStorage.setItem('fileiras', JSON.stringify(fileiras));
    }
    
  }

  //Mostrar local storage
  static mostrarDeposito() {
    const fileiras = Deposito.pegarFileiras();

    fileiras.forEach(fileira => {
      const ui = new UI();
      ui.addFileira(fileira)
    })
  }

 

  //Deletar do local storage
  static delDeposito(ticker, dataC, precoC) {
    const fileiras = Deposito.pegarFileiras();
    fileiras.forEach((fileira, index) => {
      if (fileira.ticker === ticker && fileira.dataC === dataC && fileira.precoC == precoC) {
        fileiras.splice(index, 1);
      }
    })
    localStorage.setItem('fileiras', JSON.stringify(fileiras));
  }
}

  //Calcular média
  class Media {
    static calcMedia() {
      const fileiras = Deposito.pegarFileiras();
      const media = document.querySelector('.media')
      const mediaT = document.querySelector('.mediaT');
      let arrayTickers = [];
      let objeto1 = [];
      let objeto2 = [];
      let objeto3 = [];
      let objeto4 = [];
      let objeto5 = [];

      mediaT.innerHTML ='';
      //Achar e inserir valores duplicados
      fileiras.forEach(fileira => {
        arrayTickers.push(fileira.ticker);
      })
      const verificador = new Set(arrayTickers).size !== arrayTickers.length;
      if (verificador === true) {
        let acharDuplicatas = arr => arr.filter((item, index) => arr.indexOf(item) != index);
        let arrU = [...new Set(acharDuplicatas(arrayTickers))];
        fileiras.forEach(fileira => {
          for (let i = 0; i < arrU.length; i++) {
            if (fileira.ticker === arrU[i]) {
              if(i === 0) {
                objeto1.push({
                  ticker: fileira.ticker,
                  quantidade: fileira.quantidade,
                  total: fileira.totC
                })
              }
                
              if(i === 1) {
                objeto2.push({
                  ticker: fileira.ticker,
                  quantidade: fileira.quantidade,
                  total: fileira.totC
                })
              }
              if(i === 2) {
                objeto3.push({
                  ticker: fileira.ticker,
                  quantidade: fileira.quantidade,
                  total: fileira.totC
                })
              }
              if(i === 3) {
                objeto4.push({
                  ticker: fileira.ticker,
                  quantidade: fileira.quantidade,
                  total: fileira.totC
                })
              }
              if(i === 4) {
                objeto5.push({
                  ticker: fileira.ticker,
                  quantidade: fileira.quantidade,
                  total: fileira.totC
                })
              }
            }
          }
        })
      }
      
      //Média dos valores duplicados
      if (!verificador) {
        alert('Você não possui ações com ticker(s) repetido(s)')
      } else {
       media.style.display = 'block';
        let media1 = 0,
          media2 = 0,
          media3 = 0,
          media4 = 0,
          media5 = 0,
          somaQ1 = 0,
          somaQ2 = 0,
          somaQ3 = 0,
          somaQ4 = 0,
          somaQ5 = 0,
          somaT1 = 0,
          somaT2 = 0,
          somaT3 = 0,
          somaT4 = 0,
          somaT5 = 0;
      
      
      objeto1.forEach(obj => {
         somaQ1 += obj.quantidade;
         somaT1 += obj.total;
         media1 = somaT1 / somaQ1
      })
      objeto2.forEach(obj => {
         somaQ2 += obj.quantidade;
         somaT2 += obj.total;
         media2 = somaT2 / somaQ2
      })
      objeto3.forEach(obj => {
         somaQ3 += obj.quantidade;
         somaT3 += obj.total;
         media3 = somaT3 / somaQ3
      })
      objeto4.forEach(obj => {
         somaQ4 += obj.quantidade;
         somaT4 += obj.total;
         media4 = somaT4 / somaQ4
      })
      objeto5.forEach(obj => {
         somaQ5 += obj.quantidade;
         somaT5 += obj.total;
         media5 = somaT5 / somaQ5
      })

      if(objeto1[0] !== undefined) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${objeto1[0]['ticker']}</td>
        <td>${media1}</td>
        `
        mediaT.appendChild(tr);
      }
      if(objeto2[0] !== undefined) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${objeto2[0]['ticker']}</td>
        <td>${media2}</td>
        `
        mediaT.appendChild(tr);
      }
      if(objeto3[0] !== undefined) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${objeto3[0]['ticker']}</td>
        <td>${media3}</td>
        `
        mediaT.appendChild(tr);
      }
      if(objeto4[0] !== undefined) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${objeto4[0]['ticker']}</td>
        <td>${media4}</td>
        `
        mediaT.appendChild(tr);
      }
      if(objeto5[0] !== undefined) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${objeto5[0]['ticker']}</td>
        <td>${media5}</td>
        `
        mediaT.appendChild(tr);
      }
      
      }
      
  }
  
}

//Gráfico
class Grafico {
  static gerarGrafico() {
    document.querySelector('#chart').innerHTML = '';
    const fileiras = Deposito.pegarFileiras();
      let objTotal = [],
          arrayTickers = [],
          valoresObjTotal = [],
          tickersObjTotal = [],
          objeto1 = [],
          objeto2 = [],
          objeto3 = [],
          objeto4 = [],
          objeto5 = [];

      //Achar e inserir valores duplicados
      fileiras.forEach(fileira => {
        arrayTickers.push(fileira.ticker);
      })
      //Valores únicos serão separados e testados referente aos repetidos
      let uniq = [...new Set(arrayTickers)]
      const verificador = new Set(arrayTickers).size !== arrayTickers.length;
      if (verificador === true) {
        let acharDuplicatas = arr => arr.filter((item, index) => arr.indexOf(item) != index);
        let arrU = [...new Set(acharDuplicatas(arrayTickers))];
        uniq = uniq.filter(val => !arrU.includes(val));
        if(uniq.length !== 0) {
          fileiras.forEach(fileira => {
            for (let i = 0; i < uniq.length; i++) {
              if (fileira.ticker === uniq[i]) {
                objTotal.push({
                  ticker: fileira.ticker,
                  totC: fileira.totC
                })
              }
            }
          })
        }
        fileiras.forEach(fileira => {
          for (let i = 0; i < arrU.length; i++) {
            if (fileira.ticker === arrU[i]) {
              if(i === 0) {
                objeto1.push({
                  ticker: fileira.ticker,
                  total: fileira.totC
                })
              }
                
              if(i === 1) {
                objeto2.push({
                  ticker: fileira.ticker,
                  total: fileira.totC
                })
              }
              if(i === 2) {
                objeto3.push({
                  ticker: fileira.ticker,
                  total: fileira.totC
                })
              }
              if(i === 3) {
                objeto4.push({
                  ticker: fileira.ticker,
                  total: fileira.totC
                })
              }
              if(i === 4) {
                objeto5.push({
                  ticker: fileira.ticker,
                  total: fileira.totC
                })
              }
            }
          }
        })
        //Soma dos totais dos valores duplicados
        let somaT1 = 0,
            somaT2 = 0,
            somaT3 = 0,
            somaT4 = 0,
            somaT5 = 0;
      
      objeto1.forEach(obj => {
         somaT1 += obj.total;
      })
      objeto2.forEach(obj => {
         somaT2 += obj.total;
      })
      objeto3.forEach(obj => {  
         somaT3 += obj.total;
      })
      objeto4.forEach(obj => {
         somaT4 += obj.total;
      })
      objeto5.forEach(obj => { 
         somaT5 += obj.total;
      })

      
      if(objeto1[0] !== undefined) {
        objTotal.push({
          ticker: objeto1[0]['ticker'],
          totC: somaT1
        })
      }
      if(objeto2[0] !== undefined) {
        objTotal.push({
          ticker: objeto2[0]['ticker'],
          totC: somaT2
        })
      }
      if(objeto3[0] !== undefined) {
        objTotal.push({
          ticker: objeto3[0]['ticker'],
          totC: somaT3
        })
      }
      if(objeto4[0] !== undefined) {
        objTotal.push({
          ticker: objeto4[0]['ticker'],
          totC: somaT4
        })
      }
      if(objeto5[0] !== undefined) {
        objTotal.push({
          ticker: objeto5[0]['ticker'],
          totC: somaT5
        })
      } 
    } 
    //Se não ter duplicatas
    else {
      fileiras.forEach(fileira => {
        objTotal.push({
          ticker: fileira.ticker,
          totC: fileira.totC
        })
      })
    }
    //Inserindo valores que irão ir para o gráfico
    objTotal.forEach(obj => {
      valoresObjTotal.push(obj.totC);
      tickersObjTotal.push(obj.ticker); 
    })
    
    //Gráfico
    var options = {
      series: valoresObjTotal,
      chart: {
      width: 480,
      type: 'pie',
    },
    labels: tickersObjTotal,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }
}