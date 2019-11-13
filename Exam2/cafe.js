$(document).ready(function(){
    var subtotal = 0;
    var tax = 0;
    var total = 0;
    var isValid = false;
    
    $(".menu").hover(function(){
        //To swap images during hover using file names I borrowed code from https://stackoverflow.com/questions/540349/change-the-image-source-on-rollover-using-jquery. Pattern matching eludes me and this helped.
        var src = $(this).attr("src").match(/[^\.]+/) + "_info.jpg"; //On mouse on look for image that matches src file name and add _info.jpg to load the info image.
        $(this).attr("src", src);},
        function(){
            var src=$(this).attr("src").replace("_info.jpg",".jpg"); //On mouse off remove the _info.jpg and replace it with just .jpg and then reload that image.
            $(this).attr("src", src);});
    
    $(".menu").click(function(){
        var src = $(this).attr("src").match(/[^\.]+/) + "_info.jpg"; //To select the item, click on the image it will be replaced with the 2nd info image. I need to figure out how to unclick image without page reload.
        $(this).attr("src", src);
        subtotal = subtotal + parseFloat($(this).attr("id"))
        $("#subtotal").val(subtotal.toFixed(2));
        tax = subtotal * .07;
        $("#tax").val(tax.toFixed(2));
        total = subtotal + tax;
        $("#total").val(total.toFixed(2));
        isValid = true;
    });
    
    $("#submit").click(function(){
        if (isValid==true) {
            window.location.href = "checkout.html";
            } else {
                alert("Please select an item from the menu first.");
                };
    }); // End submit
    
    $("#clear").click(function(){
        window.location.href = "index.html";
    }); //End clear
}); //End Ready