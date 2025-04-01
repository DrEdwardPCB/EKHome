import z from "zod";
import { paginationDto } from "./pagination.dto";

export const GroupId = z.string();
export const CreateGroupDto = z.object({
	name: z.string(),
	description: z.string().nullish(),
});

export const CreateGroupSchema = z.object({
	body: CreateGroupDto,
});
export const ListGroupSchema = z.object({
	query: paginationDto,
});
export const UpdateGroupDto = z.object({
	name: z.string().nullish(),
	description: z.string().nullish(),
});
export const UpdateGroupSchema = z.object({
	params: z.object({
		id: GroupId,
	}),
	body: UpdateGroupDto,
});
export const ShowGroupSchema = z.object({
	params: z.object({
		id: GroupId,
	}),
});
export const DeleteGroupSchema = ShowGroupSchema;

export const assoDissoSchema = z.object({
	id: z.string(),
	id2: z.string(),
});
export const associateGroupRole = z.object({
	params: assoDissoSchema,
});
export const dissociateGroupRole = associateGroupRole;
export const associateGroupUser = associateGroupRole;
export const dissociateGroupUser = associateGroupRole;
