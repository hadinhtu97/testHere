const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({ optionsSuccessStatus: 200 }));

app.get('/', (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.listen(port, () => {
    console.log('Your app is listening on port ' + port);
})