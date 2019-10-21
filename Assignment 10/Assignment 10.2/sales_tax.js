var $ = function (id) {
    return document.getElementById(id); 
};

var calc_sales_tax = function(subtotal, tax) {
        var sales_tax = subtotal * (tax/100);
        return sales_tax;
};

var calc_total = function(subtotal, sales_tax) {
        var total = subtotal + sales_tax;
        return total;
}

var clear = function (subtotal, tax_rate, sales_tax, total) {
    document.getElementById("subtotal").value = "";
    document.getElementById("tax_rate").value = "";
    document.getElementById("sales_tax").value = "";
    document.getElementById("total").value = "";
    document.getElementById('subtotal').focus();
}    

var calc_on_click = function() {
    document.getElementById('subtotal').focus();
    var subtotal = parseFloat($("subtotal").value);
    var tax = parseFloat($("tax_rate").value);
    var error = "Subtotal must be between 0 and 10000 the tax rate must be between 0 and 12";
    if (isNaN(subtotal) || subtotal < 0 || subtotal > 10000|| isNaN(tax) || tax < 0 || tax > 12){
        alert(error);
    }
    else {
        $("sales_tax").value = calc_sales_tax(subtotal, tax)
        $("total").value =  calc_total(subtotal, calc_sales_tax(subtotal, tax));
    }
}


window.onload = function() {
    $("calculate").onclick = calc_on_click;
    document.getElementById('subtotal').focus();
    $("clear").onclick = clear;
}


