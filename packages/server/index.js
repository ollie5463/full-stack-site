const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 8080;

app.get('/api/image/:name', (req, res) => {
    console.log(req.params.name);
    const imagePath = path.resolve(__dirname, `./images/${req.params.name}.png`);
    const gifPath = path.resolve(__dirname, `./images/${req.params.name}.gif`);
    const jpegPath = path.resolve(__dirname, `./images/${req.params.name}.jpg`);

    if(fs.existsSync(imagePath)){
        res.sendFile(imagePath)
    } else if(fs.existsSync(gifPath)){
        res.sendFile(gifPath)
    } else if(fs.existsSync(jpegPath)){
        res.sendFile(jpegPath)
    } else {
        res.sendStatus(404);
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.get('/api/:path', (req, res) => {
    const pathToResource = path.resolve(__dirname, `./data/${req.params.path}.json`);

    if(fs.existsSync(pathToResource)){
        res.sendFile(pathToResource);
    } else {
        res.sendStatus(404);
    }
});

app.listen(port, () => {
    console.log('App running on port 8080');
});