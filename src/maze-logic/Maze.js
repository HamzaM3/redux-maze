import Position from "./Position";

const [UP, LEFT, RIGHT, DOWN] = [0, 1, 2, 3]

function getExplorationOrder () {
    return [UP, LEFT, RIGHT, DOWN].sort((a, b) => {
        return Math.random() - 0.5;
    });
}

function getEdgeRepresentation(pos1, pos2) {
    return `(${pos1.x_init}, ${pos1.y_init}) (${pos2.x_init}, ${pos2.y_init})`
}

function contains (arr, pos) {
    return arr.filter(pos2 => pos.isEqual(pos2)).length !== 0
}
 
function BFS_4_edges (graph, n) {
    let init_pos = new Position(n)

    let visited = []

    function BFS_4_edges_rec (pos) {
        let exploration_order = getExplorationOrder()
      
        visited.push(pos)

        for (let dir of exploration_order) {
            let id;
            switch (dir) {
                case UP:
                    id = getEdgeRepresentation(pos.up(), pos)
                    if (!contains(visited, pos.up())) {
                        graph.set(id, 1)
                        BFS_4_edges_rec(pos.up())
                    }
                    break;
                case DOWN:
                    id = getEdgeRepresentation(pos, pos.down())
                    if (!contains(visited, pos.down())) {
                        graph.set(id, 1)
                        BFS_4_edges_rec(pos.down())
                    }
                    break;
                case LEFT:
                    id = getEdgeRepresentation(pos.left(), pos)
                    if (!contains(visited, pos.left())) {
                        graph.set(id, 1)
                        BFS_4_edges_rec(pos.left())
                    }
                    break;
                case RIGHT:
                    id = getEdgeRepresentation(pos, pos.right())
                    if (!contains(visited, pos.right())) {
                        graph.set(id, 1)
                        BFS_4_edges_rec(pos.right())
                    }
                    break;
                default:
                    throw("WRONG DIRECTION")
            }
        }
    }

    BFS_4_edges_rec(init_pos)
}



export default class Maze {

    constructor (n) {
        this.graph = new Map()
        this.n = n;
        BFS_4_edges(this.graph, this.n)
    }

    checkLink(pos1, pos2){
        return this.graph.has(getEdgeRepresentation(pos1, pos2))
    }
}
