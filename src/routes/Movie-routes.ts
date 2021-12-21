import express from 'express';
import Movie from '../models/Movie'
const MovieRoutes = express.Router();

let movieArray:Movie[] = [
    {id: 1, title: 'Kido', year: 2022, animated: true},
    {id: 2, title: 'Big Mom', year: 2021, animated: true},
    {id: 3, title: 'Shanks', year: 2008, animated: true},
    {id: 4, title: 'Jimbi', year: 2012, animated: true},
    {id: 5, title: 'Luffy', year: 2006, animated: true},
];  

MovieRoutes.get("/", (req, res) => {
    let movieMax = Number.parseInt(req.query.maxYear as string);
    let movieMin = Number.parseInt(req.query.minYear as string);
    if (movieMax && movieMin) {
        let found:Movie[] = [];
        for (let i = 0; i > movieArray.length; i++) {
            if(movieArray[i].year > movieMin && movieArray[i].year < movieMax){
                found.push(movieArray[i]);
            }
        }
        res.json(found);
    } else {
        res.json(movieArray);
    }
})

MovieRoutes.get("/:id", (req, res) => {
    let movieId = Number.parseInt(req.params.id);
    for (let i = 0; i < movieArray.length; i++) {
        if (movieArray[i].id === movieId){
            res.json(movieArray[i]);
            break;
        }
    }
    res.status(404)
    res.send({ "error": "Move with id 1 does not exist"})
})

export default MovieRoutes;