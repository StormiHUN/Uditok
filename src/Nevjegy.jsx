import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Nevjegy = () => {

    const [html, setHtml] = useState("")

    async function getHtml() {
        const resp = await fetch("http://localhost:88")
        const text = await resp.text()
        setHtml(text)
    }

    useEffect(() => {
        getHtml()
    },[])

  return (
    <div>
      {html}
    </div>
  )
}

export default Nevjegy
