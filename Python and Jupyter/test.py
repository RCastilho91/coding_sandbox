SELECT city, LENGTH(city)
FROM station
ORDER BY LENGTH(city), city
LIMIT 1

UNION

SELECT city, LENGTH(city)

















(SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY), CITY LIMIT 1) 
UNION 
(SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY) DESC, CITY ASC LIMIT 1)