var Controller = function (view, model) {
    var _view = view,
        _model = model;
//Updating model with new articles
    var updateModel = function () {
        $.get("http://real.pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json", function (data) {
            _model.addArticles(data);
        }).fail(function (xhr, statusText) {
            console.log("Error: " + statusText);
        });
    };
    updateModel();
//Updating view with new model data
    $('body').bind('updateView', function () {
        var modelData = _model.getArticles();
        _view.updateView(modelData);
    });

    return {
        // public functions
    };
};








