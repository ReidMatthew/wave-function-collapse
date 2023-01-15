class Tile {
    /**
     * @param {Vector} pos 
     * @param {Vector} origin 
     * @param {Vector} dim 
     */
    constructor(pos, origin, dim) {
        this.pos = pos;
        this.origin = origin;
        this.dim = dim;
        this.color = [Math.floor(Math.random() * 50 + 80)];
        // this.color = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
        this.states = [...states];

        this.collapsed = false;
        this.state = this.states[Math.floor(Math.random() * this.states.length)];

        this.id = pos.id;
    }

    show() {
        fill(this.color);
        rect(this.origin.x, this.origin.y, this.dim.x, this.dim.y);

        this.state.show(this.origin, this.dim);
    }

    entropy() {
        return this.states.length;
    }

    reduceEntropy() {
        this.states.shift();

        if (this.entropy() === 1)
            this.collapse();
    }

    collapse() {
        this.collapsed = true;
        this.state = this.states.pop();
        this.color = "pink"
    }
}