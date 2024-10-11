import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

function UpdateBeerPage() {
    const [name,setName] = useState('')
    const [tagline,setTagline] = useState('')
    const [contributedBy,setContributedBy] = useState('')
    const [attenuationLevel,setAttenuationLevel] = useState(0)

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:5005/api/beers/${id}`)
        .then((foundBeer)=>{
            setName(foundBeer.data.name)
            setTagline(foundBeer.data.tagline)
            setContributedBy(foundBeer.data.contributed_by)
            setAttenuationLevel(foundBeer.data.attenuation_level)

        })
    },[])

    function handleSubmit(e){
        e.preventDefault()

        let updatedBeer = {
            name,
            tagline,
            contributed_by: contributedBy,
            attenuation_level:attenuationLevel
        }
        axios.put(`http://localhost:5005/api/beers/${id}`,updatedBeer)
        .then(()=>{
            alert("YAY new beer Updated")

            navigate('/beers')

        })
        .catch((err)=>{console.log(err)})
    }

  return (
    <div>

    <form onSubmit={handleSubmit}>

        <label>
            Name:
            <input value={name} type="text" onChange={(e)=>{setName(e.target.value)}} />
        </label>

        <label>
            Tagline:
            <input value={tagline} type="text" onChange={(e)=>{setTagline(e.target.value)}} />
        </label>



        <label>
            Contributed By:
            <input value={contributedBy} type="text" onChange={(e)=>{setContributedBy(e.target.value)}} />
        </label>

        <label>
            Attenuation Level:
            <input  type="number" value={attenuationLevel} onChange={(e)=>{setAttenuationLevel(e.target.value)}} />
        </label>

        
        <button>Submit</button>
    </form>
</div>
  )
}

export default UpdateBeerPage
