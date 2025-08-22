document.addEventListener('DOMContentLoaded', () => {
    // Referências para os elementos do DOM
    const dateFilter = document.getElementById('date-filter');
    const filterButton = document.getElementById('filter-button');
    const eventosTableBody = document.getElementById('eventos-table-body');
    const totalVisitas = document.getElementById('total-visitas');
    const totalWhatsapp = document.getElementById('total-whatsapp');
    const totalInstagram = document.getElementById('total-instagram');
    const totalEmail = document.getElementById('total-email');
    const totalLinkedin = document.getElementById('total-linkedin');

    // Função para buscar e exibir os dados
    const fetchAndDisplayEvents = async (selectedDate) => {
        let visitasCount = 0;
        let whatsappCount = 0;
        let instagramCount = 0;
        let emailCount = 0;
        let linkedinCount = 0;

        try {
            let eventosRef = db.collection('eventos');

            // Se uma data foi selecionada, aplique o filtro
            if (selectedDate) {
                const startDate = new Date(selectedDate);
                const endDate = new Date(selectedDate);
                endDate.setHours(23, 59, 59, 999); // Final do dia

                const startTimestamp = firebase.firestore.Timestamp.fromDate(startDate);
                const endTimestamp = firebase.firestore.Timestamp.fromDate(endDate);
                
                eventosRef = eventosRef.where('timestamp', '>=', startTimestamp).where('timestamp', '<=', endTimestamp);
            }

            const eventosSnapshot = await eventosRef.orderBy('timestamp', 'desc').get();

            eventosTableBody.innerHTML = '';

            eventosSnapshot.forEach(doc => {
                const data = doc.data();
                const tipo = data.tipo;
                const timestamp = data.timestamp;

                switch (tipo) {
                    case 'visita':
                        visitasCount++;
                        break;
                    case 'clique_whatsapp':
                        whatsappCount++;
                        break;
                    case 'clique_instagram':
                        instagramCount++;
                        break;
                    case 'clique_email':
                        emailCount++;
                        break;
                    case 'clique_linkedin':
                        linkedinCount++;
                        break;
                }

                const date = timestamp.toDate();
                const formattedDate = date.toLocaleDateString('pt-BR');
                const formattedTime = date.toLocaleTimeString('pt-BR');

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${tipo}</td>
                    <td>${formattedDate} às ${formattedTime}</td>
                `;
                eventosTableBody.appendChild(row);
            });

            totalVisitas.textContent = visitasCount;
            totalWhatsapp.textContent = whatsappCount;
            totalInstagram.textContent = instagramCount;
            totalEmail.textContent = emailCount;
            totalLinkedin.textContent = linkedinCount;

        } catch (e) {
            console.error("Erro ao carregar dados do Firestore: ", e);
        }
    };

    // Event listener para o botão de filtro
    filterButton.addEventListener('click', () => {
        const selectedDate = dateFilter.value;
        fetchAndDisplayEvents(selectedDate);
    });
    
    // Carregue todos os dados inicialmente
    fetchAndDisplayEvents();
});