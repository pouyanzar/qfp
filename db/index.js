const express = require('express'),
    app = express(),
    Sequelize = require('sequelize'),
    cors = require('cors'),
    Op = Sequelize.Op;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

const sequelize = new Sequelize('bng3ula9hx5zcetcsi4d',
                                 'uefs9lkbgfgemj0f', 
                                 'toIlg4BHZEg1ntEqvro7', {
    host:"bng3ula9hx5zcetcsi4d-mysql.services.clever-cloud.com",
    dialect: 'mysql'
},{
    timestamps: false
})

const db = require('./models');
// const { GoogleSpreadsheet } = require('google-spreadsheet');

const PORT = process.env.PORT || 8080;



app.get('/', (req,res)=>{
    db.Make.findAll()
    .then(makes => res.json(makes))
    .catch(err=>res.status(500).json(err));
})


app.get('/products/:qfpp',(req, res)=>{
    const qfpp = req.params.qfpp;

    db.parts.find({
        where:{
            qfpp: qfpp
        }
    })

    .then(parts=>res.json(parts))
    .catch(err=>res.status(500).json(err));
})
app.get('/:makeName', (req,res)=>{
    const makeName = req.params.makeName;

    db.Make.find({
        where:{
            name: makeName
        }
    })
    .then(makes=>
        
        db.Model.findAll({
        where:{
            make_id: makes.id
        }
    }))
    .then(models =>{ 
        res.json(models.map(model =>model.name))
    })
    .catch(err => res.status(500).json(err))
})
app.get('/:makeName/:modelName', (req,res)=>{

    const modelName = req.params.modelName;
    db.Model.findAll({
        where: {
            name: modelName
        },
        include: [db.Category]
    })
    .then(models =>        
        res.json(models[0].Categories.map(cat => cat.name)))
    .catch(err=> res.status(500).json(err))
})



app.get('/:makeName/:modelName/:catName',(res,req)=>{

    const catName = req.req.params.catName;
    const modelName = req.req.params.modelName;

    db.Model.find({
        where: {
            name: modelName,
        },
        include:[
            {
                model:db.Cateogry,
                where: {
                    name: catName
                }
            }
        ]
        
    })
    .then(parts => db.modelcat.findAll({
        where:{
            cat_id: category.id,
        }
    }))
    .then(categories => res.res.json(categories))
    .catch(err=> res.res.status(500).json(err))
})


app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})

