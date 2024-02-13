---
title: 'About'
description: 'About test'
---

::TextH4 
Labas, Pasauli!
::

::TextH6
Aplinkos konfigūravimas
::

::TextBody1

Prieš pradedant kūrimo procesą, būtina pasiruošti programvimo aplinką. Rekomenduojama naudoti [Visual Studio Code](https://code.visualstudio.com/) kodo redaktorių kartu su [naujausia Python versija](https://www.python.org/downloads/).

Jeigu ir naudosite ir kitą kodo redaktorių, jame tikriausiai bus integruota konsolė. Naudojantis Visual Studio Code jis atrodo šitaip:

::

![Visual Studio Code konsolė](/content_images/vs_code_console.png)

::TextBody1

Šiame lange surašykite:

::

```shell
python -V
```

::TextBody1

Turėtumėte pamatyti kažką panašaus į

::


```shell
Python 3.10.12
```



::TextBody1

Taip mes patikriname, ar Python programinė įranga įrašyta teisingai. Toliau susikurkime naują aplankalą, kuriame talpinsime visą projektą ir jį atidarykime su VS code (File -> Open Folder). Turėtumėte matyti panašių vaizdą į šį:
::

![Visual Studio Code naujo projekto langas](/content_images/vs_code_new_project.png)


::TextBody1

Aukščiau pateiktu atveju, buvo atidarytas aplankas *game_source*. Dešinėje esančioje *explorer* srityje paspaudus dešinės pelės klavišą, atsidarys kontekstinis meniu, kuriame rasite *new file* mygtuką, su kuriuo sukursite failą. Kitas variantas, užėję ant to pačio regiono, atsiras keturios ikonėlės, pirmoji iš jų leis sukurti naują failą. Keturios ikonėlės pažymėtos žemiau:

::

![Visual Studio Code naujo failo sukūrimas](/content_images/vs_code_new_file.png)

::TextBody1

Šį failą pavadinkime savo žaidimo vardu, šiuo atveju pavadinsime "asteroids.py". Galūnė ".py" yra failo plėtinys. Šio plėtinio failus VS code aplinka atpažįsta, pažymi Python programavimo kalbai būdingus raktažodžius, leidžia juos paleisti. Šiame faile įrašykime tokią kodo eilutę:

::

```python
print("Hello, World!")
```

::TextBody1

Paleidžiame naudodami F5 mygtuką. Turėtų atsirasti meniu, pasirinkite "Python File". Apačioje, konsolės lange turėtumėte pamatyti užrašą "Hello, World!":

::

![Visual Studio Code python hello world](/content_images/vs_code_hello_world.png)

::TextBody1

Taip mes patikriname, ar Python ir Visual Studio Code sukonfigūruoti tinkamai. Programos „Hello World“ rašymas dažnai yra pirmasis žingsnis siekiant patikrinti, ar kūrimo aplinka yra tinkamai sukonfigūruota. Šią aplinką sudaro teksto rengyklė (arba integruotą kūrimo aplinką (IDE)), kalbos kompiliatorius (arba vertėjas) ir visi kiti reikalingi įrankiai. Sėkmingas programos „Hello World“ paleidimas patvirtina, kad galime rašyti, kompiliuoti ir paleisti programą savo įrenginyje.
​
::

::TextH6
Pygame įrašymas
::

Pygame biblioteka nėra įtrauktas į Python programavimo kalbą, šis paketas sukurtas išorinių programuotojų. Programavime biblioteka - kodų rinkinys, kurį kiti kurėjai gali naudoti palengvinant užduočių įgyvendinimą, patiems nerašant kodo nuo nulio. Iš esmės jos siūlo įrankių ar funkcijų rinkinį, kuris supaprastina programavimo procesą, todėl kūrimas tampa greitesnis, efektyvesnis ir mažiau linkęs į klaidas. *Pygame* biblioteką galima įsirašyti naudojant konsolės komanda: 

```shell
python3 -m pip install pygame
```

Dabar patikrinkime, ar teisingai įsirašė *Pygame* biblioteka, į mūsų *asteroids.py* failą įrašykime:

```python
import pygame

print(pygame.ver)
```

Pirmojoje eilutėje, mes importuojame (įkeliame) šią biblioteką į savo programinį kodą, kad galėtume ją panaudoti. Kitoje eilutėje mes išvedame į konsolinį langą bibliotekos versiją. Paleidus šį kodą, konsoliniame lange turėtume pamatyti:

```text
pygame 2.5.2 (SDL 2.28.2, Python 3.10.12)
Hello from the pygame community. https://www.pygame.org/contribute.html
2.5.2
```

O toliau sukursime savo pirmo žaidimo langą.