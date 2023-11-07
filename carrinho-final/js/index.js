let previewContainer;



//usei listener pq window.onload estava dando erros
window.addEventListener('load', function() {
    carregarDadosDosCards();
  });

async function carregarDadosDosCards() {
    var resultado = await fetch("php/getProdutos.php", {
        method: "GET"
    });

    var conteudo = await resultado.json();

    cardsCriar(conteudo);
        
};

//criar cards
function cardsCriar (conteudo){

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
                <a class="botaoCarrinho" onclick="adicionarCarrinho(${conteudo[i].id})">Adicionar ao Carrinho</a>
            </div>
        </div>
    </div>`;
    document.getElementById("produtos-container").innerHTML += html; 
    //colocar os cards dentro da div c id produtos
    
    };

};


async function adicionarCarrinho(id){
        var dados = new FormData();
        dados.append("id_produto", id);

         resposta = await fetch("php/inserirCarrinho.php",{
            method: "POST",
            body: dados
        });

       
};


function clickMenu(){

    if (itens.style.display =='block') {
      itens.style.display = 'none'
    } else{
      itens.style.display = 'block'
    }

}


