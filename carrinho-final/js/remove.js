function cardsRemove (conteudo){
  for(var i = 0; i < conteudo.length; i++) {
      var html =
      `<div class="produto" data-name="p-${conteudo[i].id}">
        <img src="imagens/${conteudo[i].id}.png">
        <div class="info">
            <div class="nomePreco">
                <h3>${conteudo[i].nome}</h3>
                <div class="preco">R$${conteudo[i].preco}</div>
            </div>
            <div class="botao">
                <a class="botaoRemove" onclick="adicionarCarrinho(${conteudo[i].id})">Remover</a>
            </div>
        </div>
    </div>`;
  document.getElementById("produtosRemove").innerHTML += html; 
  //colocar os cards dentro da div c id produtos
  
  };

};


function produtoRemover(id){
  var dados = new FormData();
  dados.append("id_produto", id)

  resposta = fetch("php/removerProduto.php",{
  method: "POST",
  body: dados
  });
};

window.onload = async function (){
  var resultado = await fetch ("php/getProdutos.php",{
  method: "GET"

});

var conteudo = await resultado.json();
cardsRemove(conteudo);
};


