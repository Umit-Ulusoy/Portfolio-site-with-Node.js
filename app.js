const express = require('express');
const mongoose = require('mongoose');
const { DATABASE_URL } = require('./config');
const app = express();
const adminRoute = require('./routes/adminRoute');
const pageRoute = require('./routes/pageRoute');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Connect to database
mongoose.set('strictQuery', true);
mongoose
.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('Connected to database successfully'))
  .catch(console.error);

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

global.adminIn = null;

// Routes
app.use('/admin', adminRoute);
app.use('/', pageRoute);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));