const {model, Schema} = require('mongoose')

const beersSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    tagline:{
        type:String,
        maxLength:50
    },
    attenuation_level:{
        type:Number,
        min:0,
        max:100
    },
    image_url:{
        type:String,
        default:"https://img.freepik.com/vector-premium/taza-cerveza-caminando-mascota-dibujada-mano-personaje-dibujos-animados-pegatina-icono-concepto-ilustracion-aislada_730620-496269.jpg?semt=ais_hybrid"
    },
    contributed_by:String,
    is_Alchaholic:{
        type:Boolean,
        default:true
    }
})

const Beer = model("Beer",beersSchema)

module.exports = Beer