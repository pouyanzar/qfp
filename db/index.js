const express = require('express'),
    app = express(),
    Sequelize = require('sequelize'),
    cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

const sequelize = new Sequelize('qfp', 'root', 'root', {
    host:"localhost",
    dialect: 'mysql'
},{
    timestamps: false
})

const db = require('./models');

const PORT = process.env.PORT || 8080;

app.get('/:makeId', (req,res)=>{
    const makeId = Number(req.params.makeId);

    db.Model.findAll({
        where:{
            make_id: makeId
        }
    }).then(models =>{ 
        res.json(models.map(model =>model.name))
    })
    .catch(err => res.status(500).json(err))
})

app.get('/makes/:modelId', (req,res)=>{

    const modelId = Number(req.params.modelId);
    // const makeId = Number(req.params.makeId);

    // db.Modelcat.findAll({
    //     where:{
    //         model_id: modelId
    //     }
    // })
    db.Model.findAll({
        where: {
            id: req.params.modelId
        },
        include: [db.Category]
    })
    .then(models =>        
        res.json(models))
    //     .findAll({ 
    //     where: {
    //         cat_id: catId
    //     }
    // }).then(cat=> {console.log(cat)})
    // res.json(models.map(cat=> cat.name))

    .catch(err=> res.status(500).json(err))
})
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})