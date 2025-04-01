// this server is used for authentication
// it uses RESTful API or GraphQL API for management
// in the same time it uses grpc to serve microservice method to other backend services
import cluster from "cluster";
import { env } from "./config/env";
import _ from "lodash";
if (cluster.isPrimary) {
	masterProcess();
} else {
	slaveProcess();
}
function masterProcess() {
	for (let i = 0; i < env.NUM_CLUSTER; i++) {
		cluster.fork();
	}
}
function slaveProcess() {
	const expressScript = require("./server/express.server");
	// const grpcScript = require("./server/grpc.server");
}
