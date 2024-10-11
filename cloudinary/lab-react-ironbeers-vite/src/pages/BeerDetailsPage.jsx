import {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
function BeerDetailsPage() {
    const [beer,setBeer] = useState(null)

    const navigate = useNavigate()

    const {beerId} = useParams()
    console.log(beerId)
    useEffect(()=>{
        axios.get(`http://localhost:5005/api/beers/${beerId}`)
        .then((oneBeer)=>{
            console.log(oneBeer.data)
            setBeer(oneBeer.data)
        })
        .catch((err)=>{console.log(err)})
    },[beerId])


    function deleteBeer(){
        axios.delete(`http://localhost:5005/api/beers/${beerId}`)
        .then(()=>{
            alert("Delete successfull")
            navigate('/beers')
        })
    }
    return(
        <div>
            {beer && (
                <div>
                    <img id='beer-img' src={beer.image_url} alt="" />
                    <h1>{beer.name}</h1>
                    <p>{beer.tagline}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    {beer.is_alchoholic && <p>WARNING: Contains Alchohol</p>}
                    {!beer.is_alchoholic && <p>Alchohol Free</p>}

                    
                    <p>{beer.contributed_by}</p>

                    <button onClick={deleteBeer}>Delete Beer</button>
                    <button onClick={()=>{navigate(`/beers/${beerId}/edit`)}}>update Beer Information</button>


                </div>
            )}
        </div>
    )
}

export default BeerDetailsPage;
