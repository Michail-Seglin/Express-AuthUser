const express = require('express');
const { createUser, authUserEmail } = require('../service/user.service');

const route = express.Router();

route.get('/', (req, res) => {
    res.send('hello')
});

route.post('/reg', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        res.status(200).send(data)
    } catch (er) {
        res.status(400).send(er.message);
    }
})

route.post('/auth', async (req, res) => {
    try {
        const { email, pwd } = req.body;
        const data = await authUserEmail(email, pwd);
        res.status(200).send(data);
    } catch (er) {
        res.status(400).send(er.message);
    }
})


module.exports = route;