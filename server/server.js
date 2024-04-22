const express = require("express")
const dotenv = require('dotenv');

const PORT = 5000
const cors = require("cors");


dotenv.config({ path: './config.env' });
const app = express()
app.use(cors());

app.use(express.json())


app.get("/apikey", (req,res) => {
    return res.status(200).json({apikey: process.env.API_KEY})
})



app.use((err, req,res, next) => {
    const defaultErr = {
        log: "Express error handler caught unknown middleware error",
        error: 400,
        message: {err: "An error occured."}
    }
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
})






// errors out when endpoint doesnt exist
app.use("*", (req,res) => {
    res.status(404).send("Uh oh!!! Page not found... unfortunately")
})



app.listen(PORT, () => {
    console.log("Listening on PORT",PORT)
})