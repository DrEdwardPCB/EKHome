export class UnauthorizedError extends Error {
	constructor(msg: string) {
		super(msg);
		Error.captureStackTrace(this, this.constructor);
		this.name = this.constructor.name;
	}
}

export class ForbiddenError extends Error {
	constructor(msg: string) {
		super(msg);
		Error.captureStackTrace(this, this.constructor);
		this.name = this.constructor.name;
	}
}

export class BadRequestError extends Error {
	constructor(msg: string) {
		super(msg);
		Error.captureStackTrace(this, this.constructor);
		this.name = this.constructor.name;
	}
}

export class NotFoundError extends Error {
	constructor(msg: string) {
		super(msg);
		Error.captureStackTrace(this, this.constructor);
		this.name = this.constructor.name;
	}
}
