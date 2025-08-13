// Este código funciona tanto no seu navegador (localmente) quanto no Vercel
let firebaseConfig = {};

// Verifica se o objeto 'process' existe (ambiente de servidor como no Vercel)
if (typeof process !== 'undefined' && process.env.FIREBASE_API_KEY) {
    firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID
    };
} else {
    // Se o código está rodando no navegador (localmente),
    // ele usa as chaves diretamente do arquivo.
    firebaseConfig = {
        apiKey: "SUA_CHAVE_DE_API_AQUI", // Insira sua chave real aqui
        authDomain: "portifolio-felipe-23fdc.firebaseapp.com",
        projectId: "portifolio-felipe-23fdc",
        storageBucket: "portifolio-felipe-23fdc.firebasestorage.app",
        messagingSenderId: "621575635375",
        appId: "1:621575635375:web:90c0bb014f18d458172f5a"
    };
}

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();