<?php

  include 'conexaoDb.php';

  $conexao = criarConexao();

  $mensagem = ''; 

  $query = "DELETE FROM carrinho";

  if(mysqli_query($conexao, $query)) {
    $mensagem = 'Carrinho limpo com sucesso!';
  } else {
    $mensagem = 'Erro ao limpar carrinho.';
  }

  echo json_encode(['mensagem' => $mensagem]);

  
?>