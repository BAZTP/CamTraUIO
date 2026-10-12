# CamTraUIO · Pulso de Quito

Laboratorio interactivo de movilidad para Quito. Interfaz adaptable con cuatro vistas: panorama urbano, exploración de rutas, visión vial y análisis de movilidad.

## Ejecutar

Requiere Node.js 22 o superior. No hay dependencias externas, credenciales ni descargas de mapas.

```sh
npm run check
npm start
```

El servidor usa el puerto 3000. Puede cambiarse con `PORT`. Los archivos del cliente están en `public/`.

## Qué puedes explorar

- Modificar la hora entre las 06:00 y las 22:00 en intervalos de 15 minutos, activar lluvia y simular un incidente en la Av. 10 de Agosto.
- Consultar indicadores y congestión por corredor, ver capas de tráfico y cámaras y acercar el mapa.
- Comparar dos alternativas entre La Carolina, Centro Histórico, Quitumbe y El Labrador; invertir origen/destino y seleccionar un trazo.
- Explorar una proyección a una hora y un perfil horario sintético.
- Observar una escena animada generada con autos, buses, motos y cajas asignadas por la simulación; cambiar de cámara y pausar la animación.
- Comparar salidas durante los siguientes 60 minutos. La recomendación minimiza duración de viaje; muestra la espera y no promete llegar antes.
- Guardar hasta seis trayectos favoritos en el navegador, recuperarlos y eliminarlos. Si el almacenamiento no está disponible, se conservan únicamente durante la sesión.
- Comparar la congestión de cada corredor con el escenario base a la misma hora, sin lluvia ni incidente.
- Exportar a CSV los valores del escenario y restablecer sus parámetros.

## Datos y metodología

**Todos los datos son simulados.** La cartografía vectorial usa coordenadas aproximadas de lugares y corredores de Quito, sin una fuente cartográfica de navegación. Las vías secundarias y edificios son ilustraciones. No hay calles verificadas, instrucciones de giro, tráfico en vivo ni cámaras conectadas.

La demanda usa curvas sintéticas con picos matinal y vespertino. Los corredores aplican factores distintos; la lluvia añade 13 puntos y el incidente añade 27 puntos al corredor afectado, 8 a Mariscal Sucre y 4 a los restantes. La congestión se limita a 8–96%. Las velocidades se derivan de esa congestión.

Las rutas conectan los lugares al trazo aproximado de tres corredores, estiman distancias mediante Haversine con un factor ilustrativo de 1,15 y calculan tiempos a partir de la velocidad simulada. Se muestran las dos opciones de menor tiempo. Esto no determina transitabilidad, direcciones de circulación ni trayectos legales.

El perfil diario y la proyección evalúan la misma función sintética; no son observaciones históricas ni predicciones de un modelo entrenado. Las cajas de la animación se dibujan alrededor de objetos generados; no son resultados de visión artificial. No se procesa ni almacena video, matrículas o información personal.

## Integraciones futuras

Para un sistema operativo se necesitan fuentes autorizadas de tráfico, un motor de rutas con cartografía actualizada, acceso autorizado a cámaras, almacenamiento histórico y evaluación de modelos de conteo y predicción. El reconocimiento de matrículas requiere definir autorización, controles de acceso y retención antes de incorporarlo.

## Versión autónoma

Ejecuta `npm run build` para empaquetar el HTML, CSS y JavaScript en `dist/index.html`, un único archivo que puedes abrir sin servidor o alojar en un servicio estático. `localStorage` depende de las restricciones de cada navegador, especialmente al abrir archivos locales; la aplicación mantiene los favoritos en memoria si no puede guardarlos.
