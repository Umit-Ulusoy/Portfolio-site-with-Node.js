const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
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
app.use(session({
  secret: 'my_keyboard_cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: DATABASE_URL })
}));
app.use(
  methodOverride('_method', {
    methods: ['GET', 'POST']
  })
);

global.isAdmin = null;

// Routes
app.use('*', (req, res, next) => {
  isAdmin = req.session.userID;
  next()
});
app.use('/admin', adminRoute);
app.use('/', pageRoute);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));