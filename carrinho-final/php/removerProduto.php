<?php
  include 'conexaoDb.php';

  $id = $_POST['id_produto'];
  $conexao = criarConexao();

  $query = "DELETE FROM produtos WHERE id = $id";

  mysqli_query($conexao, $query);

?>