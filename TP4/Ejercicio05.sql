-- A-B) SELECT apellido from empleados; 

-- C)SELECT * from empleados; 

-- D) SELECT nombre, apellido FROM empleados 

-- E) SELECT cuil_cuit FROM empleados 
 
 -- F)SELECT CONCAT(nombre, ' ', apellido) AS nombre_completo FROM empleados;
 
 -- G)SELECT CONCAT(UPPER(nombre), ' ', UPPER(apellido)) AS nombre_completo FROM empleados;
 
-- H)SELECT CONCAT(lowER(nombre), ' ', lowER(apellido)) AS nombre_completo FROM empleados;
 
 -- I)SELECT nombre, presupuesto FROM departamentos ORDER BY presupuesto ASC;

-- J)SELECT nombre, presupuesto FROM departamentos ORDER BY presupuesto ASC;

-- K)SELECT nombre, presupuesto FROM departamentos ORDER BY presupuesto Desc;

-- L) SELECT apellido, nombre FROM empleados ORDER BY apellido ASC, nombre ASC;

-- M)SELECT nombre, presupuesto FROM departamentos ORDER BY presupuesto DESC LIMIT 3;


-- N)SELECT nombre, presupuesto FROM departamentos ORDER BY presupuesto asc LIMIT 3;

-- O)SELECT nombre, presupuesto FROM departamentos WHERE presupuesto >= 150000;

-- P)SELECT nombre, presupuesto FROM departamentos WHERE presupuesto >= 100000 AND presupuesto <= 200000;

-- Q) SELECT nombre FROM departamentos WHERE presupuesto < 100000 OR presupuesto > 200000;

-- R)SELECT nombre FROM departamentos WHERE presupuesto BETWEEN 100000 AND 200000;

-- S)SELECT empleados.*, departamentos.nombre, departamentos.presupuesto FROM empleados JOIN departamentos ON empleados.departamento = departamentos.departamento_id;

-- T)SELECT empleados.apellido, empleados.nombre, departamentos.nombre, departamentos.presupuesto FROM empleados JOIN departamentos ON empleados.departamento = departamentos.departamento_id ORDER BY departamentos.nombre ASC, empleados.apellido ASC, empleados.nombre ASC;

-- U)SELECT departamento_id, d.nombre
-- FROM departamentos d
-- WHERE EXISTS (
--    SELECT 1
--    FROM empleados e
--    WHERE e.departamento = d.departamento_id
-- );

-- V)SELECT d.nombre
-- FROM departamentos d
-- JOIN empleados e ON d.departamento_id = e.departamento
-- WHERE e.cuil_cuit = '27-38382980-3';

-- W)SELECT d.nombre
-- FROM departamentos d
-- JOIN empleados e ON d.departamento_id = e.departamento
-- WHERE e.nombre = 'Pepe';

-- X)SELECT *
-- FROM empleados e
-- JOIN departamentos d ON e.departamento = d.departamento_id
-- WHERE d.nombre = 'I+D'
-- ORDER BY e.apellido, e.nombre;

-- Y)SELECT *
-- FROM empleados e
-- JOIN departamentos d ON e.departamento = d.departamento_id
-- WHERE d.nombre IN ('Sistemas', 'Contabilidad', 'I+D')
-- ORDER BY e.apellido, e.nombre;

-- Z)SELECT e.nombre
-- FROM empleados e
-- JOIN departamentos d ON e.departamento = d.departamento_id
-- WHERE d.departamento_id NOT IN (
--    SELECT departamento_id
--    FROM departamentos
--    WHERE presupuesto BETWEEN 100000 AND 200000
-- );