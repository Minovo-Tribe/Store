const express = require('express');
const path = require('path');
const bodyParser = require('./middlewares/body-parser');
const mongoose = require('./middlewares/mongoose');
const auth = require('./controller/auth.controller');
const csrfProtection = require('./middlewares/csrf');

//Routes..................
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const storeRoute = require('./routes/store.route');
const shopRoute = require('./routes/shop.route');

const PORT = process.env.PORT || 2000;

const app = express();
const storeRoot = path.join(
  __dirname,
  '..',
  'minovo-store-client',
  'dist',
  'minovo-store'
);
const publicRoot = path.join(__dirname, 'public');
const viewsRoot = path.join(__dirname, 'views');

// app.use(Cors.activate);
app.use(bodyParser);
app.use(csrfProtection);
app.use(express.static(publicRoot));
app.use(express.static(storeRoot));

app.use('/api', (req, res, next) => {
  res.type('application/json');
  next();
});
app.use('/api/auth', authRoute);
app.use('/api/user', auth.validator, userRoute);
app.use('/api/store', storeRoute);
app.use('/api/shop', shopRoute);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(storeRoot, 'index.htm'));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(viewsRoot, '404.html'));
});

mongoose.connect(() => {
  app.listen(PORT);
});
