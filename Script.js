/**************************************
 *                                    *
 *              Models                *
 *                                    *
 **************************************/

document.querySelector("[value=ConsoleMessage]").addEventListener("click", function () {
    console.log("You are currntly accessing the console.");
});

document.querySelector("[value=ConsoleError]").addEventListener("click", function () {
    console.error("This is an error message!");
});

document.querySelector("[value=ConsoleWarn]").addEventListener("click", function () {
    console.warn("This is an warning message!");
});

document.querySelector("[value=ConsoleTable]").addEventListener("click", function () {

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

});

document.querySelector("[value=Alert]").addEventListener("click", function () {
    alert("You opened the alert.");
});

document.querySelector("[value=Prompt]").addEventListener("click", function () {
    let name = prompt("Enter your name.");
    console.log("Hello " + name + "!");
});

document.querySelector("[value=Confirm]").addEventListener("click", function () {
    let confirmation = confirm("Do you really want to \"confirm\".");
    console.log("Confirm Value : " + confirmation);
});

document.querySelector("[value=TypeOf]").addEventListener("click", function () {
    let a = "Kenura Ransana Gunarathna";

    console.log(a.endsWith("thna"));
});