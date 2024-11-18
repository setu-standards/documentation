# Pay rates

:::caution DRAFT VERSION
The SETU Standard for Ordering & Selection, Assignment and Reporting Time & Expenses (Timecard) v2.0 are currently under review. The documentation in this section is a draft and subject to change.

We expect to release the final documentation at the end of 2024.
:::

All the 2.0 versions of the SETU 'Purchase to Pay' standards have a payRates container to specify a pay and/or bill rate. The content of this payRates container depends on the context of the message and the process step in which this message is exchanged. For example, in a Human Resource message the container specifies the pay and/or bill rate(s) the human resource is offered for, whereas in the Assignment and Timecard the container specifies the agreed pay and/or bill rate(s).

Bij ontwikkeling SETU 2.0 gekozen met werkgroep om de payRates container te vereenvoudigen. 
Iets over dat het een lastige container is, met afhankelijkheden. vandaar uitleg over ...

In de basis wijziging: meerdere timeInterval en/of payRates blokken opnemen bij verschillende rates voor facturering/verloning.

## To be billed/paid
Each `payRates` container includes a `toBeBilled` and `toBePaid` element to indicate using a boolean whether the pay rate is specified for billing purposes or not (billed by staffing supplier to staffing customer using invoice), and for payment purposes or not (staffing supplier paying the flex worker using pay slip). In practice this means a pay rate specifies the billing rate, the payment rate, or a same rate which is applied for both.

payRates container vereenvoudigd t.o.v. v1.x series door het payRates blok meerdere keren op te nemen bij verschillende pay rates.

## Multiplier
All amounts in the messages must be specified and interpreted **excluding** multiplier. For example, when the `amount/value` of a `payRates` element is 20 euros, and the `multiplier` is 120, then a calculation needs te be performed to come up with the final rate of 24 euros.

As opposed to the v1.x versions of the messages, where an `InclusiveRate` element existed to explicitly specify whether the `Amount` provided in the `Rates` container already included the multiplier or not.

## Hourlysplit/consolidated
WG2: Zowel consolidated als split scenario blijven ondersteund worden, maar hoeft niet meer expliciet vermeld te worden in het bericht d.m.v. de urencodes. Wel verbetering doorgevoerd m.b.t. split: allemaal in aparte timeIntervals i.p.v. meerdere rates binnen één timeInterval.

Bij een juiste implementatie van de versie 2.0 ondersteun je beide scenario's.

Consolidated is the default. In this case the `amount` specifies the hourly rate as the only rate for the time frame and may be a consolidation of multiple separate rates.

In case of split items the `amount` specifies an hourly rate as one of multiple rates that apply. The total rate for the specific time frame is calculated as a sum of individual time intervals.

VOORBEELD TOEVOEGEN!

## Verbetering Hour types en Allowance/expense codelijst
Hour types codelijst vernieuwd met digits. En Breaks urencode toegevoegd.

## Timecard/timeIntervals
Meerdere timeInterval blokken opnemen bij verschillende rates voor facturering/verloning.

2 scenario's voor definiëren van diensten/timeinterval (1: als losse blokken, 2: timeTotal gebruiken voor berekening pauze) en bijbehorende BR's checken/toelichten. Specificeren van pauzes.

Vanwege de verplichting in de nieuwe WTTA wetgeving om pauzetijden te registeren, is het mogelijk om pauzes te specificeren in de 2.0 versies van de berichten. Pauze is als extra uurtype toegevoegd aan de codelijst.