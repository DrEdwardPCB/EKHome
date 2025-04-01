import { createConnection } from "node:net";

export default async function pingHostname(hostname: string): Promise<boolean> {
	return new Promise((resolve, reject) => {
		const socket = createConnection(80, hostname);
		socket.setTimeout(3000);
		socket.on("connect", () => {
			socket.end();
			resolve(true);
		});
		socket.on("timeout", () => {
			socket.destroy();
			resolve(false);
		});
		socket.on("error", (err) => {
			socket.destroy();
			resolve(false);
		});
	});
}
