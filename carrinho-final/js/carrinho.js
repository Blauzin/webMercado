window.onload = carregarCarinho();

async function carregarCarinho() {
    var resultado = await fetch("php/carrinho.php",{
      method: "GET"
    });
    var conteudo = await resultado.json
  }
 
  if (conteudo.length > 0) {
      renderCartItems(conteudo);
  } else {
      document.getElementById('emptyCartMessage').style.display = 'block';
  }


function renderCartItems(cartItems) {
  for(var i = 0; i < conteudo.length; i++) {

    var html = `
            <h3>${item.name}</h3>
            <p class="quantity">Quantidade: ${item.quantity}</p>
            <p>R$${(item.price * item.quantity).toFixed(2)}</p>
            <span class="remove-item" onclick="removeItemFromCart(${item.id})">&times;</span>
        `;

  };

  document.getElementById('checkoutButton').style.display = 'block';
}

function removeItemFromCart(id) {

  var dados = new FormData();
  dados.append("id_produto", id)

  resposta = fetch("php/removerProduto.php",{
  method: "POST",
  body: dados
  });
};
  if (cartItemsContainer.children.length === 0) {
      document.getElementById('emptyCartMessage').style.display = 'block';
      document.getElementById('checkoutButton').style.display = 'none';
  }

