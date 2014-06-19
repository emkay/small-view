function View(opts) {
    if (!(this instanceof View)) return new View(opts);
    opts = opts || {};

    this.container = opts.container || 'body';
    this.parentNode = opts.parent || null;
    this.events = opts.events || null;
    this.model = opts.model || null;
    this.tagName = opts.tagName || 'div';
    this.template = opts.template || null;
}

View.prototype.init = function init() {
    var tag;

    this.el = document.querySelector(this.container);

    if (!this.el) {
        if (this.container === 'body') {
            document.body = document.createElement('body');
            this.el = document.body;
        } else {
            this.el = document.createElement(this.tagName);
            if (this.parentNode) {
                this.parentNode.appendChild(this.el);
            } else {
                if (!document.body) {
                    document.body = document.createElement('body');
                }
                document.body.appendChild(this.el);
            }
        }
    }

    if (this.events) {
        attachEvents.call(this);
    }
};

View.prototype.render = function render(context) {
    return this;
};

function attachEvents() {
    var events = this.events;
    var el = this.el;

    Object.keys(events).forEach(function eventLooper (sel) {
        var node = el.querySelector(sel);
    });
}

module.exports = View;
