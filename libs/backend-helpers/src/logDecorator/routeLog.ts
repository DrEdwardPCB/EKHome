import { routeLogDecoratorValidator } from "./logValidator";
import { ILogOptions } from "./SetLogger";
import cluster from "cluster";
import { resolveMetadata } from "./metadataResolver";

export function routeLog(functionName: string, options?: ILogOptions) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const targetMethod = descriptor.value;
		descriptor.value = async function (...args: any[]) {
			let opt = routeLogDecoratorValidator(target, functionName, options);
			let LoggingFnc: Function = Reflect.getMetadata("logDecoratorLogger", target.constructor)[opt.level ?? "info"];
			let metadata = resolveMetadata(Reflect.getMetadata("logDecoratorMetadata", target.constructor) ?? {}, options?.metaData ?? {});
			try {
				LoggingFnc(`${cluster?.isWorker ? `worker @${cluster.worker?.id}` : ""}starting route: ${functionName}`, metadata);
				await targetMethod.apply(this, args);
				LoggingFnc(`${cluster?.isWorker ? `worker @${cluster.worker?.id}` : ""}finish route: ${functionName}`, metadata);
			} catch (err) {
				if (opt.errorHandlerFactory) {
					const errorHandler = opt.errorHandlerFactory(Reflect.getMetadata("logDecoratorLogger", target.constructor));
					errorHandler(err, functionName, metadata ?? undefined, args[1]);
				}
			}
		};
		return descriptor;
	};
}
