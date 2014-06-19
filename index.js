
function View(opts) {
    if (!(this instanceof View)) return new View(opts);
    opts = opts || {};

    this.container = opts.container || 'body';
    this.events = opts.events || null;
    this.model = opts.model || null;
    this.tagName = opts.tagName || 'div';
    this.template = opts.template || null;
}

View.prototype.init = function init() {
    this.el = document.querySelector(this.container);
    if (this.events) {
        attachEvents(this.events);
    }
};

View.prototype.render = function render(context) {
    return this;
};

function attachEvents(events) {
    Object.keys(events).forEach(function eventLooper (sel) {
        var node = document.querySelector(sel);
        //console.log(event);
        //console.log(events[event]);
    });
}

module.exports = View;
