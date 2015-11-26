var Model = function () {
    var _articles = {};
    var notifyController = function () {
        $('body').trigger('updateView');
    }
    // public methods
    return {
        addArticles: function (articles) {
            _articles = articles;
            notifyController();
        },
        getArticles: function () {
            return _articles;
        }
    };
};






