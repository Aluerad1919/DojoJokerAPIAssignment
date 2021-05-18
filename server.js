const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());

app.use(express.json(), express.urlencoded({extended: true}));

require("./server/config/moongoose.config")

require("./server/routes/joke.route")(app);

app.listen(port, () => console.log(`merning time!!! port... ${port}`));