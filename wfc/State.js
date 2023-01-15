class State {
    /**
     * @param {Image} img 
     * @param {[string]} pattern 
     * @param {number} rotationType 
     * @param {boolean} flipType 
     * @param {string} id 
     */
    constructor(img, pattern, rotationType, flipType, id) {
        this.img = img;
        this.pattern = pattern;
        this.rotationType = rotationType ?? Math.floor((Math.random() * 4));
        this.rotation = this.rotationType * Math.PI / 2;
        this.flipType = flipType ?? false;
        this.id = id ?? State.identify(pattern);
    }

    /**
     * @param {Vector} pos 
     * @param {Vector} dim 
     */
    show(pos, dim) {
        push();
        translate(pos.x + dim.x / 2, pos.y + dim.y / 2);
        if (this.flipType)
            scale(-1, 1);
        rotate(this.rotation);
        if (this.rotationType % 2 == 0)
            image(this.img, 0, 0, dim.x, dim.y)
        else
            image(this.img, 0, 0, dim.y, dim.x)

        pop();
    }

    static init() {
        let ids = [],
            id;
        states = states.flatMap((s) => {
            let tempStates = [];
            for (let f = 0; f < 2; f++) {
                for (let r = 0; r < s.pattern.length; r++) {
                    id = State.identify(s.pattern);
                    if (!ids.includes(id)) {
                        ids.push(id);
                        tempStates.push(new State(s.img, [...s.pattern], r, f, id));
                    }
                    s.pattern.unshift(s.pattern.pop()); // handles rotations
                }
                s.pattern.reverse(); // handles flips
            }

            return tempStates;
        });
    }

    static identify(p) {
        return p.toString();
    }
}