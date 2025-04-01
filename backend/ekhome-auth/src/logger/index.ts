import winston from "winston";
import "winston-daily-rotate-file";
import { env } from "../config/env";
import { MongoEnv } from "../config/mongoEnv";
import { SeqTransport } from "@datalust/winston-seq";

const transports = [];
const rotateError = new winston.transports.DailyRotateFile({
	level: "error",
	filename: "./logs/ekhome-auth-error-%DATE%.log",
	format: winston.format.simple(),
	datePattern: "YYYY-MM-DD-HH",
	zippedArchive: true,
	maxSize: "20m",
	maxFiles: "14d",
});
const rotateStd = new winston.transports.DailyRotateFile({
	filename: "./logs/ekhome-auth-app-%DATE%.log",
	format: winston.format.simple(),
	datePattern: "YYYY-MM-DD-HH",
	zippedArchive: true,
	maxSize: "20m",
	maxFiles: "14d",
});
const seq = new SeqTransport({
	serverUrl: new MongoEnv().env.seq_url,
	apiKey: new MongoEnv().env.seq_key,
	onError: (e) => {
		console.error(e);
	},
	handleExceptions: true,
	handleRejections: true,
});
transports.push(rotateError, rotateStd, seq);

if (!env.isProd) {
	transports.push(
		new winston.transports.Console({
			level: "debug",
		})
	);
}
export const logger = winston.createLogger({
	level: "info",
	transports: transports,
	format: winston.format.combine(
		/* This is required to get errors to log with stack traces. See https://github.com/winstonjs/winston/issues/1498 */
		winston.format.errors({ stack: true }),
		winston.format.json()
	),
});
