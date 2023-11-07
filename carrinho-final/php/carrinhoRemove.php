<?php
  include 'conexaoDb.php';

  $id = $_POST['id'];
  $conexao = criarConexao();

  $query = "DELETE FROM Carrinho WHERE produto_id = $id LIMIT 1";

  mysqli_query($conexao, $query);

?>