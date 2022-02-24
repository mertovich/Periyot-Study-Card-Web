import React, { useState } from 'react'
import BottomMenu from '../components/BottomMenu'
import P1 from '../components/P1'
import P2 from '../components/P2'
import P3 from '../components/P3'

const Home = () => {
    const [selectPage, setselectPage] = useState(0)
    return (
        <div>
            {selectPage === 0 ? <P1 /> : null}
            {selectPage === 1 ? <P2 /> : null}
            {selectPage === 2 ? <P3 /> : null}
            <BottomMenu/>
        </div>
    )
}

export default Home