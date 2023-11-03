function cardsRemove (conteudo){
  for(var i = 0; i < conteudo.length; i++) {
      var html =
      `<div class="card">
          <div class="card-titulo">${conteudo[i].nome}</div>
          <div class="card-genero">${conteudo[i].preco}</div>
          <div class="card-acao" onclick="produtoRemover(${conteudo[i].id})"> Remover </div>
  
      </div>`
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


