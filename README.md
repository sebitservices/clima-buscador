# Buscador de Clima

![Buscador de Clima](https://openweathermap.org/img/wn/02d@2x.png)

## Descripción

Buscador de Clima es una aplicación web que permite consultar el estado del tiempo actual en cualquier ciudad del mundo. La aplicación utiliza la API de OpenWeatherMap para obtener datos meteorológicos en tiempo real y presenta la información de manera clara y atractiva.

## Características

- Búsqueda de clima por nombre de ciudad
- Detección automática de ubicación (geolocalización)
- Información detallada sobre:
  - Temperatura actual
  - Sensación térmica
  - Humedad
  - Velocidad del viento
  - Descripción del clima
- Interfaz responsiva adaptable a cualquier dispositivo
- Manejo de errores intuitivo

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS para el diseño
- [Font Awesome](https://fontawesome.com/) - Iconografía
- [API de OpenWeatherMap](https://openweathermap.org/api) - Datos meteorológicos

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/sebitservices/clima-buscador.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd clima-buscador
   ```

3. Abre el archivo `index.html` en tu navegador web preferido.

## Uso

1. Escribe el nombre de una ciudad en el campo de texto.
2. Haz clic en el botón "Buscar" o presiona Enter.
3. La aplicación mostrará la información del clima actual para la ciudad buscada.
4. Si permites la geolocalización en tu navegador, la aplicación mostrará automáticamente el clima de tu ubicación actual al cargar.

## API Key

Esta aplicación utiliza una clave API gratuita de OpenWeatherMap. Si deseas implementar este proyecto, deberás crear tu propia cuenta en [OpenWeatherMap](https://openweathermap.org/) y obtener una API Key gratuita. Una vez obtenida, reemplaza la constante `API_KEY` en el archivo `js/app.js`.

## Estructura del proyecto

```
clima-buscador/
├── index.html         # Archivo HTML principal
├── css/
│   └── style.css      # Estilos CSS adicionales
├── js/
│   └── app.js         # Lógica de la aplicación
└── README.md          # Este archivo
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/mejora`).
3. Realiza tus cambios.
4. Haz commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`).
5. Sube tus cambios (`git push origin feature/mejora`).
6. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## Autor

- Desarrollado por [Sebit Services](https://github.com/sebitservices)

## Agradecimientos

- [OpenWeatherMap](https://openweathermap.org/) por proporcionar la API gratuita de datos meteorológicos.
- [Tailwind CSS](https://tailwindcss.com/) por el framework CSS que facilita el diseño responsive.