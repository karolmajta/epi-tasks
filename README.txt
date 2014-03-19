Gra w statki
=========================================

W pliku index.html znajduje się widok planszy do gry w statlo.
Wzorując się na poprzednim ćwiczeniu (007-tic-tac-toe) napisz
grę w statki dla jednego gracza.

Wskazówki
---------

W planszy będącej dwuwymiarową tablicą pola puste reprezentuje
wartość `null`, pola ze statkiem niezatopionym `true`. Najwygodniej
będzie ci używać wartości `false` aby reprezentować statki trafione.
Przerysowując plansze sprawdzaj wartość pola. Pamiętaj, aby używać
operatora `===` (chcesz przecież rozróżnić null od false!).

Dzięki temu bardzo łatwo możesz stwierdzić, kiedy gra się skończyła.
Gra kończy się, gdy nie ma już statków niezatopionych. Na planszy
pozostają same wartości `null`, lub `false`, ale pamiętaj że obydwie
te wartości są *falsy* w javascript. Wystarczy więc sprawdzić, czy
wszystko na planszy jest falsy...

Zauważ, że teraz w wierszach elementu `tbody` znajduje się dodatkowy
element th. Służy on jedynie wyświetlaniu numeru wiersza, pamiętaj
aby pomijać go przy wyciąganiu elementów z wierszy. Metoda `children`
jQuery przyjmuje selektor, dzięki któremu możesz wyciągnąć jedynie
dzieci będące elementami `td`. Więcej na ten temat znajdziesz tu:

https://api.jquery.com/children/

Te wskazówki i znajomość poprzedniego przykładu powinny wystarczyć
do rozwiązania zadania.