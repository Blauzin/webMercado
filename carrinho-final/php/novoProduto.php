<?php
  include 'conexaoDb.php';

  $nome = $_POST["produto"];
  $preco = $_POST["preco"];

  $arquivo = $_FILES["arquivo"];

  if($arquivo["type"] == "image/png")
  {
        $novo_arquivo = "../imagens/".$arquivo["name"];
        if(move_uploaded_file($arquivo["tmp_zname"], $novo_arquivo))
        {
              $conexao = criarConexao();
              $query = "INSERT INTO produtos(nome, preco) VALUES('$nome', '$preco')";
              mysqli_query($conexao, $query);

              $mensagem = "Upload feito com sucesso";
            }
            else
            {
              $mensagem = "Erro ao fazer upload do arquivo";
            }
          }
          else
          {
            $mensagem = "Somente é permitido pngs!";  
          }

          $json = json_encode($mensagem);
          echo $json;
        ?>
