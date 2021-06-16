class Tabela {
  constructor (empresa, ticker, dataC, quantidade, precoC, totC, dataV, precoV, totV, ajuste, resultado ) {
    this.empresa = empresa;
    this.ticker = ticker;
    this.dataC = dataC;
    this.quantidade = quantidade;
    this.precoC = precoC;
    this.totC = totC;
    this.dataV = dataV;
    this.precoV = precoV;
    this.totV = totV;
    this.ajuste = ajuste;
    this.resultado = resultado;
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
      <td>R$ ${tabela.precoC.toFixed(2)}</td>
      <td>R$ ${tabela.totC.toFixed(2)}</td>
      <td>${tabela.dataV}</td>
      <td>R$ ${tabela.precoV.toFixed(2)}</td>
      <td>R$ ${tabela.totV.toFixed(2)}</td>
      <td>R$ ${tabela.ajuste.toFixed(2)}</td>
      <td>R$ ${tabela.resultado.toFixed(2)}</td>
      <td class="deletar"><a href="#" class="delete">X</a></td>
      `;
    if (tabela.empresa !== '' && tabela.ticker !== '' &&tabela.dataC !== '' && tabela.quantidade !== '' && tabela.precoC !== '') {
      tcorpo.appendChild(tr);
      const ui = new UI();
      
    }
  }

  //Erro
  erro(tabela) {
    if (tabela.empresa === '' || tabela.ticker === '' ||tabela.dataC === '' || tabela.quantidade === '' || tabela.precoC === '' ) {
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
        ajuste = document.querySelector('.ajuste');
     

  empresa.value = '';
  ticker.value = '';
  dataC.value = '';
  quantidade.value = '';
  precoC.value = '';
  dataV.value = '';
  precoV.value = '';
  ajuste.value = '';
  

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
    if (fileira.empresa !== '' && fileira.ticker !== '' &&fileira.dataC !== '' && fileira.quantidade !== '' && fileira.precoC !== '') {
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
      if (fileira.ticker === ticker && fileira.dataC === dataC && `R$ ${fileira.precoC.toFixed(2)}` == precoC) {
        fileiras.splice(index, 1);
      }
    })
    console.log(ticker, dataC, precoC)
    
    localStorage.setItem('fileiras', JSON.stringify(fileiras));
  }
}

  //Calcular média
  class Media {
    static calcMedia() {
      const fileiras = Deposito.pegarFileiras();
      const media = document.querySelector('.media')
      const mediaT = document.querySelector('.mediaT');
      let arrayTickers = [],
          objeto1 = [],
          objeto2 = [],
          objeto3 = [],
          objeto4 = [],
          objeto5 = [],
          objeto6 = [],
          objeto7 = [],
          objeto8 = [],
          objeto9 = [],
          objeto10 = [];

      mediaT.innerHTML ='';
      //Achar e inserir valores duplicados
      fileiras.forEach(fileira => {
        arrayTickers.push(fileira.ticker);
      })
      const verificador = new Set(arrayTickers).size !== arrayTickers.length;
      if (!verificador) {
        alert('Você não possui ações com ticker(s) repetido(s)')
      } 
      if (verificador === true) {
        let acharDuplicatas = arr => arr.filter((item, index) => arr.indexOf(item) != index);
        let arrU = [...new Set(acharDuplicatas(arrayTickers))];
        if(arrU.length > 10) {
          alert('Sinto muito! O limite de ações com tickers repetidos foi atingido.(10)')
        } else  {
          fileiras.forEach(fileira => {
            for (let i = 0; i < arrU.length; i++) {
              if (fileira.ticker === arrU[i] && arrU.length <= 10) {
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
                if(i === 5) {
                  objeto6.push({
                    ticker: fileira.ticker,
                    quantidade: fileira.quantidade,
                    total: fileira.totC
                  })
                }
                  
                if(i === 6) {
                  objeto7.push({
                    ticker: fileira.ticker,
                    quantidade: fileira.quantidade,
                    total: fileira.totC
                  })
                }
                if(i === 7) {
                  objeto8.push({
                    ticker: fileira.ticker,
                    quantidade: fileira.quantidade,
                    total: fileira.totC
                  })
                }
                if(i === 8) {
                  objeto9.push({
                    ticker: fileira.ticker,
                    quantidade: fileira.quantidade,
                    total: fileira.totC
                  })
                }
                if(i === 9) {
                  objeto10.push({
                    ticker: fileira.ticker,
                    quantidade: fileira.quantidade,
                    total: fileira.totC
                  })
                }
              }
            }
          })

          //Média dos valores duplicados
          media.style.display = 'block';
          let media1 = 0,
              media2 = 0,
              media3 = 0,
              media4 = 0,
              media5 = 0,
              media6 = 0,
              media7 = 0,
              media8 = 0,
              media9 = 0,
              media10 = 0,
              somaQ1 = 0,
              somaQ2 = 0,
              somaQ3 = 0,
              somaQ4 = 0,
              somaQ5 = 0,
              somaQ6 = 0,
              somaQ7 = 0,
              somaQ8 = 0,
              somaQ9 = 0,
              somaQ10 = 0,
              somaT1 = 0,
              somaT2 = 0,
              somaT3 = 0,
              somaT4 = 0,
              somaT5 = 0,
              somaT6 = 0,
              somaT7 = 0,
              somaT8 = 0,
              somaT9 = 0,
              somaT10 = 0;
        
        
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
          objeto6.forEach(obj => {
            somaQ6 += obj.quantidade;
            somaT6 += obj.total;
            media6 = somaT6 / somaQ6
          })
          objeto7.forEach(obj => {
            somaQ7 += obj.quantidade;
            somaT7 += obj.total;
            media7 = somaT7 / somaQ7
          })
          objeto8.forEach(obj => {
            somaQ8 += obj.quantidade;
            somaT8 += obj.total;
            media8 = somaT8 / somaQ8
          })
          objeto9.forEach(obj => {
            somaQ9 += obj.quantidade;
            somaT9 += obj.total;
            media9 = somaT9 / somaQ9
          })
          objeto10.forEach(obj => {
            somaQ10 += obj.quantidade;
            somaT10 += obj.total;
            media10 = somaT10 / somaQ10
          })
  
          if(objeto1[0] !== undefined) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${objeto1[0]['ticker']}</td>
            <td>R$ ${media1.toFixed(2)}</td>
            `
            mediaT.appendChild(tr);
          }
          if(objeto2[0] !== undefined) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${objeto2[0]['ticker']}</td>
            <td>R$ ${media2.toFixed(2)}</td>
            `
            mediaT.appendChild(tr);
          }
          if(objeto3[0] !== undefined) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${objeto3[0]['ticker']}</td>
            <td>R$ ${media3.toFixed(2)}</td>
            `
            mediaT.appendChild(tr);
          }
          if(objeto4[0] !== undefined) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${objeto4[0]['ticker']}</td>
            <td>R$ ${media4.toFixed(2)}</td>
            `
            mediaT.appendChild(tr);
          }
          if(objeto5[0] !== undefined) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${objeto5[0]['ticker']}</td>
            <td>R$ ${media5.toFixed(2)}</td>
            `
            mediaT.appendChild(tr);
          }
          if(objeto6[0] !== undefined) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${objeto6[0]['ticker']}</td>
            <td>R$ ${media6.toFixed(2)}</td>
            `
            mediaT.appendChild(tr);
          }
          if(objeto7[0] !== undefined) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${objeto7[0]['ticker']}</td>
            <td>R$ ${media7.toFixed(2)}</td>
            `
            mediaT.appendChild(tr);
          }
          if(objeto8[0] !== undefined) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${objeto8[0]['ticker']}</td>
            <td>R$ ${media8.toFixed(2)}</td>
            `
            mediaT.appendChild(tr);
          }
          if(objeto9[0] !== undefined) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${objeto9[0]['ticker']}</td>
            <td>R$ ${media9.toFixed(2)}</td>
            `
            mediaT.appendChild(tr);
          }
          if(objeto10[0] !== undefined) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${objeto10[0]['ticker']}</td>
            <td>R$ ${media10.toFixed(2)}</td>
            `
            mediaT.appendChild(tr);
          }
          
        mediaT.scrollIntoView();
      } 
    }
  }
}

//Gráfico
class Grafico {
  static gerarGrafico() {
    document.querySelector('#chart').innerHTML = '';
    const fileiras = Deposito.pegarFileiras();
    console.log(fileiras)
    if (fileiras.length === 0) {
      alert('Favor adicionar ação à tabela!')
    }
      let objTotal = [],
          arrayTickers = [],
          valoresObjTotal = [],
          tickersObjTotal = [],
          objeto1 = [],
          objeto2 = [],
          objeto3 = [],
          objeto4 = [],
          objeto5 = [],
          objeto6 = [],
          objeto7 = [],
          objeto8 = [],
          objeto9 = [],
          objeto10 = [];

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
        if (arrU.length > 10) {
          alert('Sinto muito! Não é possível gerar um gráfico com mais de 10 ações que se repetem!')
        } else {
          fileiras.forEach(fileira => {
            for (let i = 0; i < arrU.length; i++) {
              if (fileira.ticker === arrU[i] && arrU.length <= 10) {
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
                if(i === 5) {
                  objeto6.push({
                    ticker: fileira.ticker,
                    total: fileira.totC
                  })
                }
                  
                if(i === 6) {
                  objeto7.push({
                    ticker: fileira.ticker,
                    total: fileira.totC
                  })
                }
                if(i === 7) {
                  objeto8.push({
                    ticker: fileira.ticker,
                    total: fileira.totC
                  })
                }
                if(i === 8) {
                  objeto9.push({
                    ticker: fileira.ticker,
                    total: fileira.totC
                  })
                }
                if(i === 9) {
                  objeto10.push({
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
              somaT5 = 0,
              somaT6 = 0,
              somaT7 = 0,
              somaT8 = 0,
              somaT9 = 0,
              somaT10 = 0;
        
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
        objeto6.forEach(obj => {
           somaT6 += obj.total;
        })
        objeto7.forEach(obj => {
           somaT7 += obj.total;
        })
        objeto8.forEach(obj => {  
           somaT8 += obj.total;
        })
        objeto9.forEach(obj => {
           somaT9 += obj.total;
        })
        objeto10.forEach(obj => { 
           somaT10 += obj.total;
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
            totC: somaT1
          })
        }
        if(objeto3[0] !== undefined) {
          objTotal.push({
            ticker: objeto3[0]['ticker'],
            totC: somaT1
          })
        }
        if(objeto4[0] !== undefined) {
          objTotal.push({
            ticker: objeto4[0]['ticker'],
            totC: somaT1
          })
        }
        if(objeto5[0] !== undefined) {
          objTotal.push({
            ticker: objeto5[0]['ticker'],
            totC: somaT1
          })
        } 
        if(objeto6[0] !== undefined) {
          objTotal.push({
            ticker: objeto6[0]['ticker'],
            totC: somaT1
          })
        }
        if(objeto7[0] !== undefined) {
          objTotal.push({
            ticker: objeto7[0]['ticker'],
            totC: somaT1
          })
        }
        if(objeto8[0] !== undefined) {
          objTotal.push({
            ticker: objeto8[0]['ticker'],
            totC: somaT1
          })
        }
        if(objeto9[0] !== undefined) {
          objTotal.push({
            ticker: objeto9[0]['ticker'],
            totC: somaT1
          })
        }
        if(objeto10[0] !== undefined) {
          objTotal.push({
            ticker: objeto10[0]['ticker'],
            totC:  somaT1
          })
        } 
      }   
    } 
    //Se não tiver duplicatas
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
    if (objTotal.length > 0) {
      chart.render();
    document.querySelector('#chart').scrollIntoView()
    }
    
  }
}