Ćwiczenia z dostępu do tablic i obiektów
========================================

W pliku `script.js` utworzono globalny obiekt `szkola`. Po uruchomieniu
pliku `index.html` w przeglądarce możesz odwołać się do niego z poziomu
konsoli Javascript:

    >>> szkola

Obiekt ten ma następującą strukturę:

    {
        klasy: [
            {
                symbol: '1A',
                uczniowie: [
                    {imie: 'Jan', nazwisko: 'Kowalski'},
                    {imie: 'Ala', nazwisko: 'Nowak'},
                    ....
                ]
            },
            {
                symbol: '1B',
                uczniowie: [
                    {imie: 'Maciek', nazwisko: 'Nowak'},
                    {imie: 'Jola', nazwisko: 'Lojalna'},
                    ....
                ]
            },
            {
                symbol: '2A',
                uczniowie: [
                    ....
                ]
            },
            ...
        ],
        nauczyciele: [
            {
                imie: 'Bartek',
                nazwisko: 'Borat',
                uczy: ['1A', '1B']
            },
            {
                imie: 'Robert',
                nazwisko: 'Kwiatkowski',
                uczy: ['2D']
            },
        ],
    }

Wypisz w konsoli:

- Imiona wszystkich nauczycieli
- Imiona wszystkich uczniów
- Imiona wszystkich uczniów, których uczy Robert Kwiatkowski
- Uczniów wszystkich klas trzecich
- Wszystkie dziewczyny, które chodzą do szkoły
