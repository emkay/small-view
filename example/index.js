var View = require('..');

var view = View({
    events: {
        '.test': {
            click: 'handleClick'
        }
    }
});

view.init();
