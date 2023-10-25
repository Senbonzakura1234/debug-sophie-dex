import { errorMap } from '@root/constants/common';
import { TRPCError } from '@trpc/server';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { ErrorEnum } from './zod';

export type SelectOptionItem<V> = { value: V | null; label?: string; icon?: ReactNode };
export type SetSelectOptionItem<V> = Dispatch<SetStateAction<SelectOptionItem<V>>>;

export type AlertTypeEnum = 'ERROR' | 'INFO' | 'SUCCESS' | 'WARN';

export type AppleMediaConfig = Array<{
	url: string;
	media?: { width: number; height: number; ratio: number; orientation: 'landscape' | 'portrait' };
}>;

export type CommonObject = Record<string | number | symbol, unknown>;

export type KeyOf<TData extends CommonObject> = keyof TData;

export type ValueOf<TData extends CommonObject> = Required<TData>[KeyOf<TData>];

export type CommonServerError = { code: ErrorEnum };

export class APIError extends TRPCError {
	codeNumber: ValueOf<typeof errorMap>['status'];
	constructor(props: ConstructorParameters<typeof TRPCError>[0]) {
		super(props);
		this.codeNumber = errorMap[props.code].status;
	}
}
