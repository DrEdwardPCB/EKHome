import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
const PROTOPATH = path.resolve("src/proto/AuthMSService.proto");
console.log(PROTOPATH);
const serviceDefinition = protoLoader.loadSync(PROTOPATH, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});
