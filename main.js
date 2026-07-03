// ----- EJERCICIO 1 ------
// Definir el objeto perfil
const perfil = {
  nombre: 'José',
  apellido: 'Pedreros',
  ocupacion: 'Cineasta',
  avatar: 'https://i.pravatar.cc/120',
  habilidades: ['Edición', 'Grabaciones', 'Iluminación', 'Efectos especiales']
};

// Seleccionar el contenedor del DOM
const perfilContainer = document.querySelector('#perfil-container');  // selecciona el contenedor por id

// Crear el contenedor principal de la tarjeta
const card = document.createElement('div');

card.style.width = '320px';
card.style.padding = '16px';
card.style.borderRadius = '12px';
card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
card.style.backgroundColor = '#ffffff';
card.style.display = 'flex';
card.style.flexDirection = 'column';
card.style.alignItems = 'center';
card.style.gap = '12px';
card.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif';

// Crear la imagen del avatar con setAttribute
const avatarImg = document.createElement('img');

avatarImg.setAttribute('src', perfil.avatar);
avatarImg.setAttribute(
  'alt',
  `Foto de perfil de ${perfil.nombre} ${perfil.apellido}`
);

avatarImg.style.width = '120px';
avatarImg.style.height = '120px';
avatarImg.style.borderRadius = '50%';
avatarImg.style.objectFit = 'cover';
avatarImg.style.border = '3px solid #3498db';

// Añadimos la imagen como hijo de la tarjeta
card.appendChild(avatarImg);

// Añade nombre completo
const nombreElemento = document.createElement('h2');
nombreElemento.textContent = `${perfil.nombre} ${perfil.apellido}`;

nombreElemento.style.margin = '8px 0 0';
nombreElemento.style.fontSize = '1.4rem';
nombreElemento.style.color = '#2c3e50';

card.appendChild(nombreElemento);

// Añade ocupación
const ocupacionElemento = document.createElement('p');
ocupacionElemento.textContent = perfil.ocupacion;

ocupacionElemento.style.margin = '4px 0 0';
ocupacionElemento.style.fontSize = '0.95rem';
ocupacionElemento.style.color = '#7f8c8d';

card.appendChild(ocupacionElemento);

// Añade título y lista de habilidades
const habilidadesTitulo = document.createElement('h3');
habilidadesTitulo.textContent = 'Habilidades';

habilidadesTitulo.style.margin = '12px 0 4px';
habilidadesTitulo.style.fontSize = '1rem';
habilidadesTitulo.style.color = '#2c3e50';

card.appendChild(habilidadesTitulo);

// La lista (ul + li) recorriendo el array perfil.habilidades
const habilidadesList = document.createElement('ul');

habilidadesList.style.listStyle = 'none';
habilidadesList.style.padding = '0';
habilidadesList.style.margin = '0';
habilidadesList.style.display = 'flex';
habilidadesList.style.flexWrap = 'wrap';
habilidadesList.style.gap = '8px';
habilidadesList.style.justifyContent = 'center';

perfil.habilidades.forEach((habilidad) => {
  const li = document.createElement('li');
  li.textContent = habilidad;

  li.style.padding = '6px 10px';
  li.style.borderRadius = '999px';
  li.style.backgroundColor = '#ecf0f1';
  li.style.fontSize = '0.85rem';
  li.style.color = '#34495e';

  habilidadesList.appendChild(li);
});

card.appendChild(habilidadesList);


// Insertar la tarjeta en el DOM
perfilContainer.appendChild(card);

// ----- EJERCICIO 2 ------