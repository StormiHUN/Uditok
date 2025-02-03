import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Uditok = () => {

  const [list, setList] = useState([])

  const [nev, setNev] = useState("")
  const [meret, setMeret] = useState("")
  const [kep, setKep] = useState("")

  async function getList() {
    const resp = await fetch("http://localhost:88/uditok")
    const json = await resp.json()
    setList(json)
  }

  async function torol(id) {
    const resp = await fetch("http://localhost:88/udito/"+id,{
      method : "DELETE",
      headers : {"Content-Type" : "application/json"}
    })
    getList()
  }

  async function newUdito() {
    const resp = await fetch("http://localhost:88/udito",{
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({nev : nev, meret : meret, kep : kep})
    })
    getList()
  }

  useEffect(() => {
    getList()
  },[list])

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
      <input className='border p-2 rounded-md' type="text" placeholder='Név' value={nev} onChange={(e) => setNev(e.target.value)} />
      <input className='border p-2 rounded-md' type="text" placeholder='Méret' value={meret} onChange={(e) => setMeret(e.target.value)} />
      <input className='border p-2 rounded-md' type="text" placeholder='Kép' value={kep} onChange={(e) => setKep(e.target.value)} />
      <button className='bg-teal-200 hover:bg-teal-300 transition-all p-2 rounded border' onClick={() => newUdito()}>Hozzáad</button>
      </div>
      <div>
        <ul className='border'>
          {list.map((item, index) => 
            index % 2 ? <li className='bg-teal-50 w-full p-1 flex justify-between'><div>{item.nev} ({item.meret} liter)</div> <button className='ml-auto hover:text-red-500' onClick={() => torol(item.uaz)}>X</button></li> : <li className='bg-teal-100 w-full p-1 flex justify-between'><div>{item.nev} ({item.meret} liter)</div> <button className='ml-auto hover:text-red-500' onClick={() => torol(item.uaz)}>X</button></li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Uditok
