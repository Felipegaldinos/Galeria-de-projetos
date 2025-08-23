// A função 'registrarEvento' agora usa a variável global 'db'
// e o objeto global 'firebase'
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

// ----- NOVO CÓDIGO PARA TRATAR O COOKIE -----

/**
 * Define um cookie com um nome e valor, e um número de dias para expirar.
 * @param {string} name - O nome do cookie.
 * @param {string} value - O valor do cookie.
 * @param {number} days - O número de dias até o cookie expirar.
 */
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

/**
 * Pega o valor de um cookie pelo nome.
 * @param {string} name - O nome do cookie.
 * @returns {string} - O valor do cookie ou uma string vazia se não for encontrado.
 */
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

// ----- Modificação na chamada da função de registro de eventos -----
// Agora, ao invés de chamar registrarEvento('visita') diretamente,
// você vai verificar se o cookie 'site_visitado' existe.

// Crie uma nova função para lidar com o evento de visita
function handlePageVisit() {
    const visitedCookie = getCookie("site_visitado");
    if (visitedCookie === "") {
        // Se o cookie não existe, registra a visita e define o cookie
        registrarEvento('visita');
        setCookie("site_visitado", "true", 1); // Expira em 1 dia
    }
}

// Agora, no seu event-listeners.js, você chamará handlePageVisit()
// em vez de registrarEvento('visita')