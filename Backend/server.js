const express = require('express');
const cors = require('cors');
const commentRoute = require('./routes/comment');
const userRoute =  require('./routes/user')
const watchlistRoute = require('./routes/watchlist')
const authRoute = require('./routes/auth')
const app = express();

const corsOptions = {origin: 'http://localhost:4200'}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/comment', commentRoute);
app.use('/api/user', userRoute);
app.use('/api/watchlist', watchlistRoute);
app.use('/api/auth', authRoute);


app.listen(3000, ()=>{
    console.log('server is listening to port 3000');
})

