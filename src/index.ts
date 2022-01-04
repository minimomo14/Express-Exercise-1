// require the express module
import express from 'express';

//imported routes
import routes from './routes/app-routes';
import languageRoutes from './routes/language-routes';
import userRoutes from './routes/user-routes';
import search from './routes/search-routes'
import shopRoutes from './routes/Shop-routes';
//importing MovieRoutes
import MovieRoutes from './routes/Movie-routes'
//creates an instance of an express server
const app = express();

//define the port number
const port = 3001; //default is 3001

//calling routes set in other files
app.use(express.json());
app.use("/", routes); //localhost:3001
app.use("/languages/", languageRoutes); //localhost:3001/languages
app.use("/users/", userRoutes); //localhost:3001/users
app.use("/", search); //localhost:3001/search
app.use("/api/shops", shopRoutes);
//Calling Movie API
app.use("/api/movies", MovieRoutes);
//Directly set routes

app.get("/students", (req, res) => {
    res.json("getting all students");
});

app.post("/students", (req, res) => {
    res.json("adding students");
})

app.put("/students", (req, res) => {
    res.json("updating students");
})

app.delete("/students", (req, res) => {
    res.json("delete from students");
})



//run the servers
app.listen(port,() => console.log(`Listening on ${port}`));