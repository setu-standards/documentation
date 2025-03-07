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

<!--
## Structuur van het bouwblok

Het bouwblok is opgebouwd uit verschillende elementen die samen de details van de regeling vastleggen:


- **ID:** Een identifier voor de regeling
  - **Value:** de waarde van de identifier
  - **Scheme Agency ID**: diegene die de identifier heeft uitgegeven (uitzender of inlener)
- **Name**: Naam of omschrijving van de regeling
- **Effective Time Period:** de geldigheid van de regeling, vastgelegd met validFrom en validTo. 
  - **Valid From**
  - **Valid To**
- **Type Code:** betreft een SETU code om aan te geven om welke regeling het gaat (e.g., overwerk toeslag) 
- **Period:** tijdsperiode waarin de toeslag van toepassing is
  - **Date Period:** Een reeks datums (met start en eind datum) waarop de regeling van toepassing is
     - **Start**
     - **End**
   - **Weekday:** specifieke dagen van de week waarop de regeling van toepassing is
   - **Time Period:** de specifieke tijd gedurende de dag waarop de regeling geldt
       - **Start**
       - **End**
- **Line:** de verschillende regels die van toepassing zijn in dezelfde tijdsperiode 
   - **Amount:** De waarde en de unit van de regeling 
        - **Value:**  De hoogte van de toeslag
        - **Min Value** De minimale hoogte van de toeslag
        - **Max Value** De maximale hoogte van de toeslag
        - **Unit Code** Geeft de unit van het value aan. E.g., percentage of hour
    - **Base:** De grondslag waarop de waarde van toepassing is. E.g., percentage van het uurloon
        - **Code**: Gestandaardiseerde code om aan te geven om de grondslag aan te geven
        - **Value**: De hoogte van de grondslag. Bijvoorbeeld bij een percentage van een vast bedrag. 
        - **Min Value**: Minimale grondslag
        - **Max Value**: Maximale grondslag
    - **Interval Code**: geeft de interval aan per hoeveel je recht hebt op de toeslag. E.g., voor elk **uur** dat je hebt gewerkt
        - **Value**
- **Conditions:** conditie blok met voor alle voorwaarden
    - Description
    - Position Title


-->



### Periode structuur

Dit JSON-voorbeeld beschrijft een onregelmatigheidstoeslag genaamd "Onregelmatigheidstoeslag zomer" die geldig is van 1 juli 2025 tot en met 31 december 2025. De toeslag is van toepassing op maandagen, dinsdagen en woensdagen tussen 18:00 en 23:00 uur.

```
{
  "ID": {
    "Value": "12345",
    "Scheme Agency ID": "Customer"
  },
  "Name": "Onregelmatigheidstoeslag zomer",
  "Effective Time Period": {
    "Valid From": "2025-07-01T00:00:00",
    "Valid To": "2025-12-31T23:59:59"
  },
  "Type Code": "HT704",
  "Period": {
    "Weekday": ["Monday", "Tuesday", "Wednesday"],
    "Time Period": {
      "Start": "18:00",
      "End": "23:00"
    }
  },
}
```



### Regels (lines) structuur

Binnen het Bouwblok kunnen meerdere lijnen van toeslagen worden gedefinieerd. Dit JSON-voorbeeld beschrijft twee verschillende onregelmatigheidstoeslagen voor medewerkers:

- **Administratief medewerker:** Voor administratief medewerkers is er een toeslag van 20% op hun uurloon voor het werken op onregelmatige tijden. Zij krijgen 20% van hun uurloon per uur dat ze overwerken. 

- **Iedereen boven schaal 10:** Voor medewerkers die in schaal 10 of hoger vallen, is er een toeslag van 10% op hun uurloon voor het werken op onregelmatige tijden. 


```
"Line": [
  {
    "Line": {
      "Amount": {
        "Value": 20, // 20 procent
        "Unit Code": "Percentage"
      },
      "Base": {
        "Code": "HourlyRate" // percentage van het uurloon
      },
      "Interval Code": {
        "Value": "Hourly" // per uur dat ze overwerken
      }
    },
    "Conditions": {
      "Description": "Toeslag voor onregelmatige werktijden",
      "Position Title": "Administratief medewerker"
    }
  },
  {
    "Line": {
      "Amount": {
        "Value": 10,
        "Unit Code": "Percentage"
      },
      "Base": {
        "Code": "HourlyRate"
      },
      "Interval Code": {
        "Value": "Hourly"
      }
    },
    "Conditions": {
      "Description": "Toeslag voor onregelmatige werktijden",
      "Position Title": "Iedereen boven schaal 10"
    }
  }
]
```


## Voorbeelden

### Toeslagen

To be filled

### Vergoedingingem

To be filled

### Doorbetaling bij ziekte

To be filled

### Verlof