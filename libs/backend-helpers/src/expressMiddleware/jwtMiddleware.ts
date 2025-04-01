//@ts-nocheck
import { Request, RequestHandler } from "express";
import { unauthorized } from "../response/responses";
// import { getUser } from "";

export default function jwtMiddleware(authurl: string): RequestHandler {
	return async function (req: Request, res, next) {
		let token = req.headers.authorization?.replace("Bearer ", "");
		let pass = false;
		let reason = "jwt token not found";
		if (token) {
			req.jwt = token;
			//req.user = (await getUser(req.jwt, ["id", "name", "email", "repCode"], authurl)) as { id: string; name: string; email: string };
			pass = true;
		}
		if (pass) {
			next();
		} else {
			unauthorized(res, reason);
		}
	};
}
