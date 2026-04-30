

---

## Archivos del proyecto

```
pwa-ruta/
├── index.html          ← App principal
├── manifest.json       ← Config PWA (instalación en móvil)
├── sw.js               ← Service Worker (offline)
├── ruta.geojson        ← Trazado de la ruta (ida + vuelta)
├── senalizacion.geojson ← Señales de giro y avisos
└── atencion.geojson    ← Puntos de especial atención
```

---

---

## Instalación en el móvil

1. Abre la URL en Chrome (Android) o Safari (iOS)
2. Aparecerá un banner "Añadir a pantalla de inicio" — o busca la opción en el menú del navegador
3. Confirma → el icono de la app aparece en tu pantalla de inicio
4. ¡Listo! Se abre en pantalla completa sin barra del navegador

---

## Funcionalidades

- **2 rutas:**

---

## Señalización incluida (campo "Ida")

| Tipo          | Icono | Descripción |
|---------------|-------|-------------|
| salida        | 🚦    | Punto de inicio |
| recto         | ↑     | Continuar recto |
| izquierda     | ↰     | Girar a la izquierda |
| derecha       | ↱     | Girar a la derecha |
| rotonda       | ↺     | Tomar rotonda |
| peligro       | ⚠️    | Zona de peligro |
| vado inundable | 🌊   | Cruce de vado |
| izquierda peligro | ⚠️↰ | Giro peligroso |

---


