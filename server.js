const path = require("path");
require("dotenv").config({ silent: process.env.NODE_ENV === "production" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpoad = require("express-fileupload");
const indexRoutes = require("./controller/index.routes");
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpoad({ useTempFiles: true }));

//Load all routes
console.log("Hii");
app.use("/", indexRoutes);
console.log("Hii");
app.use((err, req, res, next) => {
	// because err.status is undefined
	res.status(404).json({
		error: {
			message: err.message,
		},
	});
});
__dirname = path.resolve();
console.log(__dirname);
app.get("/", (req, res) => {
	res.send("API is Runn....");
});

const PORT = process.env.PORT || 3001;

const CONNECTION_URL = "mongodb+srv://souhail:souhail2001@cluster0.bnzut.mongodb.net/myDataBase?retryWrites=true&w=majority";

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => app.listen(PORT, () => console.log(`Server MongoDb Connected Running on Port: http://localhost:${PORT}`)))
	.catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
