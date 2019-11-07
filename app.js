const express = require("express");
const exphbs = require("express-handlebars");
const port = 3000;
const app = express();
const bodyParser = require("body-parser");
const generate = require("./rubbish_generator.js");

app.use(bodyParser.urlencoded((extend = true)));

//template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//index page
app.get("/", (req, res) => {
  res.render("index");
});
//catch  post
app.post("/", (req, res) => {
  const option = req.body;
  const words = generate(option);
  const careerResult = {
    engineer: false,
    designer: false,
    entrepreneur: false
  };
  if (option.target == "engineer") careerResult.engineer = true;
  else if (option.target == "designer") careerResult.designer = true;
  else if (option.target == "entrepreneur") careerResult.entrepreneur = true;
  res.render("index", {
    words: words,
    careerResult: careerResult
  });
});

//listen on port
app.listen(port, () => {
  console.log(`This express is listening on http://localhost:${port}`);
});
