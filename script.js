// Sistema de autenticação - Verificar se usuário está logado ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    verificarLogin();
});

function verificarLogin() {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const userDisplay = document.getElementById('userDisplay');

    if (usuarioLogado) {
        // Usuário está logado
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        userDisplay.textContent = `Bem-vindo, ${usuarioLogado}!`;
    } else {
        // Usuário não está logado
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        userDisplay.textContent = '';
    }
}

// Função para logout
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Tem certeza que deseja sair?')) {
                localStorage.removeItem('usuarioLogado');
                verificarLogin();
                alert('Você foi desconectado com sucesso!');
                window.location.href = 'index.html';
            }
        });
    }
});
