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

app.get("/", function (req, res) {
    var directoryPath = path.join(__dirname, '/public/imagens');

    var retornoImagens = [];

    fs.readdir(String(directoryPath), (err, files) => {
        if (err) {
            return console.error('err :>> ', err);
        }else{
            var images = files.filter(file => /\.(jpg|jpeg|png|gif|svg)$/.test(file));
            
            retornoImagens = images;
            
            console.log('retornoImagens :>> ', retornoImagens);
            
            res.send(retornoImagens);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
