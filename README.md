# PWA Navegación Ciclista · Ruta del Vino Montilla-Moriles
## Real Federación Española de Ciclismo

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

## Despliegue en GitHub Pages (recomendado para prototipo)

1. Crea un repositorio en GitHub (público)
2. Sube todos los archivos de esta carpeta
3. Ve a **Settings → Pages → Source: main / root**
4. En 2 minutos tendrás una URL tipo: `https://tuusuario.github.io/ruta-vino/`

## Despliegue en Hostinger

1. Conéctate al panel de Hostinger
2. Ve a **Administrador de archivos → public_html**
3. Sube todos los archivos
4. La app estará en tu dominio: `https://tudominio.com/`

---

## Instalación en el móvil

1. Abre la URL en Chrome (Android) o Safari (iOS)
2. Aparecerá un banner "Añadir a pantalla de inicio" — o busca la opción en el menú del navegador
3. Confirma → el icono de la app aparece en tu pantalla de inicio
4. ¡Listo! Se abre en pantalla completa sin barra del navegador

---

## Funcionalidades

- **2 rutas:** Puente Genil → Moriles e inversa (Moriles → Puente Genil)
- **GPS en tiempo real** con marcador de posición
- **Banner de instrucción** con la próxima señal de giro
- **Alertas automáticas** al acercarte a 40m de cualquier señal o punto de atención
- **Vibración** al dispararse una alerta (si el dispositivo lo soporta)
- **Estadísticas** en vivo: km recorridos, km restantes, velocidad, próxima señal
- **WakeLock** — la pantalla no se apaga mientras navegas
- **Offline** — una vez cargada, funciona sin conexión (tiles de mapa se cachean)

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

## Próximas mejoras sugeridas

- [ ] Añadir capa de POIs (bodegas, restaurantes, alojamientos)
- [ ] Perfil de elevación interactivo
- [ ] Descarga de tiles offline por zonas
- [ ] Modo vista aérea (satélite)
- [ ] Backend para rutas dinámicas (múltiples rutas RFEC)
- [ ] Integración con Strava/Komoot

---

*Desarrollado como prototipo para el proyecto Bike Territory / RFEC*
