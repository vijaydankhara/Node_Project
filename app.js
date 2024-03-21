const  express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;


app.use(express.json());

const adminsRoutes = require('./src/routes/admin/index.routes');
app.use('/api/admin', adminsRoutes);

app.listen(port, async () => {
    mongoose.connect(process.env.MONGO_DB_URL)
    .then(()=>console.log('DB Is Connected'))
    .cathc(err => console.log(err.message));
    console.log(`server start at http://localhost:${port}`);
});











