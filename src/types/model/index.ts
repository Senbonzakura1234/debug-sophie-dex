import type { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc';

export const errorList = [
	'PARSE_ERROR',
	'BAD_REQUEST',
	'INTERNAL_SERVER_ERROR',
	'NOT_IMPLEMENTED',
	'UNAUTHORIZED',
	'FORBIDDEN',
	'NOT_FOUND',
	'METHOD_NOT_SUPPORTED',
	'TIMEOUT',
	'CONFLICT',
	'PRECONDITION_FAILED',
	'PAYLOAD_TOO_LARGE',
	'UNPROCESSABLE_CONTENT',
	'TOO_MANY_REQUESTS',
	'CLIENT_CLOSED_REQUEST',
] as const satisfies Readonly<Array<TRPC_ERROR_CODE_KEY>>;

export const serverErrorList = ['INTERNAL_SERVER_ERROR', 'BAD_REQUEST', 'NOT_FOUND'] as const;

export const moduleIdList = ['effect', 'item', 'trait', 'rumor'] as const;

export const daisyUIThemeList = ['autumn', 'fantasy', 'forest', 'synthwave'] as const;
