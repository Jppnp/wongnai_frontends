const express = require('express');
const app = express();
const routes = require('./routes')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/', routes)
app.use('/trips', routes)

app.listen(8080, () => {
    console.log('Gateway hs started on port 8080')
})