import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from "./Card"

const Szerkeszt = () => {

    const [list, setList] = useState([])

    async function getList() {
        const resp = await fetch("http://localhost:88/uditok")
        const json = await resp.json()
        setList(json)
    }

    useEffect(() => {
        getList()
    }, [])

    return (
        <div>
            <div className='grid grid-cols-2 gap-2'>
                {
                    list.map(item => 
                        <Card data={item} />
                    )
                }
            </div>
        </div>
    )
}

export default Szerkeszt
