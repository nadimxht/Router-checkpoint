import React,{useEffect,useState} from 'react'
import {useParams , useLocation , useNavigate} from 'react-router-dom'
import {moviesList} from '../assets/Data'
export default function MovieRoute() {
    const [loading , setLoading] = useState(false)
    const [movie , setMovie] = useState(null)
    const {id}=useParams(); 
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        
        setMovie(moviesList[id]) ;
        
        
    });
  return (
   movie?
    (<div>
       
       <p> Movie title :{movie.title} </p>

        Rate :{movie.rate}
    </div> ) : (<p>hello</p>)
  )
}
