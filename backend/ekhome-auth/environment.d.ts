declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | "local" | "production";
			MONGO_URL: string;
			POSTGRES_URL: string;
			NUM_CLUSTER: string;
		}
	}
}
