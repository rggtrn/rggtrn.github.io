// RGGTRN
// Las fechas viven aquí; el HTML sólo tiene los contenedores.

// Vacío hasta que haya fechas confirmadas; con una sola, aparece la sección Gira.
// { cuando: { es, en }, que: { es, en }, estado: { es, en }, tentativa: true }
const proximas = [];

const archivo = [
  { cuando: '2024', que: { es: 'Audio-Visual Sessions, CCRMA, Stanford', en: 'Audio-Visual Sessions, CCRMA, Stanford' }, enlace: 'https://ccrma.stanford.edu/events/audio-visual-sessions-stanford-graduate-composers-with-rggtrn' },
  { cuando: '2022', que: { es: 'Xicalcoliuhqui, con Gabriel de Dios. CCEMx, Ciudad de México', en: 'Xicalcoliuhqui, with Gabriel de Dios. CCEMx, Mexico City' } },
  { cuando: '2019', que: { es: 'Algorave, Terminal Club-Antisocial, Ciudad de México', en: 'Algorave, Terminal Club-Antisocial, Mexico City' } },
  { cuando: '2019', que: { es: 'Algorave, LiveCode.NYC, Wonderville, Brooklyn', en: 'Algorave, LiveCode.NYC, Wonderville, Brooklyn' } },
  { cuando: '2019', que: { es: 'Noche de Museos, con Daniel Suástegui (Bash0). Museo de Arte Moderno, Ciudad de México', en: 'Noche de Museos, with Daniel Suástegui (Bash0). Museo de Arte Moderno, Mexico City' } },
  { cuando: '2019', que: { es: 'Algorave, Noox Lucerna, Ciudad de México', en: 'Algorave, Noox Lucerna, Mexico City' } },
  { cuando: '2019', que: { es: 'Linux Audio Conference, con fiestapirata.com. CCRMA, Stanford', en: 'Linux Audio Conference, with fiestapirata.com. CCRMA, Stanford' }, enlace: 'https://lac.linuxaudio.org/2019/#program' },
  { cuando: '2019', que: { es: 'Ex Teresa Arte Actual, Ciudad de México', en: 'Ex Teresa Arte Actual, Mexico City' } },
  { cuando: '2019', que: { es: 'Panke Gallery, Berlín', en: 'Panke Gallery, Berlin' } },
  { cuando: '2019', que: { es: 'VIU, Hangar, Barcelona', en: 'VIU, Hangar, Barcelona' } },
  { cuando: '2019', que: { es: 'Taller «Desarrollo de lenguajes computacionales para artistas», VIU, Hangar, Barcelona', en: 'Workshop “Developing computer languages for artists”, VIU, Hangar, Barcelona' } },
  { cuando: '2019', que: { es: 'AVLab ICLC 2019, presentado por In-Sonora. Medialab Prado, Madrid', en: 'AVLab ICLC 2019, presented by In-Sonora. Medialab Prado, Madrid' } },
  { cuando: '2019', que: { es: 'ICLC 2019, Medialab Prado, Madrid', en: 'ICLC 2019, Medialab Prado, Madrid' } },
  { cuando: '2018', que: { es: '404 Art Not Found, 316 Centro, Ciudad de México', en: '404 Art Not Found, 316 Centro, Mexico City' } },
  { cuando: '2018', que: { es: '2.º Encuentro de las Humanidades, Ágora de la UAM Cuajimalpa, Ciudad de México', en: '2nd Encuentro de las Humanidades, Ágora, UAM Cuajimalpa, Mexico City' } },
  { cuando: '2018', que: { es: 'Algorave Terminal, Ciudad de México', en: 'Algorave Terminal, Mexico City' } },
  { cuando: '2018', que: { es: 'Algorave Transpiksel, CCEMx, Ciudad de México', en: 'Algorave Transpiksel, CCEMx, Mexico City' } },
  { cuando: '2018', que: { es: 'Bellacode Tour: Bogotá, Manizales, Medellín, Lima, Quito', en: 'Bellacode Tour: Bogotá, Manizales, Medellín, Lima, Quito' } },
  { cuando: '2018', que: { es: 'Mensajes Sonoros #1, Centro de Cultura Digital, Ciudad de México', en: 'Mensajes Sonoros #1, Centro de Cultura Digital, Mexico City' }, enlace: 'https://centroculturadigital.mx/actividad/Bellacode-H1Wz9yPqG' },
  { cuando: '2017', que: { es: 'ICLC 2017, Morelia', en: 'ICLC 2017, Morelia' } },
  { cuando: '2017', que: { es: 'Subsónica, Biblioteca Vasconcelos, Ciudad de México', en: 'Subsónica, Biblioteca Vasconcelos, Mexico City' } },
  { cuando: '2017', que: { es: 'Algorave-Algorumba, Manizales', en: 'Algorave-Algorumba, Manizales' } },
  { cuando: '2016', que: { es: 'Algorave UK Tour: Leeds (ODI, 29 abr), Newcastle (30 abr), Hull, Londres (Ravensbourne, 6 may)', en: 'Algorave UK Tour: Leeds (ODI, 29 Apr), Newcastle (30 Apr), Hull, London (Ravensbourne, 6 May)' } },
  { cuando: '2015', que: { es: 'Algorave «Fiesta algorítmica», Rancho Electrónico, Ciudad de México (como ~ON)', en: 'Algorave “Fiesta algorítmica”, Rancho Electrónico, Mexico City (as ~ON)' } },
  { cuando: '2014', que: { es: 'Festival Databit.me, Arles (como ~ON)', en: 'Festival Databit.me, Arles (as ~ON)' } },
];

// Fotos: img/fotos/NN-nombre.jpg (hasta 1600 px) y NN-nombre-r.jpg (600 px).
// Pie: lugar y año.
const fotos = [
  ['01-on-muac', { es: '~ON, MUAC, Ciudad de México', en: '~ON, MUAC, Mexico City' }],
  ['02-leeds', { es: 'Algorave UK Tour, Leeds, 2016', en: 'Algorave UK Tour, Leeds, 2016' }],
  ['03-londres', { es: 'Algorave UK Tour, Londres, 2016', en: 'Algorave UK Tour, London, 2016' }],
  ['04-manizales-2017', { es: 'Algorave-Algorumba, Manizales, 2017', en: 'Algorave-Algorumba, Manizales, 2017' }],
  ['05-lima', { es: 'Bellacode Tour, Lima, 2018', en: 'Bellacode Tour, Lima, 2018' }],
  ['06-lima', { es: 'Bellacode Tour, Lima, 2018', en: 'Bellacode Tour, Lima, 2018' }],
  ['07-manizales', { es: 'Bellacode Tour, Manizales, 2018', en: 'Bellacode Tour, Manizales, 2018' }],
  ['08-bakana', { es: 'Bellacode Tour, 2018', en: 'Bellacode Tour, 2018' }],
  ['09-bogota', { es: 'Bellacode Tour, Bogotá, 2018', en: 'Bellacode Tour, Bogotá, 2018' }],
  ['10-medellin', { es: 'Bellacode Tour, Medellín, 2018', en: 'Bellacode Tour, Medellín, 2018' }],
  ['11-peru', { es: 'Bellacode Tour, Perú, 2018', en: 'Bellacode Tour, Peru, 2018' }],
  ['12-taller-lima', { es: 'Taller, Lima, 2018', en: 'Workshop, Lima, 2018' }],
  ['13-taller-lima', { es: 'Taller, Lima, 2018', en: 'Workshop, Lima, 2018' }],
  ['15-ccd', { es: 'Algorave, Centro de Cultura Digital, Ciudad de México, 2018', en: 'Algorave, Centro de Cultura Digital, Mexico City, 2018' }],
  ['17-iclc', { es: 'ICLC, Medialab Prado, Madrid, 2019', en: 'ICLC, Medialab Prado, Madrid, 2019' }],
  ['18-madrid', { es: 'Algorave, Madrid, 2019', en: 'Algorave, Madrid, 2019' }],
  ['18a-viu', { es: 'Algorave, VIU, Hangar, Barcelona, 2019', en: 'Algorave, VIU, Hangar, Barcelona, 2019' }],
  ['18a-viu-taller', { es: 'Taller «Desarrollo de lenguajes computacionales para artistas», VIU, Hangar, Barcelona, 2019', en: 'Workshop “Developing computer languages for artists”, VIU, Hangar, Barcelona, 2019' }],
  ['18b-panke', { es: 'Panke Gallery, Berlín, 2019', en: 'Panke Gallery, Berlin, 2019' }],
  ['19-lac', { es: 'Linux Audio Conference, CCRMA, Stanford, 2019', en: 'Linux Audio Conference, CCRMA, Stanford, 2019' }],
  ['20-grupo', { es: 'RGGTRN', en: 'RGGTRN' }],
  ['21-xicalco', { es: 'Xicalcoliuhqui, CCEMx, Ciudad de México, 2022', en: 'Xicalcoliuhqui, CCEMx, Mexico City, 2022' }],
  ['22-xicalco', { es: 'Xicalcoliuhqui, CCEMx, Ciudad de México, 2022', en: 'Xicalcoliuhqui, CCEMx, Mexico City, 2022' }],
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

  // El año va sólo en la primera fila de cada año
  document.getElementById('archivo').innerHTML = archivo.map((f, i) => {
    const que = f.enlace ? `<a href="${f.enlace}">${bilingue(f.que)}</a>` : bilingue(f.que);
    const nuevo = i === 0 || archivo[i - 1].cuando !== f.cuando;
    return `<li class="${nuevo ? 'nuevo-año' : ''}"><span class="cuando">${nuevo ? f.cuando : ''}</span><span class="que">${que}</span></li>`;
  }).join('');
}

// Idioma

const titulos = {
  es: 'RGGTRN: música algorítmica para bailar',
  en: 'RGGTRN: algorithmic dance music',
};

function ponerIdioma(lang) {
  document.documentElement.lang = lang;
  document.title = titulos[lang];
  localStorage.setItem('idioma', lang);
}

document.querySelector('.language-toggle').addEventListener('click', () => {
  ponerIdioma(document.documentElement.lang === 'es' ? 'en' : 'es');
});

// El idioma inicial lo pone el <script> del <head>; aquí se guarda y se aplica al título
ponerIdioma(document.documentElement.lang);

// Fotos: cuadrícula con la versión chica; al dar clic, la grande en un <dialog>

function pintarFotos() {
  document.getElementById('fotos-grid').innerHTML = fotos.map(([nombre, pie], i) => `
    <button type="button" data-i="${i}">
      <img loading="lazy" src="img/fotos/${nombre}-r.jpg" alt="${pie.es}">
    </button>`).join('');
}

const visor = document.getElementById('visor');
let actual = 0;

function mostrarFoto(i) {
  actual = (i + fotos.length) % fotos.length;
  const [nombre, pie] = fotos[actual];
  visor.querySelector('img').src = `img/fotos/${nombre}.jpg`;
  visor.querySelector('img').alt = pie[document.documentElement.lang];
  visor.querySelector('figcaption').innerHTML = bilingue(pie);
  if (!visor.open) visor.showModal();
}

document.getElementById('fotos-grid').addEventListener('click', e => {
  const boton = e.target.closest('button');
  if (boton) mostrarFoto(Number(boton.dataset.i));
});
visor.querySelector('.anterior').addEventListener('click', () => mostrarFoto(actual - 1));
visor.querySelector('.siguiente').addEventListener('click', () => mostrarFoto(actual + 1));
visor.querySelector('.cerrar').addEventListener('click', () => visor.close());
// Clic fuera de la foto (en el fondo del dialog) cierra
visor.addEventListener('click', e => { if (e.target === visor) visor.close(); });
document.addEventListener('keydown', e => {
  if (!visor.open) return;
  if (e.key === 'ArrowLeft') mostrarFoto(actual - 1);
  if (e.key === 'ArrowRight') mostrarFoto(actual + 1);
});

pintarFechas();
pintarFotos();
