# Glasgow · Weekend Plan

Mini web responsiva (en inglés, para tus invitados) para elegir qué hacer en Glasgow un
sábado/domingo, con la distancia aproximada **en bici** desde Hazelwood House
(52 First Gardens, G41 5NB) a cada uno de los 74 lugares.

- Filtra por zona o tipo de plan, o busca por nombre.
- Ordena por distancia en bici, nombre o zona.
- Toca **Sat** / **Sun** en cualquier tarjeta para añadirla a ese día.
- Cada tarjeta tiene un botón verde de WhatsApp para mandar directo "Quiero hacer este plan contigo" para ese lugar.
- El botón inferior abre un resumen del día con el botón "Send [day] plan on WhatsApp", que arma un mensaje con toda la lista + el tiempo total en bici.
- Tu selección se guarda en el propio navegador (`localStorage`), así que si cierras y vuelves a abrir la página en el mismo celular, sigue ahí.

No usa build tools ni dependencias: son 4 archivos estáticos.

## ⚠️ Antes de publicarla: pon tu número de WhatsApp

Abre `app.js` y edita esta línea cerca del inicio:

```js
const WHATSAPP_NUMBER = "34600000000";
```

Reemplázala con tu número real, **con código de país, solo dígitos** (sin "+", sin espacios,
sin el 0 inicial). Por ejemplo:
- España: `346XXXXXXXX`
- Reino Unido: `447XXXXXXXXX`
- México: `521XXXXXXXXXX`

Sin este cambio, los botones de WhatsApp abrirán un chat a un número de prueba que no es el tuyo.

El botón "Want to suggest something to Cristina?" usa el mismo número — abre WhatsApp con un
mensaje que empieza "Hi Cristina! I have a recommendation for you: " listo para que la persona
solo escriba su sugerencia y le dé enviar.

## Publicarla en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede ser público o privado, pero Pages gratis requiere público a menos que tengas GitHub Pro/Team).
2. Sube estos 4 archivos a la raíz del repo: `index.html`, `style.css`, `app.js`, `data.js`.
   - Vía web: "Add file" → "Upload files", arrastra los 4 archivos, y haz commit.
   - Vía terminal:
     ```bash
     git init
     git add index.html style.css app.js data.js README.md
     git commit -m "Glasgow day planner"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
     git push -u origin main
     ```
3. En GitHub, ve a **Settings → Pages**.
4. En "Build and deployment" → "Source", elige **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/ (root)`, y dale **Save**.
6. Espera 1–2 minutos. Tu página quedará en:
   `https://TU_USUARIO.github.io/TU_REPO/`
7. Abre ese link desde el celular y agrégalo a la pantalla de inicio (Compartir → "Añadir a inicio") para que se sienta como una app.

## Archivos

| Archivo      | Qué hace |
|--------------|----------|
| `index.html` | Estructura de la página |
| `style.css`  | Estilos (paleta heather/sandstone/teal, mobile-first) |
| `data.js`    | Los 74 lugares con zona, tipo, precio, descripción y minutos en bici |
| `app.js`     | Filtros, orden, selección por día y guardado local |

## Actualizar los datos

Todo el contenido vive en `data.js` como un array `PLACES`. Cada entrada tiene:

```js
{
  place: "Nombre del lugar",
  location: "Zona",
  price: "Free–£15",
  type: "Tipo de plan",
  time: "2–3 hrs",       // tiempo aprox. en el lugar
  desc: "Descripción corta",
  combine: "Con qué combinarlo",
  bike: 19               // minutos aprox. en bici desde Hazelwood House
}
```

Para añadir o editar un lugar, edita ese array directamente — no hace falta tocar el HTML ni el JS.
