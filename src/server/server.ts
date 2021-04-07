import express = require("express");
import MakePayment, { MakeBadPayment } from "../Strategy/Client";
// Create a new express app instance
const app: express.Application = express();
const teste = () => {
   return console.log("TO NA FUNCAO")
}
app.get("/", function (req, res) {
res.send("Hello World!");
});
app.listen(3000, () => MakePayment());

