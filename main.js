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
// Estructura inicial
const colorPicker = document.querySelector('#color-picker');
const colorText   = document.querySelector('#color-text');
const colorPreview = document.querySelector('#color-preview');
const colorHexLabel = document.querySelector('#color-hex');
const colorNameLabel = document.querySelector('#color-name');
const colorError = document.querySelector('#color-error');

const colorNames = {
  '#ff0000': 'Rojo',
  '#00ff00': 'Verde',
  '#0000ff': 'Azul',
  '#ffff00': 'Amarillo',
  '#000000': 'Negro',
  '#ffffff': 'Blanco',
  '#ffa500': 'Naranja',
  '#800080': 'Violeta'
};

// Estilos inline
colorPreview.style.height = '200px';
colorPreview.style.borderRadius = '12px';
colorPreview.style.border = '2px solid #ccc';
colorPreview.style.marginTop = '16px';
colorPreview.style.transition = 'background-color 0.2s ease';

// Función central para actualizar todo
function actualizarColor(hex) {
  const hexNormalizado = hex.toLowerCase();

  // actualizar preview
  colorPreview.style.backgroundColor = hexNormalizado;

  // actualizar textos
  colorHexLabel.textContent = `Color actual: ${hexNormalizado}`;
  const nombre = colorNames[hexNormalizado] || '';
  colorNameLabel.textContent = nombre ? ` (${nombre})` : '';

  // limpiar error
  colorError.textContent = '';

  // sincronizar ambos inputs
  colorPicker.value = hexNormalizado;
  colorText.value = hexNormalizado;
}

// Evento input del picker
colorPicker.addEventListener('input', (e) => {
  const valor = e.target.value; // viene en formato #rrggbb
  actualizarColor(valor);
});

// Evento keydown del text input (validando Enter + RegEx)
const hexRegex = /^#([0-9a-fA-F]{6})$/;

colorText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const valor = e.target.value.trim();

    if (hexRegex.test(valor)) {
      actualizarColor(valor);
    } else {
      colorError.textContent = 'Código hex inválido. Usa el formato #rrggbb.';
    }
  }
});

//  Estado inicial
actualizarColor(colorPicker.value);

// ----- EJERCICIO 3 ------
// Seleccionar elementos y crear función actualizarContador
const todoInput = document.querySelector('#todo-input');
const todoAddBtn = document.querySelector('#todo-add');
const todoList = document.querySelector('#todo-list');
const todoCount = document.querySelector('#todo-count');
const todoError = document.querySelector('#todo-error');

function actualizarContador() {
  const pendientes = document.querySelectorAll('#todo-list li:not(.completada)').length;
  todoCount.textContent = pendientes;
}

// Crear una función para agregar tareas
function agregarTarea() {
  const texto = todoInput.value.trim();

  if (texto === '') {
    // marcar error
    todoInput.classList.add('error');
    todoError.textContent = 'La tarea no puede estar vacía.';
    return;
  }

  // limpiar error
  todoInput.classList.remove('error');
  todoError.textContent = '';

  const li = document.createElement('li');

  const spanTexto = document.createElement('span');
  spanTexto.textContent = texto;

  const btnCompletar = document.createElement('button');
  btnCompletar.textContent = '✓';

  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = '✕';

  // eventos de los botones
  btnCompletar.addEventListener('click', () => {
    li.classList.toggle('completada');  // tacha o destacha
    actualizarContador();
  });

  btnEliminar.addEventListener('click', () => {
    li.remove();  // elimina el li del DOM
    actualizarContador();
  });

  // armar el li
  li.appendChild(spanTexto);
  li.appendChild(btnCompletar);
  li.appendChild(btnEliminar);

  todoList.appendChild(li);

  // limpiar input y actualizar contador
  todoInput.value = '';
  actualizarContador();
}

// Eventos para botón y Enter
todoAddBtn.addEventListener('click', agregarTarea);

todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarTarea();
  }
});