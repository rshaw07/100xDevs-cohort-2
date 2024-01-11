const express = require('express');
const { createCard, modifyCard, deleteCard } = require('./type');
const { card } = require('./db');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post("/create", async function(req,res){
    const createdPayLoad = req.body;
    const parsedPayLoad = createCard.safeParse(createdPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "Your inputs are not valid"
        })
        return;
    }
    await card.create({
        name: createdPayLoad.name,
        description: createdPayLoad.description,
        interests: createdPayLoad.interests,
        linkedin: createdPayLoad.linkedin,
        twitter: createdPayLoad.twitter
    });

    res.json({
        msg: "Card created"
    });
})
app.get("/cards", async function(req,res){
    const cards = await card.find({});
    res.json({
        cards
    })
})

app.put("/update", async function(req,res){
    const updatedPayLoad = req.body;
    const parsedPayLoad = modifyCard.safeParse(updatedPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "Your inputs are not valid"
        })
        return;
    }
    await card.updateOne({
        _id: updatedPayLoad.id
    },{
        name: updatedPayLoad.name,
        description: updatedPayLoad.description,
        interests: updatedPayLoad.interests,
        linkedin: updatedPayLoad.linkedin,
        twitter: updatedPayLoad.twitter
    })

    res.json({
        msg: "Card updated"
    })
})

app.delete("/remove", async function(req,res){
    const deletedPayLoad = req.body;
    const parsedPayLoad = deleteCard.safeParse(deletedPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "Your inputs are not valid"
        })
        return;
    }
    await card.deleteOne({
        _id: deletedPayLoad.id
    })

    res.json({
        msg: "Card deleted"
    })
})

app.listen(3000)