# Pay rates and time intervals

:::caution DRAFT VERSION
The SETU Standard for Ordering & Selection, Assignment and Reporting Time & Expenses (Timecard) v2.0 are currently under review. The documentation in this section is a draft and subject to change.

We expect to release the final documentation at the end of 2024.
:::

## All 'Purchase to Pay' version 2.0 messages

All the 2.0 versions of the SETU 'Purchase to Pay' standards have a `payRates` container to specify a pay and/or bill rate. The content of this `payRates` container depends on the context of the message and the process step in which this message is exchanged. For example, in a Human Resource message the container specifies the pay and/or bill rate(s) the human resource is offered for, whereas in the Assignment and Timecard the container specifies the agreed pay and/or bill rate(s).

During the development of the 2.0 versions, the working group decided to simplify (the use of) the `payRates` container, whereas the previous 1.x versions contained a number of difficult constructs and dependencies. On this page you will find all explanations about the `payRates` container.

In de basis wijziging: meerdere timeInterval en/of payRates blokken opnemen bij verschillende rates voor facturering/verloning.

### To be billed/paid
Each `payRates` container includes a `toBeBilled` and `toBePaid` element to indicate using a boolean whether the pay rate is specified for billing purposes or not (billed by staffing supplier to staffing customer using invoice), and for payment purposes or not (staffing supplier paying the flex worker using pay slip). In practice this means a pay rate specifies the billing rate, the payment rate, or a same rate which is applied for both.

If multiple, different pay rates need to be specified, for example because different rates are used for invoicing than for payment, this must be specified by including the payRates container several times in the message.

### Multiplier
All amounts in the messages must be specified and interpreted **excluding** multiplier. For example, when the `amount/value` of a `payRates` element is 20 euros, and the `multiplier` is 120, then a calculation needs te be performed (outside of the message itself) to come up with the final rate of 24 euros.

As opposed to the v1.x versions of the messages, where an `InclusiveRate` element existed to explicitly specify whether the `Amount` provided in the `Rates` container already included the multiplier or not.

## Timecard
A Timecard mainly consists of `timeInterval` and `allowance` elements. This specifies all hours worked, allowances and expenses for a specific flex worker over a certain period of work. A separate `timeInterval` element is filled in for each hour type per shift. A separate `allowance` element is completed for each type of allowance or expense, whereby the quantity can be used to determine how often the allowance or expense applies to the specific work period.

BASIS VOORBEELD ZONDER VERSCHILLENDE PAY RATES, BIJV REGULAR/OVERTIME HOURS EN 2 EXPENSES.

### Pay rates in Timecard
While the `payRates` container is defined at the root level in the Staffing Order, Human Resource and Assignment messages, the container has a different location in the Timecard message. In the Timecard, pay rates are specified within a `timeInterval` or `allowance` and can be specified at most twice. The `payRates` container has a maximum cardinality of 2, because a `timeInterval` can have different billing and paying rates. When those rates are the same, only one `payRates` container is needed with both `toBeBilled="true"` and `toBePaid="true"`. When the billing and paying rates differ, then two `payRates` containers can be specified, one with `toBeBilled="true"` and `toBePaid="false"` to specify the billing rate, and vice versa to specify the paying rate.

VOORBEELD: TO BE PAID/BILLED VERSCHILLEND, TIMEINTERVAL VOOR REGULAR HOURS, EN TIMEINTERVAL VOOR OVERTIME HORUS.

### HourlyConsolidated and HourlySplit
Besides the `amount`, `multiplier`, `toBeBilled` and `toBePaid` elements, the `payRates` element also contains the `intervalCode/value` element. This element is used to express the interval period to which the amount applies. Typically, the pay rate amount is specified per hour. Two values are allowed here: `HourlyConsolidated` and `HourlySplit`.

`HourlyConsolidated` is the default. In this case the `amount` specifies the hourly rate as the only rate for the time frame and may be a consolidation of multiple separate rates.

In case of `HourlySplit` the `amount` specifies an hourly rate as one of multiple rates that apply. The total rate for the specific time frame is calculated as a sum of individual time intervals.

Wel verbetering doorgevoerd m.b.t. split: allemaal in aparte timeIntervals i.p.v. meerdere rates binnen één timeInterval.

Bij een juiste implementatie van de versie 2.0 ondersteun je beide scenario's.

VOORBEELD TOEVOEGEN!

### Verbetering Hour types en Allowance/expense codelijst
Hour types codelijst vernieuwd met digits. En Breaks urencode toegevoegd.

### 2 manieren
2 scenario's voor definiëren van diensten/timeinterval (1: als losse blokken, 2: timeTotal gebruiken voor berekening pauze) en bijbehorende BR's checken/toelichten. Specificeren van pauzes.

Vanwege de verplichting in de nieuwe WTTA wetgeving om pauzetijden te registeren, is het mogelijk om pauzes te specificeren in de 2.0 versies van de berichten. Pauze is als extra uurtype toegevoegd aan de codelijst.