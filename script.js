(function () {
  'use strict';

  window.szkola = {
    klasy: [
      {
        symbol: '1A',
        uczniowie: [
          {imie: 'Jan', nazwisko: 'Kowalski'},
          {imie: 'Ala', nazwisko: 'Nowak'},
          {imie: 'Stefan', nazwisko: 'Kiler'},
        ]
      },
      {
        symbol: '1B',
        uczniowie: [
          {imie: 'Maciek', nazwisko: 'Nowak'},
          {imie: 'Jola', nazwisko: 'Lojalna'}
        ]
      },
      {
        symbol: '2',
        uczniowie: [
          {imie: 'Marcin', nazwisko: 'Nowak'},
          {imie: 'Monika', nazwisko: 'Ratownika'}
        ]
      },
      {
        symbol: '3A',
        uczniowie: [
          {imie: 'Anka', nazwisko: 'Skakanka'},
          {imie: 'Janko', nazwisko: 'Muzykant'}
        ]
      },
      {
        symbol: '3B',
        uczniowie: [
          {imie: 'Marek', nazwisko: 'Nocny'},
          {imie: 'Filip', nazwisko: 'Konopny'}
        ]
      }
    ],
    nauczyciele: [
      {
        imie: 'Bartek',
        nazwisko: 'Borat',
        uczy: ['1A', '1B', '3B']
      },
      {
        imie: 'Robert',
        nazwisko: 'Kwiatkowski',
        uczy: ['2', '3A']
      }
    ]
  };

})();
