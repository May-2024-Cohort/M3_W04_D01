import { useState, useEffect } from "react";
import axios, { all } from 'axios'
import { Link } from "react-router-dom";
function AllBeersPage() {

    const [beers,setBeers] = useState([])
    const [searchTerm,setSearchTerm] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:5005/api/beers/')
        .then((allBeers)=>{
            console.log(allBeers)
            setBeers(allBeers.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    useEffect(()=>{
       axios.get(`http://localhost:5005/api/beers/search?q=${searchTerm}`)
       .then((responseFromAPI)=>{
        setBeers(responseFromAPI.data)
       })
    },[searchTerm])
    return(
        <div>
            <label>
                <b>Search for Beer:</b>
                <input type="text" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />

            </label>
            {beers && beers.map((oneBeer)=>{
                return(
                    <div key={oneBeer._id}>
                        <img id="beer-img" src={oneBeer.image_url} alt="" />
                        <Link to={`/beers/${oneBeer._id}`}>
                            <h2>{oneBeer.name}</h2>
                            <p>{oneBeer.tagline}</p>
                            <p>Created By: {oneBeer.contributed_by}</p>
                            <hr></hr>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeersPage;
