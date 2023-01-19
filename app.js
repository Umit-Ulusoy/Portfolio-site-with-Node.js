const express = require('express'); 
const app = express();

app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('HELLOOO');
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));