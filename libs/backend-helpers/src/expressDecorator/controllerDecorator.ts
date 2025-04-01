import { Express, Router } from "express";
export function UseController(app: Express | Router) {
	return function (target: any, propertyKey: string) {
		Reflect.defineMetadata("expressDecoratorApp", app, target.constructor);
		const getter = function () {
			return app;
		};
		const setter = function (updatedApp: Express | Router) {
			Reflect.defineMetadata("expressDecoratorApp", app, target.constructor);
		};
		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
		});
	};
}

export function ExpressUse(route: string) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		let app = Reflect.getMetadata("expressDecoratorApp", target.constructor);
		app.use(route, descriptor.value);
		return descriptor;
	};
}
export function ExpressGet(route: string) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		let app = Reflect.getMetadata("expressDecoratorApp", target.constructor);
		app.get(route, descriptor.value);
		return descriptor;
	};
}

export function ExpressPost(route: string) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		let app = Reflect.getMetadata("expressDecoratorApp", target.constructor);
		app.post(route, descriptor);
		return descriptor;
	};
}

export function ExpressPut(route: string) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		let app = Reflect.getMetadata("expressDecoratorApp", target.constructor);
		app.put(route, descriptor);
		return descriptor;
	};
}

export function ExpressPatch(route: string) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		let app = Reflect.getMetadata("expressDecoratorApp", target.constructor);
		app.patch(route, descriptor);
		return descriptor;
	};
}

export function ExpressDelete(route: string) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		let app = Reflect.getMetadata("expressDecoratorApp", target.constructor);
		app.delete(route, descriptor);
		return descriptor;
	};
}

export function listRoute(app: Express) {
	var route,
		routes = [];
	app._router.stack.forEach(function (middleware) {
		if (middleware.route) {
			// routes registered directly on the app
			routes.push(middleware.route);
		} else if (middleware.name === "router") {
			// router middleware
			middleware.handle.stack.forEach(function (handler) {
				route = handler.route;
				route && routes.push(route);
			});
		}
	});
}
