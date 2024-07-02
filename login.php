<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Verifique se o e-mail e a senha correspondem ao admin
    if ($email === 'seu-email@exemplo.com' && $senha === 'sua-senha-segura') {
        $_SESSION['admin'] = true;
        header('Location: index.php');
        exit;
    } else {
        $erro = 'E-mail ou senha inválidos!';
    }
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - LN Modas</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="login-container">
        <h2>Login Admin</h2>
        <form action="login.php" method="post">
            <input type="email" name="email" placeholder="Seu E-mail" required>
            <input type="password" name="senha" placeholder="Sua Senha" required>
            <button type="submit" class="btn">Entrar</button>
            <?php if (isset($erro)): ?>
                <p class="error"><?php echo $erro; ?></p>
            <?php endif; ?>
        </form>
    </div>
</body>
</html>
