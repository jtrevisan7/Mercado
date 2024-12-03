// Função para o agendamento de Retirada
document.getElementById('form-retirada').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const dataRetirada = document.getElementById('dataRetirada').value;

    alert(`Agendamento de Retirada Confirmado!\nNome: ${nome}\nTelefone: ${telefone}\nData e Hora: ${dataRetirada}`);
});

// Função para o agendamento de Tele-Entrega
document.getElementById('form-teleEntrega').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const dataEntrega = document.getElementById('dataEntrega').value;

    alert(`Agendamento de Tele-Entrega Confirmado!\nNome: ${nome}\nTelefone: ${telefone}\nEndereço: ${endereco}\nData e Hora: ${dataEntrega}`);
});