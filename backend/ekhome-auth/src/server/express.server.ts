import express from "express";
import { MongoEnv } from "../config/mongoEnv";
import http from "http";
import cors from "cors";
export const appConfig = async () => {
	await new MongoEnv().ready;
	const env = new MongoEnv().env;
	const { HealthCheckController } = await import("../controllers/REST/healthcheck.controller.js");
	const app = express();
	app.use(cors());
	app.use("/healthcheck", new HealthCheckController().router);

	const server = http.createServer(app).listen(env.rest_port, () => {
		console.log(`REST server started on port ${env.rest_port}`);
	});
	server.on("close", () => {
		console.log("REST server shutdown gracefully");
	});
};
appConfig().catch((err) => console.error("an error has occured", err));
