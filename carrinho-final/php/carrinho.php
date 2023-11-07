<?php

  include 'conexaoDb.php';

  $conexao = criarConexao();

  $query = "SELECT produtos.nome, produtos.preco FROM carrinho 
            INNER JOIN produtos ON carrinho.produto_id = produtos.id";

  $resultado = mysqli_query($conexao, $query);
  $dados = array();


  while($registro = mysqli_fetch_assoc($resultado)){

    array_push($dados, $registro);

  };

  $json = (json_encode($dados));
  echo $json;

?>