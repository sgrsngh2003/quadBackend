const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const ticketRouter = express.Router();
const { z} =  require('zod')

const addSchema = z.object({
    name: z.string(),
    base_unit: z.string(),
    last: z.number(),
    buy: z.number(),
    sell: z.number(),
    volume: z.number()
})

ticketRouter.post('/create', async(req, res) => {
    
    const body = req.body;
    const { success } = addSchema.safeParse(body);
    
    if(!success){    
        return res.json({
            message: "invalid input"          
        })
    }
    const ticket = await prisma.coins.create({
        data: {
            name: body.name,
            base_unit: body.base_unit,
            last: body.last,
            buy: body.buy,
            sell: body.sell,
            volume: body.volume
        },
        select:{
            id: true
        }
    })
    if(!ticket){
        return res.json({
            message: "error"
        })
    }
    res.json({
        message: ticket
    })
})

ticketRouter.get('/all', async(req,res) => {
    const all = await prisma.coins.findMany()
    res.json(all)
})


module.exports = ticketRouter;