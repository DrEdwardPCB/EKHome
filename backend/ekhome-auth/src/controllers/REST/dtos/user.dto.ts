import z from "zod";
import { paginationDto } from "./pagination.dto";

export const UserId = z.string();
export const CreateUserDto = z.object({
	email: z.string(),
	password: z.string(),
	name: z.string().nullish(),
});

export const CreateUserSchema = z.object({
	body: CreateUserDto,
});

export const ListUserSchema = z.object({
	query: paginationDto,
});
export const UpdateUserDto = z.object({
	email: z.string().nullish(),
	password: z.string(),
	name: z.string().nullish(),
	enabled: z.string().nullish(),
});
export const UpdateUserSchema = z.object({
	params: z.object({
		id: UserId,
	}),
	body: UpdateUserDto,
});
export const ShowUserSchema = z.object({
	params: z.object({
		id: UserId,
	}),
});
export const DeleteUserSchema = ShowUserSchema;

export const assoDissoSchema = z.object({
	id: z.string(),
	id2: z.string(),
});
export const associateUserRole = z.object({
	params: assoDissoSchema,
});
export const dissociateUserRole = associateUserRole;
export const associateUserGroup = associateUserRole;
export const dissociateUserGroup = associateUserRole;
export const associateUserProfile = associateUserRole;
export const dissociateUserProfile = associateUserRole;
