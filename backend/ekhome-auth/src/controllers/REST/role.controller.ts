import {
	ExpressPost,
	ExpressGet,
	ExpressPut,
	ExpressDelete,
	ExpressPatch,
	SetLogger,
	UseController,
	defaultErrorHandlerFactory,
	normalLog,
	routeErrorHandlerFactory,
	routeLog,
	zParse,
	success,
} from "@ekhome/backend-helpers";
import express from "express";
import { logger } from "../../logger";
import { PrismaPostgres } from "../../prisma-postgres/prismaPostgres";
import { CreateRoleSchema, ListRoleSchema } from "./dtos/role.dto";

const RoleRouter = express.Router();

@SetLogger(logger, { level: "info", metadata: { class: "RoleController" }, errorHandlerFactory: routeErrorHandlerFactory })
export class RoleController {
	@UseController(RoleRouter)
	public router;
	private client = new PrismaPostgres().client;
	private roleRepo = this.client.role;

	@ExpressPost("/")
	@routeLog("createRole")
	public async createRole(req: express.Request, res: express.Response) {
		const {
			body: { name, description },
		} = await zParse(CreateRoleSchema, req);
		const result = await this.roleRepo.create({
			data: {
				name,
				description,
				createdBy: req?.user?.email ?? "",
			},
		});
		return success(res, result);
	}

	@ExpressGet("/")
	@routeLog("listRole")
	public async listRole(req: express.Request, res: express.Response) {
		const {
			query: { skip, take },
		} = await zParse(ListRoleSchema, req);
		const result = await this.client.$transaction([
			this.roleRepo.count(),
			this.roleRepo.findMany({
				skip,
				take,
			}),
		]);
		return success(res, result);
	}

	@ExpressGet("/:id")
	@routeLog("showRole")
	public async showRole(req: express.Request, res: express.Response) {
		this.roleRepo.findFirst();
	}

	@ExpressPut("/:id")
	@routeLog("updateRole")
	public async updateRole(req: express.Request, res: express.Response) {
		// this.roleRepo.update();
	}

	@ExpressDelete("/:id")
	@routeLog("deleteRole")
	public async deleteRole(req: express.Request, res: express.Response) {
		this.roleRepo.delete;
	}

	@ExpressPut("/:id/permission/:id2")
	@routeLog("associateRolePermission")
	public associateRolePermission(req: express.Request, res: express.Response) {}

	@ExpressPatch("/:id/permission/:id2")
	@routeLog("dissociateRolePermission")
	public dissociateRolePermission(req: express.Request, res: express.Response) {}

	@ExpressPut("/:id/group/:id2")
	@routeLog("associateRoleGroup")
	public associateRoleGroup(req: express.Request, res: express.Response) {}

	@ExpressPatch("/:id/group/:id2")
	@routeLog("dissociateRoleGroup")
	public dissociateRoleGroup(req: express.Request, res: express.Response) {}

	@normalLog("_dissociateRolePermission", { errorHandlerFactory: defaultErrorHandlerFactory })
	protected _dissociateRolePermission(roleId: string, permissionId: string) {}
	@normalLog("_dissociateRoleGroup", { errorHandlerFactory: defaultErrorHandlerFactory })
	protected _dissociateRoleGroup(roleId: string, permissionId: string) {}
}
