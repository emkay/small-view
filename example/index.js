var View = require('small-view');

var view = View({
    container: '#some-view',
    events: {
        'button': {
            click: handleClick
        }
    },
    template: '<button>Hello</button>'
});

function handleClick() {
    console.log('Click!');
}

view.init();
