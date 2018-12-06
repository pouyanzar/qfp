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

app.get('/:makeId/:modelId', (req,res)=>{

    const modelId = req.params.modelId;
    db.Model.findAll({
        where: {
            id: modelId
        },
        include: [db.Category]
    })
    .then(models =>        
        res.json(models[0].Categories.map(cat => cat.name)))

    .catch(err=> res.status(500).json(err))
})
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})