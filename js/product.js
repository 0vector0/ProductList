$(document).on('click touch', '.product', function () {

    var productName = $(this).children().text();
    var basket = $('.basket');
    var inBasket = false;
    var productInBasket = $('.productInBasket');

    if (productInBasket.length == 0) {
        var count = 1;
        var newProduct = $("<li class='list-group-item productInBasket'></li>")
            .append('<button type="button" class="btn btn-default btn-xs">' +
                '<span class="glyphicon glyphicon-plus hidden-print" aria-hidden="true"></span>' +
                '</button>')
            .append('<span class="productCount">' + ' ' + count + ' ' + '</span>')
            .append('<button type="button" class="btn btn-default btn-xs">' +
                '<span class="glyphicon glyphicon-minus hidden-print" aria-hidden="true"></span>' +
                '</button>')
            .append('<span class="productName">' + productName + '</span>');
        $('.basket').prepend(newProduct);
        inBasket = true;
    } else {
        productInBasket.each(function (i, elem) {
            var productNameInBasket = $(elem).children('.productName');
            var productCountInBasket = $(elem).children('.productCount');

            if (productName == productNameInBasket.text()) {
                productCountInBasket.text(parseInt(productCountInBasket.text()) + 1);
                inBasket = true;
            }

        });
        if (!inBasket) {
            var count = 1;
            var newProduct = $("<li class='list-group-item productInBasket'></li>")
                .append('<button type="button" class="btn btn-default btn-xs">' +
                    '<span class="glyphicon glyphicon-plus hidden-print" aria-hidden="true"></span>' +
                    '</button>')
                .append('<span class="productCount">' + ' ' + count + ' ' + '</span>')
                .append('<button type="button" class="btn btn-default btn-xs">' +
                    '<span class="glyphicon glyphicon-minus hidden-print" aria-hidden="true"></span>' +
                    '</button>')
                .append('<span class="productName">' + productName + '</span>');
            basket.prepend(newProduct);
        }
    }
});


$(document).on('click touch', '.productInBasket', function () {
    var productCountInBasket = $(this).children('.productCount');
    if (productCountInBasket.text() > 1) {
        productCountInBasket.text(parseInt(productCountInBasket.text()) - 1);
    } else {
        $(this).remove();
    }
});

$(document).on('click', '#btn-print', function () {
    window.print();
});
