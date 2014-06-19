
function View(opts) {
    if (!(this instanceof View)) return new View(opts);
    if (!opts) {
        opts = {};
    }
    this.container = opts.container || 'body';
}

