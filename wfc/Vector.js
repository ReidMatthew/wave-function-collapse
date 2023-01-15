class Vector {
    /**
     * An ordered pair (x,y)
     * @param {Number} x "x" component of the Vector
     * @param {Number} y "y" component of the Vector
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = [random(255), random(255), random(255)];
        this.id = Vector.identify(this)
    }

    show(f = this.color, s = "black") {
        
    }

    compareWith(v) {
        return Vector.compare(this, v);
    }

    static compare(v1, v2) {
        return v1.id === v2.id;
    }

    static identify(v) {
        return `${Math.floor(v.x)}-${Math.round(v.y)}`;
    }
}