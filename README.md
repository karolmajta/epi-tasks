Jak korzystać z tego repozytorium?
==================================

To repozytorium zawiera zadania dla kursu "Programowanie w JavaScript"
na Uniwersytecie Jagiellońskim. Aby zacząć rozwiązywać zadania musisz
najpierw sklonować repozytorium na swój dysk:

    $ git clone https://github.com/karolmajta/epi-tasks.git

Po sklonowaniu repozytorium możesz wejść do nowo utworzonego katalogu.
Będzie tam jedynie plik `README.txt` (to jest ten plik, który właśnie
czytasz). Aby wybrać konkretne zadanie musisz najpierw zrobić jego checkout.
Zadania oznaczone są przez tagi. Aby zobaczyć listę zadań (tagów) wykonaj
polecenie:

    $ git tag

Aby wybrać konktetne zadanie musisz zrobić checkout związanego z nim taga,
np:

    $ git checkout '001-linear-search'

Po wykonaniu tego polecenia w katalogu powinny pojawić się nowe pliki.
Koniecznie przeczytaj plik `README.txt`. Jego zawartość jest inna dla
każdego zadania! Wewnątrz znajdziesz instrukcje, które powiedzą ci jak
wykonać ćwiczenie.

Możesz dowolnie eksperymentować i zmieniać zawartość plików. Aby wrócić
do oryginalnej postaci zadania (jeśli namieszasz, albo po prostu), wykonaj:

    $ git checkout -- .

Powyższe polecenie musisz wykonać również zanim zmienisz tag/zadanie nad
którym pracujesz. Oznacza to, że aby najpierw pracować nad jednym zadaniem,
a później nad drugim musisz wykonać:

    $ git checkout '001-linear-search'
    $ # tutaj pracujesz nad tym zadaniem
    $ git checkout -- . # anulujesz zmiany w katalogu roboczym
    $ git checkout '002-binary-search'
    $ # tutaj pracujesz już nad drugim zadaniem

Powodzenia!
