const mongoose = require("mongoose");

const employSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Add validation if needed
    email: { type: String, required: true, unique: true }, // Unique email
    password: { type: String, required: true } // Add validation if needed
});

// Export the model, not the schema
const EmployModel = mongoose.model("employees", employSchema);
module.exports = EmployModel; // Correct export
