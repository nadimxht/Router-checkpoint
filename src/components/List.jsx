import React from 'react'
import {Link} from 'react-router-dom'
export default function List({moviesList}) {
  return (
    <div style={{display:'flex',flexDirection:"row"}}>{
      
      moviesList.map((e,key)=>(
        <div key={key} style={{padding:"1rem" , border:"1px solid black",margin:"1rem",width:"200px", display:'flex',flexDirection:"column"}}>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <img width={100} height={100} src={e.posterUrl} alt={e.title} />
            <Link to={`/${e.id}` } state={{data:e}} >See Rate</Link>
        </div>
      ))}</div>
  )
}
