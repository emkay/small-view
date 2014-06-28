var test = require('tape');
var View = require('..');

test('view init', function (t) {
    var view = View();
    view.init();
    t.ok(view, 'All is well with `view`');
    t.end();
});

test('view events', function (t) {
    document.body = document.createElement('body');
    document.body.appendChild(document.createElement('button'));

    var view = View({
        events: {
            'button': {
                click: function (e) {}
            }
        }
    });

    view.init();

    t.ok(view, 'All is well with `view`');
    t.end();
});

test('view remove', function (t) {
    document.body = document.createElement('body');
    document.body.appendChild(document.createElement('button'));

    var view = View({});

    view.init();

    t.ok(view, 'All is well with `view`');
    t.equal(view.el instanceof Node, true, 'Container has type `Node`');
    view.remove();

    t.notok(view.el, 'Container is gone after `remove`');
    t.end();
});

test('view set container attribute', function (t) {
    var view = View({
        container: '#main-view'
    });

    view.init();

    t.ok(view, 'All is well with `view`');
    t.ok(document.querySelector('#main-view'), 'Container has id of `main-view`');

    t.end();
});
