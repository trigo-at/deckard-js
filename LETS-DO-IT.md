# Design System  - Back to the Roots

Wir haben den Versuch unternommen tailwind in das design-system zu bringen, aber es hat sich herausgestellt das fuer unsere use-cases nicht das beste Tool ist. Wir moechten wieder zum css-in-js Ansatz zurueck, weil er flexibler ist.

## Ist Situation

- Das design-system hat 2 unterschiedliche Arten von Komponenten:
    - Mit tailwind im Unterbau
    - Mit Chakra (css-in-js) im Unterbau
- Das design-system exportiert einige tailwind css classes
- Die Anwendungen die das Design System verwenden, verwenden sowohl die Chakra Komponenten als auch die css utility classes. Die Anwendungen die das DS aktuell schon verwenden bzw verwenden sollen sind:
    - Sunrocks
    - SchIP
    - Mitgliederportal
- Das DS hat keine oder schlechte typescript Unterstuetzung
- Die Dokumentation der "Core" Komponenten von Chakra ist aktuell nur via Referenz auf die Chakra Dokumentation gegeben.
- Das DS liefert auch die Translation, Form und Routing Libraries mit

## Soll Situation

- Das DS exportiert keine css utility classes mehr.
- tailwind ist im DS entfernt
- Die Anwendungen die das DS verwenden, sind so upgedated, das sie mit einer Version ohne tailwind utitlity classes funktionieren.
- Das Theme (Color, Paddings, Fonts) soll von tailwind uebernommen werden. Ziel soll sein, das Sunrocks sich visuell nicht veraendert. Weil dort werden die tailwind DS tokens schon an vielen Stellen verwendet.
- Das DS verwendet typescript, und unterstuetzt den Developer aktiv mit Intellisense und Fehlermeldungen bei falscher Benutzung.
- Das DS soll auch fuer die "Core" Komponenten von Chakra einen Startingpoint in der Dokumentation anbieten, mit grober Erklaerung und Verlinkung zu Chakra fuer die Details.
- Das DS behaelt die Translation, Form und Routing Libraries

## Vorgehen

1. Das Chakra default Theme soll die tailwind design token uebernehmen
2. Die Komponenten die tailwind verwenden, werden wieder auf Chakra umgebaut
3. tailwind und das Dev Setup dazu wird entfernt
4. Die Anwendungen werden von custom tailwind utility classes befreit
5. Die Komponenten verwenden typescript
6. Basis Dokumentation (Erklaerung) zu den "Core" Komponenten von Chakra existiert.
7. Alle Anwendungen verwenden die letzte Version vom DS und sehen visuell grossteils gleich wie vorher aus.
8. Ab diesem Zeitpunkt koennen wir wieder aktiv am DS weiterarbeiten und Verbesserungen an bestehendem vornehmen oder neue Komponenten bauen.

## Ausblick

Das DS exportiert einerseits die ganzen Primitiven Komponenten wie Box, Button usw. aber bietet auch Komponenten wie eine ViewSection, PageSection, FormSection, DataList usw. an. Die Primitiven Komponenten sollten in der API nicht zu stark eingeschraenkt sein, um Flexibilitaet zu erlauben wenn sie gebraucht wird. Dadurch koennen wir das DS auch als Basis in vielen unterschiedlichen Anwendungen verwenden. In Komponenten wie einer ViewSection, PageSection ist die API etwas strikter, um eine konsistente UX ueber mehrere Projekte sicherzustellen.

Das DS soll primaer einmal alle use-cases von Sunrocks abdecken, da das im Moment die einzige Anwendung ist, die ausschliesslich das DS verwendet und darauf aufbaut. Andere Anwendungen koennen mit Primitiven Komponenten wie einer Box schon anfangen das DS fuer ihre use-cases zu verwenden und haben damit schon einmal einen soliden Unterbau. Zu einem spaeteren Zeitpunkt werden sicher Erfahrungen aus anderen Projekten ins DS zurueckfliessen.

Die Idee fuer die Zukunft ist das alle Anwendungen die Basis Komponenten von Chakra (Box, Button) verwenden koennen und damit einen soliden Unterbau haben, oder komplett das Standard UX vom trigo DS uebernehmen.

Die Idee fuer die Zukunft ist, das neue Anwendungen das trigo DS und das Standard Look&Feel (analog zu Sunrocks) uebernehmen, oder wie im Fall vom Mitgliederportal ein eigenes DS haben, das aber im Unterbau die Primitiven Komponenten von Chakra (Box, Button, usw) verwendet. Dadurch muessen wir nicht immer bei 0 starten, aber trotzdem auch ein anderes Look&Feel unterstuetzen.

```
+------------------------------------------+                       +---------------------------------+
|                                          |                       |                                 |
|  Soll das neue Projekt das trigo DS      |         JA            |  Installiere das DS im Projekt  |
|  und sein Look&Feel direkt uebernehmen?  +---------------------->+  und verwende es direkt.        |
|                                          |                       |                                 |
+-----------------+------------------------+                       +---------------------------------+
                  |
                  | NEIN
                  |
                  v
+-----------------+-------------------------+                      +---------------------------------------+
|                                           |                      |                                       |
|  Du kannst deine eigene DS Library        |                      |  Verwende deine eigene DS Library in  |
|  erstellen / verwenden, aber das DS       +--------------------->+  deinem Projekt                       |
|  kann im Unterbau das trigo DS verwenden  |                      |                                       |
|                                           |                      +---------------------------------------+
+-------------------------------------------+
```