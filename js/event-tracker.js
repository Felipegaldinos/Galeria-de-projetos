// A função 'registrarEvento' agora usa a variável global 'db' e o objeto global 'firebase'
async function registrarEvento(tipo, sessionId = null) {
    try {
        const eventosRef = db.collection("eventos");
        const docData = {
            tipo: tipo,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        };
        // Adiciona o sessionId se ele existir (para visitas)
        if (sessionId) {
            docData.sessionId = sessionId;
        }
        const docRef = await eventosRef.add(docData);
        console.log("Evento registrado com sucesso! ID do documento: ", docRef.id);
    } catch (e) {
        console.error("Erro ao registrar evento: ", e);
    }
}

// Funções para manipular cookies (já fornecidas antes)
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) === 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return "";
}

// ----- NOVO CÓDIGO para a visita única -----
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function handlePageVisit() {
    let sessionId = getCookie("sessionId");
    if (!sessionId) {
        sessionId = generateUUID();
        setCookie("sessionId", sessionId, 1); // Expira em 1 dia
    }
    registrarEvento('visita', sessionId);
}