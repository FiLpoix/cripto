const btnCadastro = document.querySelector('[data-form="cadastrar"]');

console.log(localStorage.getItem('nome'), localStorage.getItem('email'), localStorage.getItem('senha'))


btnCadastro.addEventListener('click', (event) => {
    event.preventDefault();

    const nome = document.querySelector('[data-form="nome"]').value;
    const email = document.querySelector('[data-form="email"]').value;
    const senha = document.querySelector('[data-form="senha"]').value;
    const senhaRepetida = document.querySelector('[data-form="senhaRepetida"]').value;

    if((senha === senhaRepetida) && (email !== '') && (nome !== '')) {
        localStorage.setItem('nome', nome)
        localStorage.setItem('email', email)
        localStorage.setItem('senha', senha)
        window.location.href = 'index.html';
    }else if((nome === '') || (email === '') || (senha === '') || (senhaRepetida === '')){
        alert('Campo vazio')
    }else {
        alert('Senha errada');
    }
});
