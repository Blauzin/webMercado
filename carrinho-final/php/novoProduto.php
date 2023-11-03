<?php
  include 'conexaoDb.php';

  $nome = $_POST["produto"];
  $preco = $_POST["preco"];


  $conexao = criarConexao();


  $query = "INSERT INTO produtos(nome, preco) VALUES('$nome', '$preco')";

  mysqli_query($conexao, $query);

?>