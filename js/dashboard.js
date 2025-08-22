document.addEventListener('DOMContentLoaded', async () => {
    // Referencia o corpo da tabela onde os eventos serão exibidos
    const eventosTableBody = document.getElementById('eventos-table-body');
    // Referencia os cards de resumo
    const totalVisitas = document.getElementById('total-visitas');
    const totalContato = document.getElementById('total-contato');

    let visitasCount = 0;
    let contatoCount = 0;

    try {
        // Acessa a coleção 'eventos' no Firestore
        const eventosRef = db.collection('eventos');
        const eventosSnapshot = await eventosRef.orderBy('timestamp', 'desc').get();

        // Limpa a tabela antes de adicionar os dados
        eventosTableBody.innerHTML = '';

        eventosSnapshot.forEach(doc => {
            const data = doc.data();
            const tipo = data.tipo;
            const timestamp = data.timestamp;

            // Incrementa os contadores
            if (tipo === 'visita') {
                visitasCount++;
            } else {
                contatoCount++;
            }

            // Formata a data e hora
            const date = timestamp.toDate();
            const formattedDate = date.toLocaleDateString('pt-BR');
            const formattedTime = date.toLocaleTimeString('pt-BR');

            // Cria uma nova linha na tabela para cada evento
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${tipo}</td>
                <td>${formattedDate} às ${formattedTime}</td>
            `;
            eventosTableBody.appendChild(row);
        });

        // Atualiza os cards de resumo
        totalVisitas.textContent = visitasCount;
        totalContato.textContent = contatoCount;

    } catch (e) {
        console.error("Erro ao carregar dados do Firestore: ", e);
    }
});