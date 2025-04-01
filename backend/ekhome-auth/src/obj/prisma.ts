export abstract class Prisma<T> {
	constructor(public client: T) {}
	public abstract connect(): Promise<void>;
	public abstract disconnect(): Promise<void>;
}
