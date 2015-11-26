var View = function () {
    var updateView = function (articles) {
        var htmlTemplate =
            '<li class="article-main-info">' +
            '<img src="${enclosure.url}"  />' +
            '<h5>${title}</h5>' +
            '<div class="caption">' +
            '<p>${description}</p>' +
            '<p>Link: <a href="${link}" target="_blank">${link}</a></p>' +
            '</div>' +
            '</li>';
        $.tmpl(htmlTemplate, articles.value.items).appendTo("#articles-list");
        // Show/Hide caption element
        $(".article-main-info").click(function (event) {
            event.stopPropagation();
            var captionElement = $(this).children(".caption");
            captionElement.toggle(400);
        });
    };
    return {
        updateView: function (modelData) {
            // Update view
            updateView(modelData);
        }
    }
};








