

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PORT = 3001;

app.use(cookieParser());
app.use(session({ secret: 'Truly a secret'}));
app.use(express.urlencoded({extended: true}));

app.post('/', (req, res) => {   
console.log("recieving")
    res.end();

});

app.get('/', (req, res) => {
    res.send("hi");

});

app.get('/expresstest', (req,res) => {
    var message = "express and react are talking to each other";
    res.json(message);
    console.log('Sent message');
});
app.listen(PORT, () => {
    console.log(`Server is listening... ${PORT}`);
});