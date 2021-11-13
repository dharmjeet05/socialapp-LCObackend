const express = require("express");

const app = express();

// swagger docs related
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.get("/", (req, res) => {
    res.send("<h1>Hello my app</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
    const profile = {
        username: "dharmjeet05",
        followers: 200,
        following: 200,
    };

    res.status(200).json(profile);
});

app.get("/api/v1/:token", (req, res) => {
    const token = req.params.token;

    res.status(200).send(`This is ${token}`);
});

// Listening app
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
