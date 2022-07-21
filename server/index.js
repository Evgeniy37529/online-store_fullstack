require('dotenv').config();
const sequelize = require('./bd');
const express = require('express');
const models = require('./models/models')
const PORT = process.env.PORT || 5000;

const app = express();


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}`)
        })

    } catch(e) {
        console.error(e)
    }
};

start();
