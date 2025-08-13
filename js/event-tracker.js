// Este arquivo agora usa as variáveis globais 'db' e 'firebase'
// A função 'registrarEvento' também será global

async function registrarEvento(tipo) {
    try {
        const eventosRef = db.collection("eventos");
        const docRef = await eventosRef.add({
            tipo: tipo,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("Evento registrado com sucesso! ID do documento: ", docRef.id);
    } catch (e) {
        console.error("Erro ao registrar evento: ", e);
    }
}