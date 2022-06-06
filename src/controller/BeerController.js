const Beer = require("../model/beerModel")

const BeerController = {
    getAll: async(req, res) => {
        try{
            const beers = await Beer.find()

            // console.log(beers)
            res.json(beers)
        } catch(error){
            console.log(error)
        }
    },
    add: async(req, res) => {
        try{
            const {name, price, quantity} = req.body
            console.log(req.body)
            const beer = new Beer({
                name: name,
                 price: price, 
                 quantity: quantity
            })
    
            
            await beer.save()
            res.json(beer)
        } catch(err){
            console.log(err)
        }
    },
    update: async (req, res) => {
        try{
            const id = req.params.id
            console.log(id)
            await Beer.findByIdAndUpdate({_id: id}, {
                $set: {
                    name: req.body.name,
                    price: req.body.price,
                    quantity: req.body.quantity,
                }, 
                
            }, {
                new: true
            })

            
        } catch(err){
            console.log(err)
        }
    },
    delete: async (req, res) => {
        try{
            const id = req.params.id
            await Beer.findByIdAndDelete({_id: id})
        } catch(error){
            console.log(error)
        }
    }
}

module.exports = BeerController