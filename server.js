require('dotenv').config();
const app = require('./src/app');
const connectDb = require("./src/database/db");

const PORT = process.env.PORT || 3001;

connectDb();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});