const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: ".env.development" });

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false, // Ajout de cette option
        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw new Error("Database connection error");
    }
};

module.exports = connectDB;
