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
        this.states = [...states];

        this.collapsed = false;

        this.id = pos.id;
    }

    show() {
        fill(this.color);
        rect(this.origin.x, this.origin.y, this.dim.x, this.dim.y);
        fill("black");

        if (this.collapsed)
            this.state.show(this.origin, this.dim);
        else
            text(`${this.entropy()}`, this.origin.x + this.dim.x / 2, this.origin.y + this.dim.y / 2);
    }

    assessEdges() {
        this.edges = [this.possibleEdge(0), this.possibleEdge(1), this.possibleEdge(2), this.possibleEdge(3)];
    }

    possibleEdge(edge) {
        return this.collapsed ? [this.state.pattern[edge]] : this.states.map(s => s.pattern[edge]).filter((n, i, a) => a.indexOf(n) === i);
    }

    entropy() {
        return this.states.length;
    }

    reduceEntropy(edge, possibleEdges) {
        if (this.entropy() === 1)
            this.collapse();

        this.assessEdges();
    }

    collapse() {
        this.collapsed = true;
        this.state = this.states[Math.floor(Math.random() * this.states.length)];
    }
}