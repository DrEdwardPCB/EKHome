import { SetLogger, normalLog } from "@ekhome/backend-helpers";
import { logger } from "../logger";

@SetLogger(logger, { level: "info", metadata: { class: "AuthService" } })
class AuthService {
	@normalLog("signup")
	public async signUp() {}
	public async login() {
		// match user
		// match password
		// create session if dun have
	}

	public async logout() {
		// terminate session for all user
	}
	public async healthCheck() {
		// check if session terminated, if session terminated, return 401 else 200
	}
	public async forgetPassword() {
		// check if user found, if not found,
		// create a password token in Cache with TTL 5 minutes and return a token
	}
	public async resetPassword() {
		// check if token have in cache,
	}
}
