import React from 'react'

export default function Search({setSearchWord}) {
  return (
    <div>
        <input type="text" onChange={(e)=>setSearchWord(e.target.value)} />
    </div>
  )
}
