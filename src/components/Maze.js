import MazeLogic from '../maze-logic/Maze'
import Position from '../maze-logic/Position'
import { useState } from 'react'

export default function Maze ({n}) {
    let [m, setMaze] = useState(new MazeLogic(n))

    console.log(m)
    let res = [];
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            let pos = new Position(n, i, j)

            console.log(pos.up(), pos, m.checkLink(pos.up(), pos))
            console.log(pos.left(), pos, m.checkLink(pos.left(), pos))
            console.log(pos.right(), pos, m.checkLink(pos, pos.right()))
            console.log(pos.down(), pos, m.checkLink(pos, pos.down()))

            res.push(<div key={"(" + i + "," + j + ")"} 
                        style = {{
                            borderTop: !m.checkLink(pos.up(), pos) ? "3px solid black" : null,
                            borderLeft: !m.checkLink(pos.left(), pos) ? "3px solid black" : null,
                            borderRight: !m.checkLink(pos, pos.right()) ? "3px solid black" : null,
                            borderBottom: !m.checkLink(pos, pos.down()) ? "3px solid black" : null
                        }}></div>)
        }
    }

    return <div className="maze" style={{gridTemplateColumns: `repeat(${n}, 1fr)`}}>
        {res}
    </div>
}