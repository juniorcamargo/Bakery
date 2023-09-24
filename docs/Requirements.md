# Requirements

## Backend

### Non Functional Requirements

1. Must be a Web API
1. Must contain OpenAPI documentation
1. Implement the [REST maturity level 3]((https://martinfowler.com/articles/richardsonMaturityModel.html)) by preference.
1. All Business rules must be covered by Unit Tests

### Functional Requirements

1. You must enter time of day as 'morning' or 'night'
1. You must enter comma delimited list of dish types with at least one selection
1. The output must print food in the following order: etrée, side, drink, dessert
1. There is no dessert for morning meals
1. Input is not case sensitive
1. If invalid selection is encountered, display valid selecions up to the error, then print error
1. In the morning, you cvan order multiple cups of coffee
1. At night, you can have multiple orders of potatoes
1. Except for the above rules, you can only order 1 of each dish type
1. The list of items that can be ordered multiple times can change over time
1. The time of day can change over time

### Menu

| Dish Type   | morning        | night  |
| ----------- | -------------- | ------ |
| 1 (entrée)  | eggs           | steak  |
| 2 (side)    | Toast          | potato |
| 3 (drink)   | Coffe          | wine   |
| 4 (dessert) | Not Applicable | cake   |

### Inputs and outputs:
| Input | Output |
| --- | --- |
| morning,1,2,3 | eggs, toast, coffee |
| morning,2,1,3 | eggs, toast, coffee |
| morning,1,2,3,4 | eggs, toast, coffee, error |
| morning,1,2,3,3,3 | eggs, toast, coffee(x3) |
| night,1,2,3,4 | steak, potato, wine, cake |
| night,1,2,2,4 | steak, potato(x2), cake |