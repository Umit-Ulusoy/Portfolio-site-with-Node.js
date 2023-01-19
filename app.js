const express = require('express'); 
const app = express();
const pageRoute = require('./routes/pageRoute');

app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', pageRoute);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));