import { Singleton } from "@ekhome/backend-helpers/bin/singleton";
import { PrismaClient } from "@prisma/prisma-mongo/client";
import { Prisma } from "../obj/prisma";

@Singleton
export class PrismaMongo extends Prisma<PrismaClient> {
	constructor() {
		super(new PrismaClient());
	}
	public async connect() {
		await this.client.$connect();
	}
	public async disconnect() {
		await this.client.$disconnect();
	}
}
