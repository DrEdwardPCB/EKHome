import { z } from "zod";
export const loginDto = z
	.object({
		basic: z.string(),
	})
	.transform((value) => {
		const [login, password] = Buffer.from(value.basic).toString("utf-8").split(":");
		return { login, password };
	});
export const forgotPasswordDto = z.object({
	email: z.string().email(),
});

export const loginSchema = z.object({
	body: loginDto,
});
export const forgotPasswordSchema = z.object({
	body: forgotPasswordDto,
});
