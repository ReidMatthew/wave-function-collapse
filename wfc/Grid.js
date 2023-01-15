class Grid {
    constructor(dim, tileLayout) {
        this.dim = dim;
        this.tileLayout = tileLayout;
        this.tileDim = new Vector(this.dim.x / this.tileLayout.x, this.dim.y / this.tileLayout.y);
        this.tiles = [];

        this.init()
    }

    show() {
        this.tiles.forEach((a) => {
            a.forEach((t) => {
                t.show();
            })
        })
    }

    init() {
        for (let i = 0; i < this.tileLayout.y; i++) {
            this.tiles.push([]);
            for (let j = 0; j < this.tileLayout.x; j++)
                this.tiles[i].push(new Tile(new Vector(j, i), new Vector(this.tileDim.x * j, this.tileDim.y * i), this.tileDim));
        }
    }

    inside(v) {
        return this.tiles[Math.floor(v.y / this.tileDim.y)][Math.floor(v.x / this.tileDim.x)];
    }
}