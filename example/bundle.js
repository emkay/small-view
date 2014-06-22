(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var View = require('small-view');

var view = View({
    container: '#some-view',
    events: {
        'button': {
            click: handleClick
        }
    }
});

function handleClick() {
    console.log('Click!');
}

view.init();

view.remove();

},{"small-view":2}],2:[function(require,module,exports){
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
        this.attachEvents();
    }
};

View.prototype.detachEvents = function detachEvents() {
    walkEvents.call(this, true);
};

View.prototype.render = function render(context) {
    return this;
};

View.prototype.remove = function remove() {
    console.log('removing');
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

},{}]},{},[1])