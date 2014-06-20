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

View.prototype.detachEvents = function detachEvents() {
    walkEvents.call(this, true);
};

View.prototype.render = function render(context) {
    return this;
};

View.prototype.remove = function remove() {
    this.el && this.el.parentNode.removeChild(this.el);
    this.detachEvents();
    delete this.el;
    return this;
};

View.prototype.attachEvents = function attachEvents() {
    walkEvents.call(this);
};

function walkEvents(isRemove) {
    var events = this.events;
    var el = this.el;

    if (events) {
        Object.keys(events).forEach(function eventLooper(sel) {
            var node = el.querySelector(sel);
            var event = events[sel];

            if (node) {
                Object.keys(event).forEach(function type(type) {
                    if (!isRemove) {
                        node.addEventListener(type, event[type]);
                    } else {
                        node.removeEventListener(type, event[type]);
                    }
                });
            }
        });
    }
}

module.exports = View;
