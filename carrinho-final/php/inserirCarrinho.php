<?php

  include 'conexaoDb.php';

  $id = $_POST["id_produto"];

  $conexao = criarConexao();


  $query = "INSERT INTO carrinho(produto_id) VALUES('$id')";

  mysqli_query($conexao, $query);

?>