const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect DataBase
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req,res) => res.json({msg: 'Welcome to the Courzelo API'}));

//Define Routes
app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/profile',require('./routes/profile'));

const PORT = process.env.PORT || 6000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));