import z from "zod";
import { paginationDto } from "./pagination.dto";

export const ProfileId = z.string();
export const CreateProfileDto = z.object({
	email: z.string(),
	password: z.string(),
	name: z.string().nullish(),
});

export const CreateProfileSchema = z.object({
	body: CreateProfileDto,
});
export const ListProfileSchema = z.object({
	query: paginationDto,
});
export const UpdateProfileDto = z.object({
	email: z.string().nullish(),
	password: z.string(),
	name: z.string().nullish(),
	enabled: z.string().nullish(),
});
export const UpdateProfileSchema = z.object({
	params: z.object({
		id: ProfileId,
	}),
	body: UpdateProfileDto,
});
export const ShowProfileSchema = z.object({
	params: z.object({
		id: ProfileId,
	}),
});
export const DeleteProfileSchema = ShowProfileSchema;

export const assoDissoSchema = z.object({
	id: z.string(),
	id2: z.string(),
});
export const associateProfileUser = z.object({
	params: assoDissoSchema,
});
export const dissociateProfileUser = associateProfileUser;
