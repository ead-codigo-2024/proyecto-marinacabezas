const currentUrl = window.location.pathname;

const navLinks = {
    '/proyectos.html': 'nav-proyectos',
    '/de-mantas-y-chamantos.html': 'nav-proyectos',
    '/Entrevista.html': 'nav-entrevista',
    '/Dossier.html': 'nav-dossier',
    '/Enfoques.html': 'nav-enfoques',
    '/Emergentes.html': 'nav-emergentes'
};

const activeLinkId = navLinks[currentUrl];

if (activeLinkId) {
    document.getElementById(activeLinkId).classList.add('active');
}