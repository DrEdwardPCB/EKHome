import fs from "fs";
import dayjs from "dayjs";
import path from "path";
import process from "process";

export interface IFileLogConfig {
	name?: string;
	datetimeString?: string;
	ext?: "txt" | "json" | "log";
}

export const defaultFileLogConfig: IFileLogConfig = {
	datetimeString: "YYYYMMDDHHmmss",
	ext: "log",
};

export function logToFile(fileName: string, content: string) {
	const ws = fs.createWriteStream(fileName);
	ws.write(content);
	ws.close();
}

export function fileLog(options?: IFileLogConfig) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const targetMethod = descriptor.value;
		descriptor.value = async function (...args: any[]) {
			const config: IFileLogConfig = Object.assign(defaultFileLogConfig, { name: propertyKey }, options);
			const result = await targetMethod.apply(this, args);
			logToFile(path.join(process.cwd(), "logs", `${config.name}-${dayjs().format(config.datetimeString)}.${config.ext}`), JSON.stringify(result, null, 4));
			return result;
		};
	};
}
