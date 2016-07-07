$(document).ready(function () {

    $('.product').click(function () {

        var productName = $(this).children().text();

        var basket = $('.basket');
        var productNameInBasket;
        var productCount;

        $('.productInBasket').each(function (i, elem) {
            productNameInBasket = $(elem).children('.productName');
            productCountInBasket = $(elem).children('.productCount');


            if (productNameInBasket.text() == productName) {
                productCountInBasket.text(parseInt(productCountInBasket.text()) + 1);

            } else {
                var count = 1;
                var newProduct = $("<div class='productInBasket'></div>")
                    .append("<span class='productName'>" + productName + "</span>")
                    .append("<span> - </span>")
                    .append("<span class=\"productCount\">" + count + "</span>");


                $('.basket').prepend(newProduct);
            }



        });

    });

});

//$('.testBtn').click(function () {
//            var basket = $('.basket');
//            var productName;
//            var productCount;
//
//            $('.productInBasket').each(function (i, elem) {
//                productName = $(elem).children('.productName');
//                productCount = $(elem).children('.productCount');
//
//                productCount.text(parseInt(productCount.text()) + 1);
//
//
//
//
//
//            });
//
//            function countProduct(productName) {
//                var count = 0;
//                basket = $('.basket').children().each();
//            };
