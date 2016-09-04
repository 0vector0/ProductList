$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "resources/products.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('category').each(
                function () {
                    var categoryName = $(this).attr('name');
                    var category = $("<div class='panel panel-default panel-product item'></div>")
                        .append("" +
                            "<div class='panel-heading'>" +
                            "<h3 class='panel-title'><strong>" + categoryName + "</strong></h3>" +
                            "</div>")
                        .append("<ul class='list-group allproducts'></ul>");

                    $(category).appendTo('#categoryList');

                    $(xml).find('product').each(
                        function () {
                            var parent = $(this).parent();
                            var atr = parent.attr("name");
                            var id = $(this).attr('id'),
                                title = $(this).text();
                            if (atr == categoryName) {
                                var newProduct = $("<li class='list-group-item'></li>")
                                    .append("<div class='product'><span>" + title + "</span> </div>");
                                $(newProduct).appendTo(category.children('.allproducts'));
                            }
                        });
                }
            );
        }
    });

    var date = new Date();

    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

     $('.date').append(date.toLocaleString("uk", options));

});


