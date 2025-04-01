import type { Request } from "express";
import { AnyZodObject, ZodError, z } from "zod";
import { BadRequestError } from "../response/error";

export async function zParse<T extends AnyZodObject>(schema: T, req: Request): Promise<z.infer<T>> {
	try {
		return schema.parseAsync(req);
	} catch (error) {
		if (error instanceof ZodError) {
			throw new BadRequestError(error.message);
		}
		throw new Error(JSON.stringify(error));
	}
}
