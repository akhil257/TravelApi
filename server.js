const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
  console.log('DB connection Successful');
});

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
