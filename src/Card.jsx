import React from 'react'

const Card = ({data}) => {
  return (
    <div className='flex flex-col gap-2 border rounded p-2 hover:shadow-2xl'>
      <img src={data.kep}/>
      <div className='flex justify-center'>
        {data.nev}
        ({data.meret} Liter)
      </div>
    </div>
  )
}

export default Card
