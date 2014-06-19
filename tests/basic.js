var test = require('tape');
var View = require('..');

test('view init', function (t) {
    var view = View();
    t.ok(view);

    view.init();
    t.end();
});

test('view events', function (t) {
    var view = View({
        events: {
            '.test': {
                click: 'handleClick'
            }
        }
    });
    t.end();
});
