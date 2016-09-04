$(document).ready(function () {

    var categoryName = 'categoryName';
    var grid = $(".grid");

    var item = $("<div>").addClass("item");

    var panel = $("<div>").addClass("panel panel-default panel-product");
    $(panel).appendTo(item);
    var panel_heading = $("<div>").addClass("panel-heading");
    $(panel_heading).appendTo(panel);

    var panel_title = $("<h3></h3>").addClass("panel-title").html("<strong>" + categoryName + "</strong>");
    $(panel_title).appendTo(panel_heading);

    var list_group = $("<ul></ul>").addClass("list-group allproducts");
    $(list_group).appendTo(panel_heading);

    $(item).appendTo(grid);
    var div = document.createElement("div");
    div.className = "item";
    div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";
    salvattore.appendElements(grid, [div]);


});


