<?php
include 'conexaoDb.php'


$conexao = criarConexao();

if (isset($_POST['username']) && isset($_POST['password'])) {
    
    $usr = mysqli_real_escape_string($conn, $_POST['username']);
    $pwd = mysqli_real_escape_string($conn, $_POST['password']);
    
    $query = "SELECT * FROM admin_usuarios WHERE usuario='$usr' AND senha='$pwd'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        header("Location: ../admin.html");
        exit;

    } else {
        exit;
    }
}


?>
