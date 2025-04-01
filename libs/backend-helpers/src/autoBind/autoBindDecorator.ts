import autoBind from "./autoBind";

export function AutoBind() {
	return function <T extends { new (...args: any[]): {} }>(constructor: T) {
		return class extends constructor {
			constructor(...args: any[]) {
				super(...args);
				autoBind(this);
			}
		};
	};
}
