const btnLogin = document.querySelector('[data-form="login"]');

btnLogin.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.querySelector('[data-form="email"]').value;
    const senha = document.querySelector('[data-form="senha"]').value;

    if((email === localStorage.getItem("email")) && (senha === localStorage.getItem('senha'))){
        window.location.href = 'index.html';
    }else if((email === '') || (senha === '')){
        alert('Campo vazio')
    }else{
        alert('Você não possui conta, cadastre-se!')
    }
});
