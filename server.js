const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: `${__dirname}/.env` });

const port = process.env.PORT || 5000;

// Database connection
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected successfully!!'))
  .catch((error) => console.log(error.message));

// Listening server on port 5000
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
