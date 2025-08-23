document.addEventListener('DOMContentLoaded', () => {
    // Referências para os elementos do DOM
    const dateStartInput = document.getElementById('date-start');
    const dateEndInput = document.getElementById('date-end');
    const filterButton = document.getElementById('filter-button');
    const clearFilterButton = document.getElementById('clear-filter-button');
    const eventosTableBody = document.getElementById('eventos-table-body');
    const loadingMessage = document.getElementById('loading-message');

    // Referências para os contadores e gráficos
    const totalVisitas = document.getElementById('total-visitas');
    const totalVisitasUnicas = document.getElementById('total-visitas-unicas');
    const totalWhatsapp = document.getElementById('total-whatsapp');
    const totalInstagram = document.getElementById('total-instagram');
    const totalEmail = document.getElementById('total-email');
    const totalLinkedin = document.getElementById('total-linkedin');

    // Instâncias dos gráficos
    let visitasChart, tiposChart;

    // Função para animar os contadores
    const animateCounter = (element, targetValue) => {
        let currentValue = 0;
        const duration = 1000;
        const step = targetValue / (duration / 16); // 60fps

        const updateCounter = () => {
            currentValue += step;
            if (currentValue < targetValue) {
                element.textContent = Math.ceil(currentValue);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = targetValue;
            }
        };

        requestAnimationFrame(updateCounter);
    };

    // Função para renderizar os gráficos
    const renderCharts = (eventsData) => {
        const visitasPorDia = {};
        const cliquesPorTipo = {
            'visita': 0, 'clique_whatsapp': 0, 'clique_instagram': 0, 'clique_email': 0, 'clique_linkedin': 0
        };

        eventsData.forEach(event => {
            const dateStr = event.timestamp.toDate().toLocaleDateString('pt-BR');
            if (visitasPorDia[dateStr]) {
                visitasPorDia[dateStr]++;
            } else {
                visitasPorDia[dateStr] = 1;
            }
            cliquesPorTipo[event.tipo]++;
        });

        // Gráfico de Visitas por Dia
        const visitasChartCtx = document.getElementById('visitasChart').getContext('2d');
        const visitasLabels = Object.keys(visitasPorDia);
        const visitasData = Object.values(visitasPorDia);

        if (visitasChart) visitasChart.destroy();
        visitasChart = new Chart(visitasChartCtx, {
            type: 'line',
            data: {
                labels: visitasLabels,
                datasets: [{
                    label: 'Visitas',
                    data: visitasData,
                    borderColor: '#3ab0ff',
                    backgroundColor: 'rgba(58, 176, 255, 0.2)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        ticks: { color: '#cbd5e1' },
                        grid: { color: '#475569' }
                    },
                    y: {
                        ticks: { color: '#cbd5e1', stepSize: 1 },
                        grid: { color: '#475569' }
                    }
                },
                plugins: {
                    legend: { labels: { color: '#cbd5e1' } }
                }
            }
        });

        // Gráfico de Cliques por Tipo
        const tiposChartCtx = document.getElementById('tiposChart').getContext('2d');
        const tiposLabels = Object.keys(cliquesPorTipo);
        const tiposData = Object.values(cliquesPorTipo);

        if (tiposChart) tiposChart.destroy();
        tiposChart = new Chart(tiposChartCtx, {
            type: 'bar',
            data: {
                labels: tiposLabels,
                datasets: [{
                    label: 'Número de Cliques',
                    data: tiposData,
                    backgroundColor: [
                        '#3ab0ff', '#16a34a', '#8b5cf6', '#d946ef', '#0ea5e9'
                    ]
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        ticks: { color: '#cbd5e1' },
                        grid: { color: '#475569' }
                    },
                    y: {
                        ticks: { color: '#cbd5e1', stepSize: 1 },
                        grid: { color: '#475569' }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    };

    // Função principal para buscar e exibir os dados
    const fetchAndDisplayEvents = async (startDate = null, endDate = null) => {
        loadingMessage.style.display = 'block';
        
        let visitasCount = 0;
        let whatsappCount = 0;
        let instagramCount = 0;
        let emailCount = 0;
        let linkedinCount = 0;
        const visitantesUnicos = new Set();
        const eventosArray = [];

        try {
            let eventosRef = db.collection('eventos');

            if (startDate && endDate) {
                const startTimestamp = firebase.firestore.Timestamp.fromDate(new Date(startDate));
                const endTimestamp = firebase.firestore.Timestamp.fromDate(new Date(endDate));
                eventosRef = eventosRef.where('timestamp', '>=', startTimestamp).where('timestamp', '<=', endTimestamp);
            }
            
            const eventosSnapshot = await eventosRef.orderBy('timestamp', 'desc').get();
            
            eventosTableBody.innerHTML = '';
            
            eventosSnapshot.forEach(doc => {
                const data = doc.data();
                eventosArray.push(data);
                
                const tipo = data.tipo;
                const timestamp = data.timestamp;

                switch (tipo) {
                    case 'visita':
                        visitasCount++;
                        if (data.sessionId) {
                            visitantesUnicos.add(data.sessionId);
                        }
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

            // Anima os contadores
            animateCounter(totalVisitas, visitasCount);
            animateCounter(totalVisitasUnicas, visitantesUnicos.size);
            animateCounter(totalWhatsapp, whatsappCount);
            animateCounter(totalInstagram, instagramCount);
            animateCounter(totalEmail, emailCount);
            animateCounter(totalLinkedin, linkedinCount);

            // Renderiza os gráficos
            renderCharts(eventosArray);
            
            loadingMessage.style.display = 'none';

        } catch (e) {
            console.error("Erro ao carregar dados do Firestore: ", e);
            loadingMessage.textContent = 'Erro ao carregar dados. Verifique o console.';
        }
    };

    // Event listeners para os botões de filtro
    filterButton.addEventListener('click', () => {
        const startDate = dateStartInput.value;
        const endDate = dateEndInput.value;
        fetchAndDisplayEvents(startDate, endDate);
    });

    clearFilterButton.addEventListener('click', () => {
        dateStartInput.value = '';
        dateEndInput.value = '';
        fetchAndDisplayEvents();
    });

    // Carregue os dados ao abrir o painel
    fetchAndDisplayEvents();
});