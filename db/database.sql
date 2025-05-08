CREATE DATABASE cine;

use cine;

CREATE TABLE peliculas
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  duracionmin SMALLINT NOT NULL,
  clasificacion ENUM('APT','+14','+18') NOT NULL DEFAULT 'APT',
  alanzamiento CHAR(4) NOT NULL
)ENGINE = INNODB;
INSERT INTO peliculas (titulo, duracionmin, clasificacion, alanzamiento)
  VALUES
    ('Shrek', 110, 'APT', '2001'),
    ('¿Que pasó ayer?', 100, '+18', '2009'),
    ('Avengers End Game', 180, 'APT', '2022');

SELECT * FROM peliculas;