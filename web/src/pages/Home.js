import React, { useState } from 'react'
import BottomMenu from '../components/BottomMenu'
import NavBar from '../components/NavBar'
import P1 from '../components/P1'
import P2 from '../components/P2'
import P3 from '../components/P3'

const Home = () => {
    const [selectPage, setselectPage] = useState(0)

    const p1 = () =>{
        setselectPage(0)
    }
    const p2 = () =>{
        setselectPage(1)
    }
    const p3 = () =>{
        setselectPage(2)
    }

    return (
        <div>
            <NavBar/>
            {selectPage === 0 ? <P1 /> : null}
            {selectPage === 1 ? <P2 /> : null}
            {selectPage === 2 ? <P3 /> : null}
            <BottomMenu selectPage={selectPage} p1={p1} p2={p2} p3={p3} />
        </div>
    )
}

export default Home