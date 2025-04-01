import express from "express";
import { ExpressGet, UseController, AutoBind, SetLogger, routeLog, routeErrorHandlerFactory, success } from "@ekhome/backend-helpers";
import { logger } from "../../logger";
export const HealthCheckRouter = express.Router();

@AutoBind()
@SetLogger(logger, { level: "info", errorHandlerFactory: routeErrorHandlerFactory, metadata: { class: "HealthCheckController" } })
export class HealthCheckController {
	@UseController(HealthCheckRouter)
	public router;

	@ExpressGet("/helloWorld")
	@routeLog("helloworld")
	helloWorld(req: express.Request, res: express.Response) {
		return success(res, "helloworld");
	}
}
