const express = require('express');
// const userRoute = require('./routes/userRoute');
const destinationRoute = require('./routes/destinationRoute');
const packageRoute = require('./routes/packageRoute');
const emailRoute = require('./routes/emailRoute');
const hotelRoute = require('./routes/hotelRoute');
const vehicleRoute = require('./routes/vehicleRoute');
const contactRoute = require('./routes/contactRoute');
const fixedDepartureRoute = require('./routes/fixedDepartureRoute');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
//Body Parser, Reading Data From body into req.body
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ limit: '5mb' }));
// app.use(express.json());

app.use('/api/v1/email', emailRoute);
app.use('/api/v1/destination', destinationRoute);
app.use('/api/v1/package', packageRoute);
app.use('/api/v1/hotel', hotelRoute);
app.use('/api/v1/vehicle', vehicleRoute);
app.use('/api/v1/contact', contactRoute);
app.use('/api/v1/fixed-departure', fixedDepartureRoute);

module.exports = app;
