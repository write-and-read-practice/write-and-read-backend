import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandlerMiddleware } from "./middlewares";

dotenv.config();
const app = express();

// eslint-disable-next-line
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(errorHandlerMiddleware);

const start = async () => {
	try {
		app.listen(PORT, () => {
			console.log("Server is running");
		});
	} catch (e) {
		console.log(e);
	}
};

start();
