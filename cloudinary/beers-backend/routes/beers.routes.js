const Beer = require('../models/Beer.model')

const router = require('express').Router()


const fileUpload = require('../config/cloudinary.config')


router.post('/upload',fileUpload.single("imageUrl"),(req,res)=>{
    
    if(!req.file){
        res.json("No file Uploaded")
        return
    }
    res.json({fileUrl:req.file.path})
})

router.get('/beers',(req,res)=>{
    Beer.find()
    .then(allBeers=>{
        res.json(allBeers)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})


router.get('/beers/search',(req,res)=>{
    console.log(req.query)

    Beer.find({name:{$regex:req.query.q}})
    .then((foundBeer)=>{
        res.json(foundBeer)
    })
    .catch(err=>{
        res.json(err)
    })
})


router.get('/beers/random',async(req,res)=>{

    try{
        let randomBeer = await Beer.aggregate([{ $sample: { size: 1 } }]);
        res.json(randomBeer[0])
    
    }
    catch(err){
        console.log(err)
        res.json(err)
    }

})

router.get('/user/:username',(req,res)=>{

    User.findOne({username:req.params.username})
    .then(()=>{

    })
})

router.get('/beers/:id',async(req,res)=>{

    try{
        let foundBeer = await Beer.findById(req.params.id)
        res.json(foundBeer)
    
    }catch(err){
        res.json(err)
    }
})


router.post('/beers',(req,res)=>{
    Beer.create(req.body)
    .then(createdBeer=>{
        res.status(201).json(createdBeer)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })

})


router.put('/beers/:id',(req,res)=>{

    Beer.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((changedBeer)=>{
        res.json(changedBeer)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})

router.delete('/beers/:id',(req,res)=>{
    Beer.findByIdAndDelete(req.params.id)
    .then((deletedBeer)=>{
        res.json(deletedBeer)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})








module.exports = router