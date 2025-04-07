import  express  from "express";

const app = express()
const port =  5000;

app.get('/' , (req, res) => {
    res.send(' World')
})

app.listen(port , () => {
    console.log(`App is running on port ${port}`)
})