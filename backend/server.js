require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/user');
const quizRoutes = require('./routes/quizRoutes');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Route registry
app.use('/api/user', user);
app.use('/api/quiz', quizRoutes);

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected and listening to port', process.env.PORT);
        });
    })
    .catch(error => {
        console.log(error);
    });

