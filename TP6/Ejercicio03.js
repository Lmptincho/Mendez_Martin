const fs = require('fs'); // Módulo para trabajar con el sistema de archivos

// Array de objetos con la información de los productos
const productos = [
        {
          "id_producto": 283,
          "nombre": "Gafas de sol",
          "Marca": "Acme",
          "disponible": 20,
          "precio": 9800,
          "temporada": "Verano 2023",
          "caracteristicas": {
            "color": "negro",
            "marco": "metal"
          }
        },
        {
          "id_producto": 191,
          "nombre": "Reloj deportivo",
          "Marca": "Timer",
          "disponible": 2,
          "precio": 21400,
          "caracteristicas": {
            "color": "plateado",
            "material": "goma y plástico"
          }
        },
        {
          "id_producto": 148,
          "nombre": "Juego de medias",
          "Marca": "Piecito",
          "disponible": 38,
          "precio": 500,
          "caracteristicas": {
            "color": "varios",
            "material": "algodon"
          }
        },
        {
          "id_producto": 82,
          "nombre": "Camiseta selección Argentina",
          "Marca": "Argento",
          "disponible": 11,
          "precio": 6800,
          "talle": "L"
        },
        {
          "id_producto": 81,
          "nombre": "Camiseta selección Argentina",
          "Marca": "Argento",
          "disponible": 15,
          "precio": 6800,
          "talle": "M"
        }
      ]