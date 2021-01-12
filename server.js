let express = require('express');
let bodyparser = require('body-parser');
let app = express();
let port = 3000;

app.listen(port, () => {
    console.log('Le serveur est en route');
    console.log(`Server listening at http://localhost:${port}`);
});


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/www'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist/umd'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/views', express.static(__dirname + '/views'));


app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


// Routes
app.get('/', (req, res, next) => {
    res.render('index.ejs');
});
app.post('/', (req, res, next) => {
    res.render('index.ejs');
});

app.get('/jeu', (req, res, next) => {
    res.render('jeu.ejs');
});



// app.use((req, res, next)=>{
//     res.status(404).render('error.ejs');
// });