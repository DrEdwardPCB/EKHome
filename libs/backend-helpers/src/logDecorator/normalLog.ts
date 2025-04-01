import { logDecoratorValidator } from "./logValidator";
import { ILogOptions } from "./SetLogger";
import cluster from "cluster";
import { resolveMetadata } from "./metadataResolver";
import { defaultErrorHandlerFactory } from "./errorHandler";

export const serializeObj = (obj: any) => {
	try {
		if (typeof obj === "object") {
			return JSON.stringify(obj);
		} else {
			return obj;
		}
	} catch (err) {
		return obj;
	}
};
export function normalLog(functionName: string, options?: ILogOptions) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const targetMethod = descriptor.value;

		descriptor.value = async function (...args: any[]) {
			let opt = logDecoratorValidator(target, functionName, options);
			let LoggingFnc: Function = Reflect.getMetadata("logDecoratorLogger", target.constructor)[opt.level ?? "info"];
			let metadata = resolveMetadata(Reflect.getMetadata("logDecoratorMetadata", target.constructor) ?? {}, options?.metaData ?? {});
			try {
				LoggingFnc(`${cluster?.isWorker ? `worker @${cluster.worker?.id}` : ""} starting: ${functionName} ${args.length > 0 ? `with args ${serializeObj(args)}` : ""}`, metadata);

				let result: any;
				result = await targetMethod.apply(this, args);
				LoggingFnc(`${cluster?.isWorker ? `worker @${cluster.worker?.id}` : ""}finish: ${functionName}`, metadata);
				return result;
			} catch (err) {
				let errorHandler = defaultErrorHandlerFactory(Reflect.getMetadata("logDecoratorLogger", target.constructor));
				if (opt.errorHandlerFactory) {
					errorHandler = opt.errorHandlerFactory(Reflect.getMetadata("logDecoratorLogger", target.constructor));
				}
				errorHandler(err, functionName, metadata);
			}
		};
		return descriptor;
	};
}

export function normalLogSync(functionName: string, options?: ILogOptions) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const targetMethod = descriptor.value;
		descriptor.value = function (...args: any[]) {
			let opt = logDecoratorValidator(target, functionName, options);
			let LoggingFnc: Function = Reflect.getMetadata("logDecoratorLogger", target.constructor)[opt.level ?? "info"];
			let metadata = resolveMetadata(Reflect.getMetadata("logDecoratorMetadata", target.constructor) ?? {}, options?.metaData ?? {});
			try {
				LoggingFnc(`${cluster?.isWorker ? `worker @${cluster.worker?.id}` : ""}starting: ${functionName} ${args.length > 0 ? `with args ${serializeObj(args)}` : ""}`, metadata);

				let result: any;
				result = targetMethod.apply(this, args);
				LoggingFnc(`${cluster?.isWorker ? `worker @${cluster.worker?.id}` : ""}finish: ${functionName}`, metadata);
				return result;
			} catch (err) {
				let errorHandler = defaultErrorHandlerFactory(Reflect.getMetadata("logDecoratorLogger", target.constructor));
				if (opt.errorHandlerFactory) {
					errorHandler = opt.errorHandlerFactory(Reflect.getMetadata("logDecoratorLogger", target.constructor));
				}
				errorHandler(err, functionName, metadata);
			}
		};
		return descriptor;
	};
}
