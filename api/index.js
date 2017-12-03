const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const headersMiddleware = require("./middleware/headers");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.disable("x-powered-by");
app.use(headersMiddleware);

app.use("/v1", require("./routes"));

app.use(require("./middleware/validationError"));
require("./mongoose/setup")();

app.listen(8000, () => console.log("Listening on port 8000"));
