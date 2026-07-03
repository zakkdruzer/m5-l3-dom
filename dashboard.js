// Datos iniciales
const metricas = [
  { id: 'usuarios', titulo: 'Usuarios activos', valor: 1284, unidad: 'usuarios', icono: '👤' },
  { id: 'ventas', titulo: 'Ventas del mes', valor: 85000, unidad: 'CLP', icono: '💰' },
  { id: 'visitas', titulo: 'Visitas totales', valor: 45231, unidad: 'visitas', icono: '📈' },
  { id: 'conversion', titulo: 'Tasa de conversión', valor: 3.4, unidad: '%', icono: '⚙️' }
];

const actividades = [
  { fecha: '2026-06-29', usuario: 'juanp', accion: 'Inicio sesión', estado: 'exitoso' },
  { fecha: '2026-06-29', usuario: 'mariaf', accion: 'Creó una cuenta', estado: 'exitoso' },
  { fecha: '2026-06-28', usuario: 'carlosr', accion: 'Intentó pagar', estado: 'error' },
  { fecha: '2026-06-28', usuario: 'admin', accion: 'Actualizó configuración', estado: 'pendiente' },
  { fecha: '2026-06-27', usuario: 'sofiag', accion: 'Descargó reporte', estado: 'exitoso' },
  { fecha: '2026-06-27', usuario: 'juanp', accion: 'Cambió contraseña', estado: 'exitoso' }
];

// Inicializar el dashboard
function inicializarDashboard() {
  generarTarjetas();
  generarTabla();
  configurarEventos();
}

document.addEventListener('DOMContentLoaded', inicializarDashboard);

// Generar tarjetas de métricas
function generarTarjetas() {
  const grid = document.querySelector('#metricas-grid');

  metricas.forEach((m) => {
    const card = document.createElement('div');
    card.style.backgroundColor = '#ffffff';
    card.style.borderRadius = '12px';
    card.style.padding = '12px 14px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.gap = '4px';
    card.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';

    const icono = document.createElement('div');
    icono.textContent = m.icono;
    icono.style.fontSize = '1.6rem';

    const titulo = document.createElement('div');
    titulo.textContent = m.titulo;
    titulo.style.fontSize = '0.9rem';
    titulo.style.color = '#7f8c8d';

    const valor = document.createElement('div');
    valor.textContent = m.valor + ' ' + m.unidad;
    valor.style.fontSize = '1.3rem';
    valor.style.fontWeight = '600';
    valor.dataset.idMetrica = m.id; // para encontrarla al actualizar

    card.appendChild(icono);
    card.appendChild(titulo);
    card.appendChild(valor);

    grid.appendChild(card);
  });
}

// Actualizar métricas (evento click)
// Comentario: evento click en botón "Actualizar métricas"
function configurarEventosMetricas() {
  const btnActualizar = document.querySelector('#btn-actualizar-metricas');
  btnActualizar.addEventListener('click', actualizarMetricas);
}

function actualizarMetricas() {
  metricas.forEach((m) => {
    const valorAnterior = m.valor;
    let nuevoValor;

    if (m.id === 'usuarios') {
      nuevoValor = numeroAleatorio(800, 2000);
    } else if (m.id === 'ventas') {
      nuevoValor = numeroAleatorio(50000, 200000);
    } else if (m.id === 'visitas') {
      nuevoValor = numeroAleatorio(20000, 80000);
    } else if (m.id === 'conversion') {
      nuevoValor = (Math.random() * 5).toFixed(2); // 0–5%
    }

    m.valor = Number(nuevoValor);

    const valorElemento = document.querySelector(
      `[data-id-metrica="${m.id}"]`
    );

    const colorOriginal = valorElemento.style.color || '#2c3e50';
    const esMayor = m.valor > valorAnterior;
    const colorCambio = esMayor ? '#27ae60' : '#e74c3c';

    valorElemento.textContent = m.valor + ' ' + m.unidad;
    valorElemento.style.color = colorCambio;

    setTimeout(() => {
      valorElemento.style.color = colorOriginal;
    }, 1500);
  });
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar tabla de actividades
function generarTabla() {
  const tbody = document.querySelector('#tabla-actividades tbody');
  tbody.textContent = ''; // limpiar por si se regenera

  actividades.forEach((act) => {
    const fila = document.createElement('tr');

    const tdFecha = document.createElement('td');
    tdFecha.textContent = act.fecha;

    const tdUsuario = document.createElement('td');
    tdUsuario.textContent = act.usuario;

    const tdAccion = document.createElement('td');
    tdAccion.textContent = act.accion;

    const tdEstado = document.createElement('td');
    tdEstado.textContent = act.estado;

    if (act.estado === 'exitoso') {
      tdEstado.style.backgroundColor = '#39da5e';
    } else if (act.estado === 'pendiente') {
      tdEstado.style.backgroundColor = '#fff128';
    } else if (act.estado === 'error') {
      tdEstado.style.backgroundColor = '#fc3b4b';
    }

    fila.appendChild(tdFecha);
    fila.appendChild(tdUsuario);
    fila.appendChild(tdAccion);
    fila.appendChild(tdEstado);

    tbody.appendChild(fila);
  });
}

// Búsqueda en tiempo real (evento input)
function configurarEventosBusqueda() {
  const inputBusqueda = document.querySelector('#busqueda-input');
  const estadoBusqueda = document.querySelector('#estado-busqueda');

  inputBusqueda.addEventListener('input', () => {
    const termino = inputBusqueda.value.toLowerCase().trim();
    const tbody = document.querySelector('#tabla-actividades tbody');
    const filas = Array.from(tbody.querySelectorAll('tr'));
    let coincidencias = 0;

    filas.forEach((fila) => {
      const textoFila = fila.textContent.toLowerCase();
      const coincide = textoFila.includes(termino);
      fila.style.display = coincide ? '' : 'none';
      if (coincide) coincidencias++;
    });

    if (termino && coincidencias === 0) {
      estadoBusqueda.textContent = `No se encontraron resultados para "${termino}".`;
    } else {
      estadoBusqueda.textContent = '';
    }
  });
}

// Formulario “Agregar actividad” (click + submit)
function configurarEventosFormulario() {
  const btnAgregar = document.querySelector('#btn-agregar-actividad');
  const form = document.querySelector('#form-actividad');
  const mensaje = document.querySelector('#actividad-mensaje');
  const errorSpan = document.querySelector('#actividad-error');

  btnAgregar.addEventListener('click', () => {
    form.classList.toggle('visible');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuarioInput = document.querySelector('#actividad-usuario');
    const accionInput = document.querySelector('#actividad-accion');
    const estadoSelect = document.querySelector('#actividad-estado');

    const usuario = usuarioInput.value.trim();
    const accion = accionInput.value.trim();
    const estado = estadoSelect.value;

    if (!usuario || !accion) {
      errorSpan.textContent = 'Usuario y acción son obligatorios.';
      return;
    }

    errorSpan.textContent = '';

    const fechaActual = new Date().toLocaleDateString('es-CL');

    const nuevaActividad = {
      fecha: fechaActual,
      usuario,
      accion,
      estado
    };

    actividades.unshift(nuevaActividad); // agregar al inicio
    generarTabla(); // regenerar tabla

    usuarioInput.value = '';
    accionInput.value = '';
    estadoSelect.value = 'exitoso';

    form.classList.remove('visible');

    mensaje.textContent = 'Actividad agregada correctamente';
    mensaje.classList.add('visible');

    setTimeout(() => {
      mensaje.classList.remove('visible');
    }, 1000);
  });
}

// Agrupar todos los eventos
function configurarEventos() {
  configurarEventosMetricas();
  configurarEventosBusqueda();
  configurarEventosFormulario();
}