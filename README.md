# DOM & Eventos · Módulo 5 · Lección 3

Proyecto de práctica con **JavaScript vanilla** para manipulación del DOM y manejo de eventos, basado en una serie de mini‑ejercicios y un dashboard final interactivo.

El objetivo es construir interfaces dinámicas **sin frameworks** (sin React, sin jQuery) y **sin usar `innerHTML`**, trabajando únicamente con la API de nodos del DOM (`createElement`, `appendChild`, `classList`, `addEventListener`, etc.).
---

## Contenidos del proyecto

El proyecto está dividido en tres vistas principales:

- **`main.html`**  
  Página de entrada con un menú simple (maquetado con Bootstrap) que permite navegar a:
  - `mini-ejercicios.html`
  - `dashboard.html`

- **`mini-ejercicios.html` + `main.js`**  
  Contiene los 5 mini‑ejercicios de la lección:
  1. **Perfil de usuario dinámico**  
     Tarjeta de perfil generada por completo desde JS: imagen, nombre, ocupación y lista de habilidades.  
     Se practica:
     - `document.createElement`, `appendChild`
     - Asignación de atributos (`setAttribute`) y estilos con `element.style`
  2. **Galería de colores interactiva**  
     `input type="color"` sincronizado con un campo de texto para códigos hex y un div de preview.  
     Se practica:
     - Eventos `input` y `keydown (Enter)`
     - Validación con RegEx de códigos hex
     - Sincronización de valores entre inputs
  3. **Lista de tareas (TODO list)**  
     Lista dinámica de tareas con botones para completar (`✓`) y eliminar (`✕`).  
     Se practica:
     - `classList.add/remove/toggle`
     - `element.remove()`
     - Cálculo de tareas pendientes con `querySelectorAll('li:not(.completada)')`
  4. **Validación de formulario en tiempo real**  
     Formulario de registro con feedback inmediato en cada campo.  
     Se practica:
     - Eventos `keyup` y `blur`
     - Expresiones regulares para validar usuario, email y contraseñas
     - Habilitar/deshabilitar el botón de envío según el estado del formulario
  5. **Acordeón interactivo de FAQ**  
     Sección de preguntas frecuentes generada desde un array de objetos en JS.  
     Se practica:
     - Generación dinámica de estructura de acordeón
     - `classList.toggle('activo', condición)` para abrir/cerrar secciones
     - Acordeón exclusivo (solo una respuesta visible a la vez)

- **`dashboard.html` + `dashboard.js`**  
  Dashboard final que integra todo lo aprendido:
  - Tarjetas de métricas (usuarios, ventas, visitas, conversión) con actualización aleatoria y animación de color según suba o baje el valor.
  - Tabla de “últimas actividades” generada desde un array de objetos.
  - Búsqueda en tiempo real sobre las filas de la tabla.
  - Formulario inline para agregar nuevas actividades, con validación y mensaje de éxito.

---

## Tecnologías usadas

- **HTML5** para la estructura de las vistas (`main.html`, `mini-ejercicios.html`, `dashboard.html`).
- **CSS3** y estilos inline vía `element.style` para practicar manipulación de estilos desde JS.
- **JavaScript vanilla** para:
  - Crear y manipular nodos del DOM.
  - Manejar eventos (`click`, `input`, `keyup`, `blur`, `submit`, `DOMContentLoaded`).
  - Validar formularios con expresiones regulares.
- **Bootstrap 5** únicamente en `main.html` para estilizar el menú de navegación inicial.

---

## Estructura del repositorio

```text
EJERCICIO-CLASES-MOD5-LECCION3/
├── main.html              # Menú inicial con enlaces al dashboard y mini‑ejercicios
├── mini-ejercicios.html   # Ejercicios 1–5 (DOM & eventos)
├── dashboard.html         # Dashboard final interactivo
├── main.js                # Lógica de los mini‑ejercicios (perfil, colores, TODO, form, FAQ)
├── dashboard.js           # Lógica del dashboard (métricas, tabla, búsqueda, formulario)
└── styles.css             # Estilos globales compartidos (opcional)
```

Cada vista HTML carga solo el JS que necesita:

- `mini-ejercicios.html` → `<script type="module" src="main.js"></script>`
- `dashboard.html` → `<script src="dashboard.js"></script>`

---

## Cómo ejecutar el proyecto

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/EJERCICIO-CLASES-MOD5-LECCION3.git
   cd EJERCICIO-CLASES-MOD5-LECCION3
   ```

2. Abre el archivo **`main.html`** en tu navegador, o levanta un servidor local (por ejemplo, VS Code Live Server).

3. Desde el menú inicial puedes navegar a:

   - **Mini‑ejercicios 1–5** (`mini-ejercicios.html`)
   - **Dashboard interactivo** (`dashboard.html`)

No se requiere ningún build ni instalación de dependencias; es un proyecto 100% estático.

---

## Decisiones técnicas importantes

- **Sin `innerHTML`**  
  Todo el contenido dinámico se genera con:
  - `document.createElement`
  - `textContent`
  - `appendChild` / `insertBefore`
  Esto obliga a trabajar directamente con la API del DOM y evita mezclar HTML dentro de strings.

- **Eventos bien diferenciados**
  - `click`: botones de agregar, actualizar métricas, abrir/cerrar formularios y acordeón.
  - `input` / `keyup`: búsqueda en tiempo real y validación de campos mientras el usuario escribe.
  - `blur`: validación al salir del campo en el formulario de registro.
  - `submit`: formularios de registro y de nueva actividad en el dashboard.

- **Organización en funciones**  
  El código se agrupa en funciones descriptivas como:
  - `inicializarDashboard()`
  - `generarTarjetas()`
  - `actualizarMetricas()`
  - `generarTabla()`
  - `configurarEventosMetricas()`
  - `configurarEventosBusqueda()`
  - `configurarEventosFormulario()`
  Esto facilita la lectura y evita bloques largos de lógica en línea.

---

## Puedes ver el resultado en:

https://zakkdruzer.github.io/m5-l3-dom/
