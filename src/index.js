const express = require('express');
const app     = express();

// middlewares
require('./middlewares/sniffer.middlewares')(app);

app.use(express.json());

// routes and functions
require('./routes/main.routes')(app);
require('./routes/project.routes')(app);

app.listen(3333, () => {
    console.log('Service running in http://localhost:3333');
});