function random(max) {
    return Math.floor(Math.random() * max)
}

export default class Position {
    constructor (n, x_init, y_init) {
        this.x_init = x_init !== undefined ? x_init : random(n)
        this.y_init = y_init !== undefined ? y_init : random(n)
        this.n = n;
    }

    left () {
        return new Position (
            this.n,
            Math.max(this.x_init - 1, 0),
            this.y_init
        )
    }

    right () {
        return new Position (
            this.n, 
            Math.min(this.x_init + 1, this.n - 1),
            this.y_init
        )
    }

    up () {
        return new Position (
            this.n,
            this.x_init,
            Math.max(this.y_init - 1, 0)
        )
    }

    down () {
        return new Position (
            this.n,
            this.x_init,
            Math.min(this.y_init + 1, this.n - 1)
        )
    }

    isEqual(pos2) {
        return this.x_init === pos2.x_init && 
               this.y_init === pos2.y_init
    }

    toString() {
        return "(" + this.x_init + ", " + this.y_init + ")";
    }
}