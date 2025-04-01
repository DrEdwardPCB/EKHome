import "reflect-metadata";
// this function is to allow class that could not use @SetLogger decorator to use the @normalLog or @normalLogSync Decorator
// this is created for some usecase when to we cannot tell the logger and level in class initialization time
import { Logger } from "winston";
import { TErrorHandlerFactory } from "./errorHandler";
export type TLogLevel = "debug" | "info" | "error";
export interface ILogOptions {
	level?: TLogLevel;
	errorHandlerFactory?: TErrorHandlerFactory;
	metaData?: TMetadata;
}
export type TMetadata = Record<string, string | { (): string }>;
export type TResolvedMetadata = Record<string, string>;
export interface ISetLoggerOptions {
	level: TLogLevel;
	errorHandlerFactory?: TErrorHandlerFactory;
	metadata?: TMetadata;
}
export function applyLogger(obj: any, logger: Logger | Console, level: TLogLevel, metadata?: TMetadata) {
	Reflect.defineMetadata("logDecoratorLogger", logger, obj?.constructor || obj);
	Reflect.defineMetadata("logDecoratorLevel", level, obj?.constructor || obj);
	Reflect.defineMetadata("logDecoratorMetadata", metadata, obj?.constructor || obj);
}
export function SetLogger(logger: Logger | Console, options?: ISetLoggerOptions) {
	return function <T extends { new (...args: any[]): {} }>(constructor: T) {
		Reflect.defineMetadata("logDecoratorLogger", logger, constructor);
		Reflect.defineMetadata("logDecoratorLevel", options?.level ?? "debug", constructor);
		Reflect.defineMetadata("logDecoratorErrorHandlerFactory", options?.errorHandlerFactory, constructor);
		Reflect.defineMetadata("logDecoratorMetadata", options?.metadata, constructor);
		return constructor;
	};
}
