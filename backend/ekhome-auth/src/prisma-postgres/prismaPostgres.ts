import { PrismaClient } from "@prisma/prisma-postgres/client";
import { Singleton } from "@ekhome/backend-helpers/bin/singleton";
import { Prisma } from "../obj/prisma";

@Singleton
export class PrismaPostgres extends Prisma<PrismaClient> {
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
