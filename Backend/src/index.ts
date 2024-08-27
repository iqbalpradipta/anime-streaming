import express from 'express'
import router from './routes/route';
import cors from 'cors'
import dotenv from 'dotenv'

const app = express();

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/api/v1', router)

app.listen(process.env.URL_PORT, () => {
    console.log(`Server is Running at Port ${process.env.URL_PORT}`)
})