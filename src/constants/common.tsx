import type { ErrorEnum } from '@root/types/common/zod';

export const DEFAULT_LIMIT = 16;

export const errorMap = {
	PARSE_ERROR: { message: 'Invalid JSON From Client', status: 400 },
	BAD_REQUEST: { message: 'Bad Request', status: 400 },
	UNAUTHORIZED: { message: 'Unauthorized Request', status: 401 },
	NOT_FOUND: { message: 'Content Not Found', status: 404 },
	FORBIDDEN: { message: 'Forbidden Content', status: 403 },
	METHOD_NOT_SUPPORTED: { message: 'Method Not Supported', status: 405 },
	TIMEOUT: { message: 'Request Timeout', status: 408 },
	CONFLICT: { message: 'Request Conflict', status: 409 },
	PRECONDITION_FAILED: { message: 'Request Precondition Failed', status: 412 },
	PAYLOAD_TOO_LARGE: { message: 'Payload Request Too Large', status: 413 },
	UNPROCESSABLE_CONTENT: { message: 'Unprocessable Content', status: 422 },
	TOO_MANY_REQUESTS: { message: 'Too Many Requests', status: 429 },
	CLIENT_CLOSED_REQUEST: { message: 'Client Closed Request', status: 499 },
	INTERNAL_SERVER_ERROR: { message: 'Some Thing Wrong Server', status: 500 },
	NOT_IMPLEMENTED: { message: 'Some Thing Wrong Server', status: 501 },
} as const satisfies Record<ErrorEnum, { message: string; status: number }>;

export const listAboutPaths = ['about', 'profile', 'license'] as const;
