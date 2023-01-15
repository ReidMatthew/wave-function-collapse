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
        this.color = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
        this.id = pos.id;
    }

    show() {
        fill(this.color);
        rect(this.origin.x, this.origin.y, this.dim.x, this.dim.y)
    }
}