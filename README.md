# JS Console Outputs #

## Log Message ##

```
console.log("You are currntly accessing the console.");
```
Output :

<img src="./img/log-message.png" alt="Log Message" width="100%">

## Error Message ##

```
console.error("This is an error message!");
```
Output :

<img src="./img/error-message.png" alt="Error Message" width="100%">

## Warn Message ##

```
console.warn("This is an warning message!");
```
Output :

<img src="./img/warn-message.png" alt="Warn Message" width="100%">

## Table Output ##

```
    let a = {
        name: "Kenura",
        age: 18,
        city: "Kaduwela"
    };

    let b = {
        name: "Sithum",
        age: 21,
        city: "Angoda"
    };

    let c = {
        name: "Nugitha",
        age: 8,
        city: "Kottawa"
    };

    console.table({ a, b, c });
```
Output :

<img src="./img/table-output.png" alt="Table Output" width="100%">

## Alert ##

```
alert("You opened the alert.");
```
Output :

<img src="./img/alert.png" alt="Alert" width="100%">

## Prompt ##

```
let name = prompt("Enter your name.");

console.log("Hello " + name + "!");
```
Output :

<img src="./img/prompt.png" alt="Prompt" width="100%">

## Confirm ##

```
let confirmation = confirm("Do you really want to \"confirm\".");

console.log("Confirm Value : " + confirmation);
```
Output :

<img src="./img/confirm.png" alt="Prompt" width="100%">

## TypeOf ##

```
let a = "Kenura Ransana Gunarathna";

console.log(a.endsWith("thna"));
```
Output :

<img src="./img/type-of.png" alt="Prompt" width="100%">
