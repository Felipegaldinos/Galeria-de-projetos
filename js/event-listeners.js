document.addEventListener('DOMContentLoaded', () => {
    // A função é chamada diretamente
    // Verifica se a URL atual é a página principal (index.html)
    // E só então a visita é registrada.
    if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        handlePageVisit();
    }

    const linksDeContato = [
        { selector: 'a[aria-label="WhatsApp"]', tipo: 'clique_whatsapp' },
        { selector: 'a[aria-label="Instagram"]', tipo: 'clique_instagram' },
        { selector: 'a[aria-label="Email"]', tipo: 'clique_email' },
        { selector: 'a[aria-label="Linkdin"]', tipo: 'clique_linkedin' }
    ];

    linksDeContato.forEach(link => {
        const elemento = document.querySelector(link.selector);
        if (elemento) {
            elemento.addEventListener('click', () => {
                registrarEvento(link.tipo);
            });
        }
    });
});