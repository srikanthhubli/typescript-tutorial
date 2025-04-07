import  express  from "express";
import productsRoutes from './routes/products'

const app = express()
const port =  5000;

app.get('/' , (req, res) => {
    res.send('Hello World')
})


app.use('/products', productsRoutes)
app.listen(port , () => {
    console.log(`App is running on port ${port}`)
})