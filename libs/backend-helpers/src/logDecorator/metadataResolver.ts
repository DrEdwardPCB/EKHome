import { TMetadata, TResolvedMetadata } from "./SetLogger";
import { compact } from "lodash";

export function resolveMetadata(...args: TMetadata[]): TResolvedMetadata {
	const unresolvedMetadata: TMetadata = Object.assign({}, ...compact(args));
	let resolvedMetadata: TResolvedMetadata = {};
	for (let [k, v] of Object.entries(unresolvedMetadata)) {
		if (typeof v === "function") {
			resolvedMetadata[k] = v();
		} else {
			resolvedMetadata[k] = v;
		}
	}
	return resolvedMetadata;
}
