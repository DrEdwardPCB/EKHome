import z from "zod";
import { paginationDto } from "./pagination.dto";

export const RoleId = z.string();
export const CreateRoleDto = z.object({
	name: z.string(),
	description: z.string().nullish(),
});

export const CreateRoleSchema = z.object({
	body: CreateRoleDto,
});
export const ListRoleSchema = z.object({
	query: paginationDto,
});
export const UpdateRoleDto = z.object({
	name: z.string().nullish(),
	description: z.string().nullish(),
});
export const UpdateRoleSchema = z.object({
	params: z.object({
		id: RoleId,
	}),
	body: UpdateRoleDto,
});
export const ShowRoleSchema = z.object({
	params: z.object({
		id: RoleId,
	}),
});
export const DeleteRoleSchema = ShowRoleSchema;

export const assoDissoSchema = z.object({
	id: z.string(),
	id2: z.string(),
});
export const associateRoleGroup = z.object({
	params: assoDissoSchema,
});
export const dissociateRoleGroup = associateRoleGroup;
export const associateRolePermission = associateRoleGroup;
export const dissociateRolePermission = associateRoleGroup;
export const associateRoleUser = associateRoleGroup;
export const dissociateRoleUser = associateRoleGroup;
