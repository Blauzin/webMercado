window.addEventListener('load', function() {
  carregarCarinho();
  atualizarTotal();
});

async function carregarCarinho() {
    var resultado = await fetch("php/carrinho.php",{
      method: "GET"
    });
    var conteudo =  await resultado.json();
    
    if (conteudo.length > 0) {
      criaritems(conteudo);
    } else {
      alert("Carrinho Vazio");
    }
    
  }

function criaritems(conteudoCarrinho) {
  for(var i = 0; i < conteudoCarrinho.length; i++) {

  var html = 
           `<div class="item-carrinho"
           <h3>${conteudoCarrinho[i].nome}</h3>
            <p>R$${conteudoCarrinho[i].preco}</p>`

  document.getElementById("itemsCarrinho").innerHTML += html; 
  };

}
async function limparCarrinho(){
  await fetch("php/limparCarrinho.php",{
      method: "POST"
  });

};

//função para atualizar o valor total da compra
async function atualizarTotal(){
  busca = await fetch('php/valorTotal.php');
      total = await busca.json();
  
      if (total.error) {
              console.error(total.error);
      } else {
          if (total.total == null){
              document.getElementById('total').textContent = 'Valor Total: 0';
          }else{
              document.getElementById('total').textContent = 'Valor Total: ' + total.total;               
          }
      };
}

