Wyszukiwanie w tablicy II (wyszukiwanie binarne)
================================================

W pliku `script.js` znajduje się program wyszukujący w **posortowanej**
tablicy `sortedArray` liczbę `numberToLookFor`. Uruchom w przeglądarce
plik `index.html`, otwórz konsolę i sprawdź wynik działania programu.

- Sprawdź, czy po zmianie szukanego numeru program nadal działa poprawnie.
- Sprawdź, czy po zmianie szukanego numeru na taki, którego nie ma w tablicy
  program nadal działa poprawnie.
- Sprawdź, czy po dodaniu, lub usunięciu elementów z tablicy (przy zachowaniu
  ich rosnącej kolejności) program nadal działa poprawnie.
- Zamień tablicę `sortedArray` na nieposortowaną (postaraj się przy tym o
  możliwie losową kolejność liczb), czy program nadal działa poprawnie?

Pytania:

- Czy potrafisz wytłumaczyć jak działa wyszukiwanie binarne?
- Dlaczego aby program działał poprawnie, tablica na której prowadzimy
  wyszukiwanie binarne musi być posortowana?
- Przypomnij sobie, że w poprzednim ćwiczeniu wyszukiwaliśmy w tablicy
  liczb, tablicy ciągów znaków, oraz w tablicy obiektów w postaci
  `{x: 1, y: 2}`, które reprezentowały punkty na płaszczyźnie.
  Wyszukiwanie binarne można zastosować do posortowanej tablicy liczb,
  oraz posortowanej tablicy łańcuchów znaków, jednak nie można zastosować
  go do tablicy punktów. Dlaczego?
- Czy potrafisz powiedzieć ile dokładnie porównań zostanie wykonanych
  dla tablicy o długości *n* jeśli szukana liczba nie znajduje się w tablicy?
- Czy potrafisz podać złożoność obliczeniową programu `script.js`?

Zadania:

- Zmień program tak, aby tablica `sortedArray` zawierała łańcuchy znaków, oraz
  żeby wyszukiwany był łańcuch znaków, a nie liczba.
- Pewnie zauważyłeś już, że ręczne dbanie o to, aby tablica `sortedArray` była
  posortowana jest uciążliwe (szczególnie dla łańcuchów znaków). Wykorzystaj
  funkcję `Array.sort()` aby zadbać o to, żeby tablica faktycznie była
  posortowana, zanim program wejdzie do pętli. Jej dokumentacje znajdziesz
  pod adresem:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
