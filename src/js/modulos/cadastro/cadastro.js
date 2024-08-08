const btnCadastro = document.querySelector('[data-form="cadastrar"]');

btnCadastro.addEventListener('click', (event) => {
    event.preventDefault();
    
    const nome = document.querySelector('[data-form="nome"]').value;
    const email = document.querySelector('[data-form="email"]').value;
    const senha = document.querySelector('[data-form="senha"]').value;
    const senhaRepetida = document.querySelector('[data-form="senhaRepetida"]').value;
    
    if((senha === senhaRepetida) && (email !== '') && (nome !== '')) {
        let cadastro = JSON.parse(localStorage.getItem('cadastro')) || [];

        cadastro.push({
            "nome": nome,
            "email": email,
            "senha": senha
        });

        localStorage.setItem('cadastro', JSON.stringify(cadastro));

        window.location.href = 'index.html';
    }else if((nome === '') || (email === '') || (senha === '') || (senhaRepetida === '')){
        alert('Campo vazio')
    }else {
        alert('Senha errada');
    }

    
});
