// RGGTRN
// Las fechas viven aquí; el HTML sólo tiene los contenedores.

// Vacío hasta que haya fechas confirmadas; con una sola, aparece la sección Gira.
// { cuando: { es, en }, que: { es, en }, estado: { es, en }, tentativa: true }
const proximas = [];

const archivo = [
  { cuando: '2024', que: { es: 'Audio-Visual Sessions, CCRMA, Stanford', en: 'Audio-Visual Sessions, CCRMA, Stanford' } },
  { cuando: '2022', que: { es: 'Xicalcoliuhqui, con Gabriel de Dios. CCEMx, Ciudad de México', en: 'Xicalcoliuhqui, with Gabriel de Dios. CCEMx, Mexico City' } },
  { cuando: '2019', que: { es: 'Linux Audio Conference, CCRMA, Stanford', en: 'Linux Audio Conference, CCRMA, Stanford' } },
  { cuando: '2019', que: { es: 'VIU, Hangar, Barcelona', en: 'VIU, Hangar, Barcelona' } },
  { cuando: '2019', que: { es: 'ICLC 2019, Medialab Prado, Madrid', en: 'ICLC 2019, Medialab Prado, Madrid' } },
  { cuando: '2018', que: { es: '404 Art Not Found, 316 Centro, Ciudad de México', en: '404 Art Not Found, 316 Centro, Mexico City' } },
  { cuando: '2018', que: { es: 'Algorave Terminal, Ciudad de México', en: 'Algorave Terminal, Mexico City' } },
  { cuando: '2018', que: { es: 'Algorave Transpiksel, CCEMx, Ciudad de México', en: 'Algorave Transpiksel, CCEMx, Mexico City' } },
  { cuando: '2018', que: { es: 'Bellacode Tour: Bogotá, Manizales, Medellín, Lima, Quito', en: 'Bellacode Tour: Bogotá, Manizales, Medellín, Lima, Quito' } },
  { cuando: '2018', que: { es: 'Mensajes Sonoros #1, Centro de Cultura Digital, Ciudad de México', en: 'Mensajes Sonoros #1, Centro de Cultura Digital, Mexico City' }, enlace: 'https://centroculturadigital.mx/actividad/Bellacode-H1Wz9yPqG' },
  { cuando: '2017', que: { es: 'Algorave-Algorumba, Manizales', en: 'Algorave-Algorumba, Manizales' } },
  { cuando: '2016', que: { es: 'Algorave UK Tour: Leeds, Newcastle, Hull, Londres', en: 'Algorave UK Tour: Leeds, Newcastle, Hull, London' } },
  { cuando: '2014', que: { es: 'Festival Databit.me, Arles (como ~ON)', en: 'Festival Databit.me, Arles (as ~ON)' } },
];

// Un nodo por idioma; el CSS esconde el que no toca
function bilingue(texto) {
  if (typeof texto === 'string') return texto;
  return `<span lang="es">${texto.es}</span><span lang="en">${texto.en}</span>`;
}

function pintarFechas() {
  document.getElementById('gira').hidden = proximas.length === 0;
  document.getElementById('proximas').innerHTML = proximas.map(f => `
    <li class="${f.tentativa ? 'tentativa' : ''}">
      <span class="cuando">${bilingue(f.cuando)}</span>
      <span class="que">${bilingue(f.que)}</span>
      <span class="estado">${bilingue(f.estado)}</span>
    </li>`).join('');

  document.getElementById('archivo').innerHTML = archivo.map(f => {
    const que = f.enlace ? `<a href="${f.enlace}">${bilingue(f.que)}</a>` : bilingue(f.que);
    return `<li><span class="cuando">${f.cuando}</span><span class="que">${que}</span></li>`;
  }).join('');
}

// Idioma

function ponerIdioma(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('idioma', lang);
}

document.querySelector('.language-toggle').addEventListener('click', () => {
  ponerIdioma(document.documentElement.lang === 'es' ? 'en' : 'es');
});

// ?lang=es|en (indexES.html redirige con ?lang=es), luego lo guardado, luego el navegador
const pedido = new URLSearchParams(location.search).get('lang');
const guardado = localStorage.getItem('idioma');
ponerIdioma(['es', 'en'].includes(pedido) ? pedido
  : guardado || (navigator.language.startsWith('es') ? 'es' : 'en'));

// Videos: sólo la miniatura hasta que alguien da clic

document.querySelectorAll('.video').forEach(v => {
  const id = v.dataset.youtube;
  const boton = v.querySelector('button');
  boton.style.backgroundImage = `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`;
  boton.addEventListener('click', () => {
    boton.outerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  });
});

pintarFechas();
