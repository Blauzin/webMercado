<?php
  function criarConexao() {
    $dbhost = "localhost:3306";
    $dbuser = "root";
    $dbsenha = "12345";
    $db = "Loja";
    $conn = new mysqli($dbhost, $dbuser, $dbsenha, $db) or die("Erro de conexão: %s\n". $conn -> error);
    return $conn;
  }

  function CloseCon($conn) {
    $conn -> close();
  }
?>