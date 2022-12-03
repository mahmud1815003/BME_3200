import React from 'react'

const Hospital = ({sl, name, address}) => {
  return (
    <div className='grid grid-cols-3 gap-4 text-center py-4'>
        <h1>{sl}</h1>
        <h1>{name}</h1>
        <h1>{address}</h1>
    </div>
  )
}

export default Hospital