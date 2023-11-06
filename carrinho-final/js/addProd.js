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
