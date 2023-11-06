<?php
  include 'conexaoDb.php';

  $nome = $_POST["produto"];
  $preco = $_POST["preco"];

  $arquivo = $_FILES["arquivo"];

  if($arquivo["type"] == "image/png")
      {
        $novo_arquivo = "../imagens/".$arquivo["name"];
        move_uploaded_file($arquivo["tmp_name"], "../imagens/".$arquivo["name"]);

        $conexao = criarConexao();
        $query = "INSERT INTO produtos(nome, preco) VALUES('$nome', '$preco')";
        mysqli_query($conexao, $query);

        $mensagem = "Upload feito com suceso";
      }
  else
      {
        $mensagem = "Somente e permitido pngs!";  
  
      }


  $json = json_encode($mensagem);
  echo $json;




?>