const  express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;


app.use(express.json());

/*---------------------------- Admin Route --------------------------------------*/
const adminsRoutes = require('./src/routes/admin/index.routes');
app.use('/api/admin', adminsRoutes);

/*---------------------------- Users Route --------------------------------------*/
const usersRoutes = require('./src/routes/user/index.routes');
app.use('/api/user', usersRoutes);


app.listen(port, async () => {
    mongoose.connect(process.env.MONGO_DB_URL)
    .then(()=>console.log('DB Is Connected'))
    .catch(err => console.log(err.message));
    console.log(`server start at http://localhost:${port}`);
});











