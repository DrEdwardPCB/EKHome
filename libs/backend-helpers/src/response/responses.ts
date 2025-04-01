import { Response } from "express";
export function success(res: Response, data: any, message: string = "Success") {
	const code = 200;
	return res.status(code).json({
		status: code,
		data,
		message,
		timestamp: new Date().toISOString(),
	});
}
export function created(res: Response, data: any, message: string = "Created") {
	const code = 201;
	return res.status(code).json({
		status: code,
		data,
		message,
		timestamp: new Date().toISOString(),
	});
}

export function accepted(res: Response, data: any, message: string = "Accepted") {
	const code = 202;
	return res.status(code).json({
		status: code,
		data,
		message,
		timestamp: new Date().toISOString(),
	});
}
export function badRequest(res: Response, data: any, message: string = "Bad Request") {
	const code = 400;
	return res.status(code).json({
		status: code,
		data,
		message,
		timestamp: new Date().toISOString(),
	});
}

export function unauthorized(res: Response, data: any, message: string = "unauthorized") {
	const code = 401;
	return res.status(code).json({
		status: code,
		data,
		message,
		timestamp: new Date().toISOString(),
	});
}

export function forbidden(res: Response, data: any, message: string = "Forbidden") {
	const code = 403;
	return res.status(code).json({
		status: code,
		data,
		message,
		timestamp: new Date().toISOString(),
	});
}

export function notFound(res: Response, data: any, message: string = "Not Found") {
	const code = 404;
	return res.status(code).json({
		status: code,
		data,
		message,
		timestamp: new Date().toISOString(),
	});
}

export function internalServerError(res: Response, data: any, message: string = "Internal Server Error") {
	const code = 500;
	return res.status(code).json({
		status: code,
		data,
		message,
		timestamp: new Date().toISOString(),
	});
}
