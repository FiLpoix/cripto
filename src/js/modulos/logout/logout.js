const sair = document.querySelector('[data-logout]');

sair.addEventListener('click', (event)=>{
    event.preventDefault();

    window.location.href = 'login.html';
})