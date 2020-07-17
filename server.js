const express = require('express');
const app = express();

app.use(express.static('./dist/get-more-done'));

app.get('/*', ( req, res ) => {
    res.sendFile('index.html', {root: 'dist/get-more-done'})
})

app.listen( process.env.PORT || 8080 )