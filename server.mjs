import express from "express";

const app = express();

app.use(express.static('dist'));

app.listen(3000, () => {
    console.log('Counter app running at http://localhost:3000');
})

