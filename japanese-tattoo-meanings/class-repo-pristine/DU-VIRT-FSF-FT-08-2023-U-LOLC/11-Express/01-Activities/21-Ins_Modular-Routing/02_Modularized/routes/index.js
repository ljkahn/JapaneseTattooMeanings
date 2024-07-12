const express = require('express');

// Import our files containing our routes
const feedbackRouter = require('./feedback');
const tipsRouter = require('./tips');

// Create and instance of express so we can apply the middleware and routing
const app = express();

app.use('/feedback', feedbackRouter);
app.use('/tips', tipsRouter);

module.exports = app;
