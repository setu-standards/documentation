# Bouwblok gelijkwaardig beloning

INFO: Engels versie komt

## Inleiding

De inlenersbeloning standaard is opgebouwd uit een generieke set elementen, laten we dit bouwblok het bouwblok voor `gelijkwaardige beloning` noemen. Dit bouwblok kan gebruikt worden om bijna alle regelingen van arbeidsvoorwaarden vast te leggen en te versturen. Het bouwblok is ontworpen om flexibel en herbruikbaar te zijn, en wordt op verschillende plaatsen binnen de standaard toegepast.

## Wat is het bouwblok voor Gelijkwaardige Beloning?

Het bouwblok voor Gelijkwaardige Beloning is een gestandaardiseerde set van elementen die gebruikt wordt voor het vastleggen van bijna alle regelingen in de SETU inlenersbeloning standaard. Dit bouwblok maakt het mogelijk om verschillende regelingen op uniforme wijze te beschrijven, zoals toeslagen, vergoedingen, verlof of andere regelingen.

**Kenmerken van het bouwblok:**

- **Type regeling:** Dit geeft aan welke soort regeling wordt toegepast. Bijvoorbeeld, de type toeslagen (e.g., overwerk) of type verlof (e.g., ADV dagen). 

- **Geldigheidsperiode:** Bepaalt de geldigheid van de regeling, vastgelegd met validFrom en validTo. Dit is los van de periode waarin men aanspraak kan maken op de regeling.

- **Periodes:** Dit kenmerk definieert de tijdsperiode waarin de toeslag van toepassing is. Er kunnen meerdere periodes gedefinieerd worden, bijvoorbeeld door:
  - **Datum periode:** Een specifieke datum of een reeks datums waarop de regeling van toepassing is.
  - **Weekdagen:** specifieke dagen van de week waarop de regeling van toepassing is
  - **Tijdperiode:** de specifieke tijd gedurende de dag waarop de regeling geldt

- **Regeling regels (lines)**:in een en dezelfde periode kunnen er meerdere regels zijn, afhankelijk van bepaalde criteria. **De hoogte van de geldende regeling** wordt gedefinieerd met de volgende drie driekhoek:
  - **Waarde:** De hoogte van de regeling. Bijvoorbeeld het percentage getal van de toeslag.
  - **Basis (grondslag):** De maatstaf waarop de toeslag is gebaseerd (bijv. percentage van het uurloon).
  - **Per hoeveel:** De eenheid waarvoor de toeslag geldt (bijv. per uur, per dag dat je werkt).


Reminder: samenvatten in een plaatje!

## Structuur van het bouwblok

Het bouwblok is opgebouwd uit verschillende elementen die samen de details van de regeling vastleggen:






### Periode structuur

### Regels (lines) structuur

Binnen het Bouwblok kunnen meerdere lijnen van toeslagen worden gedefinieerd. Elke lijn bevat de volgende elementen:

**Opbouw van de standaard**



Voorbeeld van een toeslaglijn: Voorbeeld aanpassen! Is momenteen uit Semantic Treehouse gehaald.

```
"line": [
    {
        "amount": {
            "value": 3.1,
            "minValue": 3.1,
            "maxValue": 3.1,
            "unitCode": "euro",
            "base": {
                "code": "etc.",
                "value": {},
                "minValue": {},
                "maxValue": {}
            }
        },
        "intervalCode": {
            "value": "FourWeekly"
        },
        "conditions": {
            "description": {},
            "positionTitle": [{}]
        }
    }
]
```


## Toepassing van het bouwblok - voorbeelden