const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Date = require(__dirname + "/date.js"); //Addition Module to use 

// console.log(Date.getDay());
// console.log(Date.getDate());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
const items = ["Samosa", "Bread Pakoda", "Jalebi"];
const workLists = [];
const dietList = [];

app.get('/', (req, res) => {
    const day = Date.getDate();
    res.render('list', { listTitle: day, newListItem: items });
});
app.post('/', function(req, res) {
    console.log(req.body);
    const item = req.body.lunch;
    if (req.body.button === "Work") {
        workLists.push(item);
        res.redirect('/work');
    } else if (req.body.button === "Diet") {
        dietList.push(item);
        res.redirect('/diet');
    } else {
        items.push(item);
        res.redirect('/');
    }
});
app.get('/work', function(req, res) {
    res.render('list', { listTitle: "Work List", newListItem: workLists });

});
app.get('/diet', function(req, res) {
    res.render('list', { listTitle: "Diet List", newListItem: dietList });
})
app.listen(3000, function(req, res) {
    console.log("Server is running at port 3000");
});