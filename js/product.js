$(document).ready(function () {

    $('.product').click(function () {

        var productName = $(this).children().text();
        var count = 1;
        var newProduct = $("<div class='productInBasket'></div>")
            .append("<span class=\"productName\">" + productName + "</span>")
            .append("<span> - </span>")
            .append("<span class=\"productCount\>" + count + "</span>");


        $('.basket').prepend(newProduct);


    });



});

function countProduct(productName) {
    var count = 0;
    basket = $('.basket').children().each();
}
