const express=require('express');
const connectDB=require('./config/db');

const app=express();
//connect database
connectDB();


app.use('/api/users',require('./routes/users'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/auth',require('./routes/auth'));

const PORT=process.env.port || 5000;
app.listen(PORT,()=>console.log(`server started on port ${PORT}`));