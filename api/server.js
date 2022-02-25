const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./auth/auth-router.js');
const jokesRouter = require('./jokes/jokes-router.js');

const jsonErrorHandler = async (err, req, res, next) =>
{
    res.header("Content-Type", 'application/json');

    res.status(err.status).send(JSON.stringify(err));
};

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', jokesRouter); // only logged-in users should have access!
server.use(jsonErrorHandler);

module.exports = server;
