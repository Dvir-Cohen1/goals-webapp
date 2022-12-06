import express from 'express';
import goalsRoute from "./src/routes/goals.js";
import methodOverride from 'method-override';

const app = express();
const PORT = 4040;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
     res.render('pages/index');
});

app.get("/about", (req, res) => {
     res.render('pages/about');
});

app.use("/goals", goalsRoute);

// 404 Page Not Found!
app.get('*', function (req, res) {
     res.status(404).render('pages/404');
     res.end();
});

app.listen(PORT, () => {
     console.log(`Running on port ${PORT}`);
});

