import z from "zod";

export const paginationDto = z
	.object({
		pageSize: z.number().min(1).default(100), // 1-infinity,
		page: z.number().min(1).default(1), //1-infinity
	})
	.transform((value) => ({
		skip: value.pageSize * (value.page - 1),
		take: value.pageSize,
	}));
