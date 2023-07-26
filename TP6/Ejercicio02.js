const fs = require('fs'); // Módulo para trabajar con el sistema de archivos

// Objeto con la información de los empleados por departamento
const departamentos = {
  Contabilidad: [
    { id_empleado: 10, nombre: 'Juan Segovia' },
    { id_empleado: 15, nombre: 'Ramiro Romero' },
  ],
  Tecnología: [
    { id_empleado: 12, nombre: 'Pablo Richmon', puesto: 'PM' },
    { id_empleado: 23, nombre: 'Marta Fernandez', puesto: 'TechLead' },
    { id_empleado: 24, nombre: 'Pedro Mendez', puesto: 'FullStack JS' },
  ],
  Producción: [
    { id_empleado: 7, nombre: 'Gabriela Lescano' },
  ],
  Comercial: [
    { id_empleado: 2, nombre: 'Fabiana Martines' },
  ],
};

// Convertir el objeto a formato JSON
const departamentosJSON = JSON.stringify(departamentos, null, 2);

// Guardar el JSON en un archivo llamado "departamentos.json"
fs.writeFile('departamentos.json', departamentosJSON, 'utf8', (err) => {
  if (err) {
    console.error('Error al guardar el archivo:', err);
  } else {
    console.log('Archivo departamentos.json creado exitosamente.');
  }
});