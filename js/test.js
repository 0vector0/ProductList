$(document).ready(function () {
    $.ajax({
        type: "GET", // метод передачи данных, можно пропутсить - по умолчанию и так get
        url: "resources/products.xml", // путь к файлу, который будем читать
        dataType: "xml", // тип данных, с котрыми работаем
        success: function (xml) { // переменная названа xml. ее можно назвать как либо по другому
            /*
             в ответе приходит объект XML.
             чтобы добраться до необходимого узла, используем jQuery-поиск по DOM узлам
             например, var idItem = jQuery(xml).find("#item1").eq(1).attr("id");
             */

            $(xml).find('category').each(
                function () {
                    var categoryName = $(this).attr('name');
                    // var categoryId = '';


                    console.log(categoryName);
                    var category = $("<div class='panel panel-default'></div>")
                        .append("" +
                            "<div class='panel-heading'>" +
                            "<h3 class='panel-title'><strong>" + categoryName + "</strong></h3>" +
                            "</div>")
                        .append("<ul class='list-group'> </ul>");

                    $(category).appendTo('#categoryList');

                    $(xml).find('product').each(
                        function () {
                            var parent = $(this).parent();
                            var atr = parent.attr("name");
                            var id = $(this).attr('id'),
                                title = $(this).find('title').text();
                            if (atr == categoryName) {
                                var newProduct = $("<li class='list-group-item'></li>")
                                    .append("<div class='products'></div>")
                                    .append('<span>' + title + '</span>');

                                $(".list-group").append(newProduct);
                            }
                        });
                }
            );

            // $(xml).find('product').each(
            //     function () {
            //         // $(parent(this)).atr('name').text()
            //         var parent = $(this).parent();
            //         var atr = parent.attr("name");
            //         // console.log(atr);
            //         var id = $(this).attr('id'),
            //             title = $(this).find('title').text();
            //         if (atr == 'Молочный отдел') {
            //             $('<div class="products"></div>').html('<p>' + title + '</p>').appendTo('#milk');
            //         }
            //         if (atr == 'Хлебный отдел') {
            //             $('<div class="products"></div>').html('<p>' + title + '</p>').appendTo('#bread');
            //         }
            //
            //
            //     }
            // );

        }

    });

});

