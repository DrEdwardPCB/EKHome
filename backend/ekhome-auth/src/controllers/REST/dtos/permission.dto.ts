import z from "zod";
import { paginationDto } from "./pagination.dto";

export const PermissionId = z.string();
export const CreatePermissionDto = z.object({
	name: z.string(),
	description: z.string().nullish(),
});

export const CreatePermissionSchema = z.object({
	body: CreatePermissionDto,
});
export const ListPermissionSchema = z.object({
	query: paginationDto,
});
export const UpdatePermissionDto = z.object({
	name: z.string().nullish(),
	description: z.string().nullish(),
});
export const UpdatePermissionSchema = z.object({
	params: z.object({
		id: PermissionId,
	}),
	body: UpdatePermissionDto,
});
export const ShowPermissionSchema = z.object({
	params: z.object({
		id: PermissionId,
	}),
});
export const DeletePermissionSchema = ShowPermissionSchema;

export const assoDissoSchema = z.object({
	id: z.string(),
	id2: z.string(),
});
export const associatePermissionRole = z.object({
	params: assoDissoSchema,
});
export const dissociatePermissionRole = associatePermissionRole;
