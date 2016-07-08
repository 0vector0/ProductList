$(document).ready(function () {

    $('.product').click(function () {

        var productName = $(this).children().text();

        var basket = $('.basket');
        var productNameInBasket;
        var productCount;
        var inBasket = false;
        
        $('.productInBasket').each(function (i, elem) {
            productNameInBasket = $(elem).children('.productName');
            productCountInBasket = $(elem).children('.productCount');
            
             if (productName == productNameInBasket.text()) {
                inBasket = true;
            }
            
        });

        $('.productInBasket').each(function (i, elem) {
            productNameInBasket = $(elem).children('.productName');
            productCountInBasket = $(elem).children('.productCount');
            


            if (inBasket && productName == productNameInBasket.text()) {
                productCountInBasket.text(parseInt(productCountInBasket.text()) + 1);


            }
            if (!inBasket) {

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

$('.testBtn').click(function () {
    var basket = $('.basket');
    var productName = 'Хлеб';
    var productCount;
    //     console.log(productName);

    $('.productInBasket').each(function (i, elem) {
        //       this.productName =  productName;
        productNameInBasket = $(elem).children('.productName');
        productCountInBasket = $(elem).children('.productCount');

        if (productName == productNameInBasket.text()) {
            console.log(productName);
            //        console.log(productName);
            //        console.log(productNameInBasket.text());

            productCountInBasket.text(parseInt(productCountInBasket.text()) + 1);

        }



    });
});

//            function countProduct(productName) {
//                var count = 0;
//                basket = $('.basket').children().each();
//            };
