import type { CommonObject, KeyOf, ValueOf } from "@root/types/common";

// =======================================				Native Override				=======================================

export const arrayInclude = <TSearch extends Readonly<string | number>>(
	arr: Readonly<Array<TSearch>>,
	search: unknown
): search is TSearch => arr.includes(search as TSearch);

export const capitalize = <TInput extends string>(
	input?: TInput | null
): Capitalize<TInput> =>
	(input
		? input.replace(
				/(^\w|\s\w)(\S*)/g,
				(_, firstLetter, rest) =>
					firstLetter.toUpperCase() + rest.toLowerCase()
		  )
		: "") as Capitalize<TInput>;

export type CapitalizeFunction = typeof capitalize;

export const createArray = <TFill>(len = 0, fill: TFill) =>
	Array(len).fill(fill) as Array<TFill>;

export const entries = <const Obj extends CommonObject>(
	obj: Obj
): Array<[KeyOf<Obj>, ValueOf<Obj>]> =>
	Object.entries(obj) as Array<[KeyOf<Obj>, ValueOf<Obj>]>;

export const fromEntries = <Key extends KeyOf<CommonObject>, Value = unknown>(
	entries: Array<Readonly<[Key, Value]>>
): Readonly<Record<Key, Value>> =>
	Object.fromEntries(entries) as Readonly<Record<Key, Value>>;

export const indexOf = <TSearch extends Readonly<string | number>>(
	arr: Readonly<Array<TSearch>>,
	search: unknown,
	defaultIndex?: number
) => (arrayInclude(arr, search) ? arr.indexOf(search) : defaultIndex || -1);

export const objectKeys = <const Obj extends CommonObject>(
	obj: Obj
): Array<KeyOf<Obj>> => Object.keys(obj);

export const objectValues = <const Obj extends CommonObject>(
	obj: Obj
): Array<ValueOf<Obj>> => Object.values(obj) as Array<Obj[keyof Obj]>;

export const sleep = (milliseconds = 1000) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds));

export const writeLog = ({
	args,
	type = "log",
	hideInProd = false,
}: {
	args: Array<unknown>;
	type?: "log" | "warn" | "error";
	hideInProd?: boolean;
}) =>
	(!hideInProd || process.env.NODE_ENV !== "production") &&
	console[type](...args);

// =======================================					Utilities					=======================================

export const convertCode = <TInput extends string>(input?: TInput | null) =>
	input ? input.toLowerCase().replaceAll("_", " ") : "";

export const getBaseUrl = (useMainHost?: boolean) => {
	if (useMainHost)
		return (
			process.env.NEXT_PUBLIC_APP_HOST ||
			`http://localhost:${process.env.PORT || "3000"}`
		);
	if (typeof window !== "undefined") return ""; // browser should use relative url
	if (process.env.NEXT_PUBLIC_VERCEL_URL)
		return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`; // SSR should use vercel url
	return `http://localhost:${process.env.PORT || "3000"}`; // dev SSR should use localhost
};

export const tryCatchHandler = async <TReturn = unknown>(
	promise: Promise<TReturn>
) => {
	try {
		return { data: await promise, isSuccess: true as const, error: null };
	} catch (error) {
		writeLog({ args: [error], type: "error", hideInProd: true });

		return { data: null, isSuccess: false as const, error };
	}
};

export const tryCatchHandlerSync = <TReturn = unknown>(
	callback: () => TReturn
) => {
	try {
		return { data: callback(), isSuccess: true as const, error: null };
	} catch (error) {
		writeLog({ args: [error], type: "error" });

		return { data: null, isSuccess: false as const, error };
	}
};
