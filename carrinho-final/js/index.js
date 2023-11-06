
function trocarPag1(){
    window.location.href = "novoProduto.html";
}
function trocarPag2(){
    window.location.href = "removerProduto.html";
}



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

window.onload = atualizarTotal();

// carregar dados dos cards
window.onload = async function (){
        var resultado = await fetch ("php/getProdutos.php",{
        method: "GET"

    });


    var conteudo = await resultado.json();

    //criar cards
    function cardsCriar (conteudo){
        for(var i = 0; i < conteudo.length; i++) {
            var html =
            `<div class="card">
                <div class="card-titulo">${conteudo[i].nome}</div>
                <div class="card-genero">${conteudo[i].preco}</div>
                <div class="card-acao" onclick="adicionarCarrinho(${conteudo[i].id})"> COMPRAR </div>
        
            </div>`
        document.getElementById("produtos").innerHTML += html; 
        //colocar os cards dentro da div c id produtos
        
        };

    };

    cardsCriar(conteudo);

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


//função para adicionar novos produtos
function addProduto(){

    var form =  document.getElementById('formProduto');
    var arquivo = document.getElementById('arquivo').files; //imagem
    var dados = new FormData(form);
    dados.append('arquivo', arquivo[0]);
  
    fetch("php/novoProduto.php", {
      method: "POST",
      body: dados
    });
  
  
}

async function limparCarrinho(){
    await fetch("php/limparCarrinho.php",{
        method: "POST"
    });

    await atualizarTotal();
};
