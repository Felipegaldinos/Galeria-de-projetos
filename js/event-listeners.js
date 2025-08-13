// Este arquivo agora usa a função global 'registrarEvento'

document.addEventListener('DOMContentLoaded', () => {
    // A função é chamada diretamente
    registrarEvento('visita');

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