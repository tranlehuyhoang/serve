import express, { query } from 'express';
import cors from 'cors';
import router from './router/router.js';
const app = express();
app.use(cors());

app.get("/", (req, res) => res.send("hello"));
app.use(express.json())
app.use(router)
app.listen(5000, () => {
    console.log(`Running on PORT 5000`);
})