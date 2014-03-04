Szyfr cezara
============

Szyfrem cezara nazywamy kod polegający na przypisaniu literom
alfabetu liter tego samego alfabetu, jednak z pewnym przesunięciem.
Liczba oznaczająca długość tego przesunięcia nazywana jest kluczem,
ponieważ znając ją można z szyfrogramu (*ciphertext*) uzyskać
oryginalną wiadomość (*plaintext*).

Poniżej przedstawiono przyporządkowanie nowego alfabetu dla alfabetu
łacińskiego i klucza 4.

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
E F G H I J K L M N O P Q R S T U V W X Y Z A B C D

Dla zbudowania szyfru cezara w JS przydatne będą nam dwie funkcje.

Funkcja `charCodeAt(n)`, którą posiada każdy łańcuch znaków zwraca
liczbę porządkową ASCII znaku na n-1szej pozycji:

    var a = "Hello";
    console.log(a.charCodeAt(0)); // wypisze 72
    console.log(a.charCodeAt(4)); // wypisze 111
    console.log(a.charCodeAt(20)); // wypisze NaN - sięgamy poza string

Funkcja `String.fromCharCode(c)` zwraca znak odpowiadający danej liczbie
w alfabecie ASCII.

    console.log(String.fromCharCode(111)); // wypisze o
    console.log(String.fromCharCode(72)); // powinieneś wiedzieć :)
    console.log(String.fromCharCode(97)); // no właśnie, co?

Dzięki temu bardzo łatwo możesz wygenerować znak ASCII przesunięty
o określony klucz.

    var source = "a";
    var targetAsNumber = source.charCodeAt(source) + 3;
    var target = String.fromCharCode(targetAsNumber);
    console.log(target); // wypisze d

W pliku `script.js` znajduje się string `plaintext`. Utwórz
string `ciphertext` przesuniętą o klucz 2 względem oryginału.
Wypisz wynik do konsoli.

Mogą przydać ci się również funkcje:

`String.prototype.split()`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

`String.prototype.join()`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join