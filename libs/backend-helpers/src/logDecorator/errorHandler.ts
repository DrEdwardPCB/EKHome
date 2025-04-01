import { Logger } from "winston";
import { BadRequestError, ForbiddenError, NotFoundError, UnauthorizedError } from "../response/error";
import { Response } from "express";
import { badRequest, internalServerError, notFound, unauthorized } from "../response/responses";
import { TMetadata } from "./SetLogger";
import cluster from "cluster";

export type TErrorHandlerFactory = (logger: Console | Logger) => (err: unknown, functionName: string, metadata?: TMetadata, res?: Response) => any;
export const defaultErrorHandlerFactory: TErrorHandlerFactory = (logger) => (err, functionName, metadata, res) => {
	logger.error(`${cluster?.isWorker ? `worker @${cluster.worker?.id}` : ""}error while running ${functionName}`, {
		...metadata,
		err,
	});
	throw err;
};
export const routeErrorHandlerFactory: TErrorHandlerFactory = (logger) => (err, functionName, metadata, res) => {
	logger.error(err);
	if (err instanceof UnauthorizedError) {
		return unauthorized(res, err.stack, err.message);
	} else if (err instanceof ForbiddenError) {
		return unauthorized(res, err.stack, err.message);
	} else if (err instanceof BadRequestError) {
		return badRequest(res, err.stack, err.message);
	} else if (err instanceof NotFoundError) {
		return notFound(res, err.stack, err.message);
	} else {
		return internalServerError(res, (err as Error)?.stack, (err as Error)?.message);
	}
};
