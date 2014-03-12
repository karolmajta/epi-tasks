Metoda Monte Carlo - szacowanie liczby pi
=========================================

Stosunek pola okrgęgu do pola kwadratu na nim opisanego można wyrazić jako:

     pi*r^2       pi
    --------  =  ----
     (2r)^2       4

Jeśli przyjmiemy, że środek takiego okręgu leży w środku układu współrzędnych,
to jest on opisany równaniem:

    r^2 > x^2 + y^2

Kwadrat natomiast opisują nierówności:

    -r < x < r      oraz    -r < y < r

Przyjmując arbitralnie, że r = 1 (badamy koło o promieniu długości 1 i
opisany na nim kwardrat o boku 2):

    koło:           x^2 + y^2 < 1                           (I)
    kwadrat:        -1 < x < 1    oraz   -1 < y < 1         (II)

Generując losowo wiele punktów wewnąrz kwadratu (czyli spełniające
nierównośi II) i sprawdzając ile z nich leży wewnątrz koła (czyli
spełnia nierówność 1) otrzymujemy przybliżony stosunek pola koła
do pola kwadratu.

Oznaczając:

    m - liczba punktów wewnątrz koła
    n - liczba punktów wewnąrz kwadratu

Dostajemy:

    m       pi
   ---  =  ----
    n       4

Stąd:

            4m
    pi  =  ----                                             (III)
            n

Sposób wykonania ćwiczenia
--------------------------

W pliku `script.js` znajduje się pusta tablica `punktyKwadrat` oraz
`punktyKolo`. Napisz pętlę, która wypełni tablicę `punktyKwadrat` tysiącem
obiektów w postaci

    {x: <losowa liczba z przedziału (-1, 1)>, y: <losowa liczba z przedziału (-1, 1)>}

Do generowania losowych punktów możesz wykrzystać funkcję `Math.random`:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Do dodawania elementów do tablicy możesz wykorzystać funkcję `Array.push`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

Gdy wypełnisz tablicę `punktyKwadrat` napisz pętlę, która przeiteruje przez nią i punkty
leżące wewnątrz koła umieści w tablicy `punktyKolo`.

Na podstawie wzoru III oszacuj pi.