$(document).ready(function () {
    $("#reservation_form").submit(function (event) {
        
        // Declaration of variables
        var arrival_date = $("#arrival_date").val().trim();
        var nights = $("#nights").val().trim();
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var isValid = true;
        
        // Patterns to validate date, email and phone numbers
        var datePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        
        // Set focus to arrival date form box.
        $("#arrival_date").focus();
        
        // Validate arrival date
        if (arrival_date == "") {
            $("#arrival_date").next().text("This field is required.");
            isValid = false;
        } else if (!datePattern.test(arrival_date)) {
            $("#arrival_date").next().text("Please enter date as mm/dd/yyyy.");
            isValid = false;
        } else {
            $("#arrival_date").next().text("");
        }
        
        // Validate number of nights
        if (nights == "") {
            $("#nights").next().text("This field is required.");
            isValid = false;
        } else if (isNaN(nights)) {
            $("#nights").next().text("This field must be numeric.")  ;
            isValid = false;
        } else {
            $("#nights").next().text("");
        }
        
        // Valdiate Name
        if (name == "") {
            $("#name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#name").next().text(""); 
        }
        
        // Validate Email
        if (email == "") {
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").next().text("This is not a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");    
        }
        
        // Validate phone
        if (phone == "") {
            $("#phone").next().text("This field is required.");
            isValid = false;
        } else if (!phonePattern.test(phone)) {
            $("#phone").next().text("Please enter a valid phone number.");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }
        
        // If any entry is not valid prevent the form from submitting
        if (isValid == false) { event.preventDefault(); }
        
    }); // End event
}); // End ready