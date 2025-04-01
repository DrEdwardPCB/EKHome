import { cleanEnv, port, str } from "envalid";
import { Prisma, PrismaClient } from "@prisma/prisma-mongo/client";
import { Singleton } from "@ekhome/backend-helpers";
import _ from "lodash";
import { env } from "./env";
import { PrismaMongo } from "../prisma-mongo/prismaMongo";
export interface ImongoEnv {
	smtp_server: string;
	smtp_name: string;
	smtp_username: string;
	smtp_password: string;
	smtp_port: number;
	rest_port: number;
	grpc_port: number;
	seq_url: string;
	seq_key: string;
	jwt_secret: string;
}

@Singleton
export class MongoEnv extends PrismaMongo {
	private _rawEnv: Record<string, any>;
	private _env: ImongoEnv;
	public ready: Promise<void>;
	constructor() {
		super();
		this.ready = this.loadMongo();
	}
	public async loadMongo() {
		await this.connect();
		this._rawEnv = await this.client.ekhomeAuthConfig.findFirst({
			orderBy: {
				updated_at: "desc",
			},
		});
		this.parseEnv();
		await this.disconnect();
	}
	public parseEnv() {
		this._env = cleanEnv(Object.assign({ NODE_ENV: env.NODE_ENV }, this._rawEnv), {
			smtp_server: str(),
			smtp_name: str(),
			smtp_username: str(),
			smtp_password: str(),
			smtp_port: port(),
			rest_port: port(),
			grpc_port: port(),
			seq_url: str(),
			seq_key: str(),
			jwt_secret: str(),
		});
	}
	public get env(): typeof this._env {
		return this._env;
	}
	public get rawEnv(): typeof this._rawEnv {
		return _.cloneDeep(this._rawEnv);
	}
}
