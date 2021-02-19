const express = require('express');

const app = express();

app.use('/e', (_, res) => res.end('express'));

export default app;
