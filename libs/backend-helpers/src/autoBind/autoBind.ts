// Gets all non-builtin properties up the prototype chain.
const getAllProperties = (object: any): Set<[any, any]> => {
	const properties = new Set<[any, any]>();

	do {
		for (const key of Reflect.ownKeys(object)) {
			properties.add([object, key]);
		}
	} while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);

	return properties;
};

export default function autoBind(self: any, { include, exclude }: { include?: any[]; exclude?: any[] } = {}) {
	const filter = (key: any) => {
		const match = (pattern: any) => (typeof pattern === "string" ? key === pattern : pattern.test(key));

		if (include) {
			return include.some(match); // eslint-disable-line unicorn/no-array-callback-reference
		}

		if (exclude) {
			return !exclude.some(match); // eslint-disable-line unicorn/no-array-callback-reference
		}

		return true;
	};

	for (const [object, key] of getAllProperties(self.constructor.prototype)) {
		if (key === "constructor" || !filter(key)) {
			continue;
		}

		const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
		if (descriptor && typeof descriptor.value === "function") {
			self[key] = self[key].bind(self);
		}
	}

	return self;
}
