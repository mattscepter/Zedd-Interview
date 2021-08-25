const express = require("express");
const Testimonial=require("./testimonial");

const testimonialRouter = express.Router();

testimonialRouter.post("/testimonial",async(req,res)=>{
    try {
        const{name,review}=req.body;
        const testimonial=new Testimonial({name,review});
        await testimonial.save().then().catch(err=>{return res.status(401).json(err);})
    
    } catch (err) {
        console.log(err)
    }
})

testimonialRouter.get("/testimonial",async(req,res)=>{
    await Testimonial.find().then(response=>{return res.status(201).json(response)}).catch(err=>{return res.status(401).json(err);})
})

module.exports = testimonialRouter;
