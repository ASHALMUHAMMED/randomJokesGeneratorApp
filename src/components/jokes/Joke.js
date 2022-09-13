import {useState,useEffect} from 'react'
import './Joke.css'
import smileFace from '../../assets/smile.jpeg'
import axios from 'axios'

const Joke = () => {
  const url = "http://api.icndb.com/jokes/random"
  const [isLoading,setIsLoading] = useState(true)
  const [joke,setJoke] = useState({})


const getJoke = () => {
  setIsLoading(true);
  axios.get(url).then((response)=>{
  console.log(response.data)
  setJoke(response.data)
  setIsLoading(false);
  })
}

useEffect(() => {
  setTimeout(() => {
    getJoke();
  }, 2000);
},[])


  return (
    <div className='jokes-sec'>
        <div className='container joke'>
            <h1>Random Jokes Generator</h1>
            <img src={smileFace} alt="smiley" />
            <hr />
            {isLoading ? (<h3>Loading...</h3>) : ( <p> {joke.value.joke} </p> )}
            <hr />
            <button onClick={getJoke} className='btn btn-primary'>Generate New Joke</button>
        </div>
    </div>
  )
}

export default Joke
