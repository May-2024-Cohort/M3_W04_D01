import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function AddBeerPage() {

    const [name,setName] = useState('')
    const [tagline,setTagline] = useState('')
    const [contributedBy,setContributedBy] = useState('')
    const [attenuationLevel,setAttenuationLevel] = useState(0)
    const [imageUrl,setImageUrl] = useState("")


    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        let newBeer = {
            name,
            tagline,
            contributed_by: contributedBy,
            attenuation_level:attenuationLevel,
            image_url:imageUrl
        }
        axios.post('http://localhost:5005/api/beers/',newBeer)
        .then(()=>{
            alert("YAY new beer created")

            navigate('/beers')

        })
        .catch((err)=>{console.log(err)})
    }

    const handleFileUpload = (e) => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);
     
        const uploadData = new FormData();
     
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new movie in '/api/movies' POST route
        uploadData.append("imageUrl", e.target.files[0]);
     
        axios.post('http://localhost:5005/api/upload',uploadData)
          .then(response => {
            // console.log("response is: ", response);
            // response carries "fileUrl" which we can use to update the state
            // setImageUrl(response.fileUrl);
            console.log(response.data.fileUrl)
            setImageUrl(response.data.fileUrl)
          })
          .catch(err => console.log("Error while uploading the file: ", err));
      };
    
    return(
        <div>

            <form onSubmit={handleSubmit}>

                <label>
                    Name:
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} />
                </label>

                <label>
                    Tagline:
                    <input type="text" onChange={(e)=>{setTagline(e.target.value)}} />
                </label>

        

                <label>
                    Contributed By:
                    <input type="text" onChange={(e)=>{setContributedBy(e.target.value)}} />
                </label>

                <label>
                    Attenuation Level:
                    <input type="number" value={attenuationLevel} onChange={(e)=>{setAttenuationLevel(e.target.value)}} />
                </label>
                <label>
                    Picture:
                    <input type="file" onChange={(e) => handleFileUpload(e)} />
                </label>

                
                <button>Submit</button>
            </form>
        </div>
    )

}

export default AddBeerPage;
