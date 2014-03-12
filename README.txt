Konwersja kolorów hex na rgb
=========================================

Kolory w arkuszach stylów CSS są często reprezentowane jako ciągi znaków
o parzystej długości.

W takim ciągu każda dwójka zapisana heksadecymalnie reprezentuje liczbę
z przedziału 0-255 (jeden bajt), na przykład dla łańcucha "ff0599aa" mamy:

    "ff" -> 255
    "05" ->   5
    "99" ->  99
    "aa" -> 170

W pliku `script.js` znajduje się szkielet programu który potrafi konwertować
zapis heksadecymalny na tablice bitów.

Uzupełnij funkcję `splitIntoPairs`, tak aby dzieliła ciąg znaków na tablicę
dwójek:

    "ff0599aa" -> ["ff", "05", "99", "aa"]

Zauważ, że w skrypcie znajdują się testy. Będziesz wiedział, że twoja funkcja
działa poprawnie, gdy wypisane wyniki zgodzą się z oczekiwanymi.

Gdy funkcja `splitIntoPairs` będzie działać jak należy zajmij się funkcją
`arrayOfPairsIntoArrayOfBytes`. Powinna ona zamieniać tablicę bajtów zapisanych
heksadecymalnie na tablicę liczb:

    ["ff", "05", "99", "aa"] -> [255, 5, 99, 170]

Podobnie jak poprzednio o poprawnym działaniu funkcji przekonasz się
sprawdając wyniki w konsoli. Do zamieniania pojedynczej liczby hex na bajt możesz
wykorzystać funkcję `parseInt`:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

Gdy obydwie powyższe funkcje działają, zauważ, że wystarczy przekazać wartość zwracaną
przez `splitIntoPairs` do `arrayOfPairsIntoArrayOfBytes`, aby otrzymać funkcję
realizującą żądany program.

Zdefiniuj `hexIntoBytes` w następujący sposób:

    var hexIntoBytes = function (s) { return arrayOfPairsIntoArrayOfBytes(splitIntoPairs(s)); };

Sprawdź jej działanie.

Powyżej przedstawiony sposób działania jest często spotykany w programowaniu i
polega na rozbiciu jednego problemu na kilka mniejszych, niezależnych od siebie.
W przedstawionym przykładzie podział łańcucha na pary i konwersja par na liczby
są niezależnymi od siebie problemami, jednak ich rozwiązania, wykorzystane razem
rozwiązują bardziej złożony problem konwersji hex na bajty.