const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const app = express();
const imageRoute = require('./routes/imageRoute');
const cors = require('cors');
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`listing at the port ${process.env.PORT}`))
}).catch((e) => console.log(e))

app.use('/api/images', imageRoute);
