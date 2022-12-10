const express = require('express');
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const app = express();
const cors = require('cors');
const dotenv = require('dotenv'); 
dotenv.config(); 

app.use(cors()); 
app.use(express.json());

const membersRoutes = require("./routes/members");

const myAccount = process.env.account;
const myMdp = process.env.mdp; 
const myDatabase = process.env.database; 

mongoose.connect(
        `mongodb+srv://${myAccount}:${myMdp}@${myDatabase}.mongodb.net/?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !")); 
    
app.use("/api", membersRoutes); 

module.exports = app;
