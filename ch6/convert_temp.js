"use strict";
var $ = function (id) { return document.getElementById(id); };


var clearTextBoxes = function () {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

var convertTemp = function () {
    var degrees = parseFloat($("degrees_entered").value);
    var toC = document.getElementById("to_celsius");
    if (isNaN(degrees)) {
        alert("Must enter a valid number for degrees");
    } else if (toC.checked) {
        var result = (degrees - 32) * 5 / 9;
        $("degrees_computed").value = result.toFixed(0);
    } else {
        var result = (degrees * 9 / 5) + 32;
        $("degrees_computed").value = result.toFixed(0);
    }
};

var toCelsius = function () {
    document.getElementById("degree_label_1").innerHTML = 'Enter F degrees:';
    document.getElementById("degree_label_2").innerHTML = 'Degrees Celsius:';
};

var toFahrenheit = function () {
    document.getElementById("degree_label_1").innerHTML = 'Enter C degrees:';
    document.getElementById("degree_label_2").innerHTML = 'Degrees Fahrenheit:';
};

window.onload = function () {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};