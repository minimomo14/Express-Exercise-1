import express, { Express } from "express";
import Shop from "../models/Shop";

const shopRoutes = express.Router();

const shops: Shop[] = [
    { id: 111, name: "Pepper's Pizza", rating: 4.5 },
    { id: 222, name: "Clive's Chives", rating: 3.4 },
    { id: 333, name: "Bretty's Brews", rating: 4.3 },
    { id: 444, name: "Sylvester's Shoes", rating: 3.8 },
    { id: 555, name: "Teddy's Tunes", rating: 4.7 }

];

shopRoutes.get("/:id", function(req, res){
    // req.params.id shops[i].id
    //search shop array
    for(let i=0; i<shops.length; i++){
        let inputId: number = Number.parseInt(req.params.id);
        //find shop by id property
        if(shops[i].id === inputId) {
            //return the json response with the shop object
            res.json(shops[i]);
            break;
        }
    }
    res.status(404);
    res.send({"error": "Shop not found"});
    
});

export default shopRoutes;