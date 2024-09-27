var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.static('public'));

const cors = require('cors');
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.get('./images', (req, res) => {
    console.log('...')
    var directoryPath = path.join(__dirname, './public/images');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }
        var images = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
        res.json(images);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});