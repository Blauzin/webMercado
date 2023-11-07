let previewContainer;

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

//usei listener pq window.onload estava dando erros
window.addEventListener('load', function() {
    atualizarTotal();
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

        await atualizarTotal();
};


async function limparCarrinho(){
    await fetch("php/limparCarrinho.php",{
        method: "POST"
    });

    await atualizarTotal();
};