import { isNil } from "lodash";
import { ILogOptions } from "./SetLogger";
export function logDecoratorValidator(target: any, functionName: string, options?: ILogOptions): ILogOptions {
	if (isNil(functionName)) {
		throw new Error("functionName cannot be null");
	}
	if (isNil(Reflect.getMetadata("logDecoratorLogger", target.constructor)) || isNil(Reflect.getMetadata("logDecoratorLevel", target.constructor))) {
		throw new Error("please add classDecorator SetLogger on the class you use this decorator");
	}
	let parsedOptions: ILogOptions = {
		...options,
		level: options?.level ?? Reflect.getMetadata("logDecoratorLevel", target.constructor),
	};

	return parsedOptions;
}

export function routeLogDecoratorValidator(target: any, functionName: string, options?: ILogOptions): ILogOptions {
	let logOptions: ILogOptions = logDecoratorValidator(target, functionName, options);
	if (isNil(Reflect.getMetadata("logDecoratorErrorHandlerFactory", target.constructor)) && isNil(logOptions?.errorHandlerFactory)) {
		throw new Error("error handler has not been set, please specify in @routeLog decorator or @SetLogger decorator");
	}
	logOptions.errorHandlerFactory = logOptions?.errorHandlerFactory ?? Reflect.getMetadata("logDecoratorErrorHandlerFactory", target.constructor);
	return logOptions;
}
