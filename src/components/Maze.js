import MazeLogic from '../maze-logic/Maze'
import Position from '../maze-logic/Position'
import { useState } from 'react'

function topTest(m, pos) {
    return !m.checkLink(pos.up(), pos)
}

function leftTest(m, pos) {
    return !m.checkLink(pos.left(), pos);
}

function rightTest(m, pos) {
    return !m.checkLink(pos, pos.right());
}

function bottomTest(m, pos) {
    return !m.checkLink(pos, pos.down())
}

export default function Maze ({n}) {
    let [m, setMaze] = useState(new MazeLogic(n))

    let res = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let pos = new Position(n, i, j)

            if (topTest(m, pos)) {
                res.push(<div className="horizontal-wall" key={`wall-horiz-${i}-${j}`} style={{
                                                                    gridRow: 2 * j + 1,
                                                                    gridColumn: `${2 * i + 1} / span 3`,
                                                                    zIndex: i*n + j}}>
                    <div className='top'></div>
                    <div className='front'></div>
                </div>)
            }
            
            if (leftTest(m, pos)) {
                res.push(<div className="vertical-wall" key={`wall-vert-${i}-${j}`} style={{
                                                                    gridRow: `${2 * j + 1} / span 3`,
                                                                    gridColumn: 2 * i + 1, 
                                                                    zIndex: i*n + j}}>
                    <div className='top'></div>
                    <div className='front'></div>
                </div>)
            }
            
        }
    }

    for (let i = 0; i < n; i++) {
        res.push(
            <div className="vertical-wall" key={`vertical-${i}`} style={{gridRow: `${2 * i + 1} / span 3`, gridColumn: 2 * n + 1, zIndex: 100000}}>
                <div className='top'></div>
                <div className='front'></div>
            </div>
        )
        res.push(
            <div className="horizontal-wall" key={`horizontal-${i}`} style={{gridRow: 2 * n + 1, gridColumn: `${2 * i + 1} / span 3`, zIndex: 100002}}>
                <div className='top'></div>
                <div className='front'></div>
            </div>
        )
    }
    
    
    

    return <div className="maze" style={{
        gridTemplateColumns: `10px repeat(${n}, 70px 10px)`,
        gridTemplateRows: `30px repeat(${n}, 50px 30px)`
    }}>
        {res}
    </div>
}