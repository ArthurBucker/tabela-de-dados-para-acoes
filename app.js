//Add fileira
const add = document.querySelector('.add'),
      tbody = document.querySelector('.corpo');
add.addEventListener('click', () => {
  tbody.innerHTML += `
    <tr>
      <td id="empresa"></td>
      <td id="ticker"></td>
      <td id="data-c"></td>
      <td id="quantidade"></td>
      <td id="preco-c"></td>
      <td id="tot-c"></td>
      <td id="data-v"></td>
      <td id="preço-v"></td>
      <td id="tot-v"></td>
      <td id="tipo"></td>
      <td id="ajuste"></td>
      <td id="resultado"></td>
      <td id="mes"></td>
      <td class="deletar"><a href="#" class="delete">X</a></td>
    </tr>
  `
})

//Remover fileira
tbody.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    let res = confirm('Você deseja remover essa fileira?')
    if(res) {
      e.target.parentElement.parentElement.remove();
    }
  }

  e.preventDefault()
})