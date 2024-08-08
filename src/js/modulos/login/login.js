const btnLogin = document.querySelector('[data-form="login"]');

btnLogin.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.querySelector('[data-form="email"]').value;
    const senha = document.querySelector('[data-form="senha"]').value;

    let cadastros = JSON.parse(localStorage.getItem('cadastro'))

    const usuarioLocalizado = cadastros.find(user => user.email === email && user.senha === senha);

    if(usuarioLocalizado){
        window.location.href = 'index.html';
    }else{
        alert('Você não possui conta, cadastre-se!')
    }
});
