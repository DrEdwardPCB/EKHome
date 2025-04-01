import dotenv from "dotenv";
dotenv.config();
import { cleanEnv, str, url, num } from "envalid";
export const env = cleanEnv(process.env, {
	NODE_ENV: str({ devDefault: "development", choices: ["development", "production", "local"] }),
	MONGO_URL: url(),
	POSTGRES_URL: url(),
	NUM_CLUSTER: num(),
});
