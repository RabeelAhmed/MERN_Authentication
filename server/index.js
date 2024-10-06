const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employemodel = require("./models/employemodel");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employe");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    employemodel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    // Return user details along with success message
                    res.json({
                        status: "Success",
                        username: user.name, // Assuming `name` is a field in your employee model
                    });
                } else {
                    res.json({ status: "Error", message: "The password is incorrect" });
                }
            } else {
                res.json({ status: "Error", message: "The email is not registered" });
            }
        })
        .catch(err => res.status(500).json({ status: "Error", message: "Server error" }));
});

app.post('/', (req, res) => {
    employemodel.create(req.body)
        .then(employes => res.json(employes))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("server is running on port 3001");
});
