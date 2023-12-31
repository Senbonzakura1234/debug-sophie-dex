import { errorMap } from '@root/constants/common';
import type { CommonServerError } from '@root/types/common';
import Link from 'next/link';

export type ErrorContentProps = Partial<CommonServerError>;

export default function ErrorContent({ code = 'INTERNAL_SERVER_ERROR' }: ErrorContentProps) {
	const { message, status } = errorMap[code];

	return (
		<div
			className={`modal-box m-auto grid aspect-video w-11/12 cursor-default select-none place-content-center gap-1 text-center shadow-md shadow-current md:w-[600px] ${
				status >= 500 ? 'text-error' : 'text-info dark:text-primary'
			}`}
		>
			<div className='grid gap-1'>
				<h1 className='text-7xl font-bold tracking-widest md:text-8xl'>{status}</h1>

				<span className='font-bold md:text-lg'>Sorry! {message}.</span>
			</div>

			<div>
				<Link
					aria-label='Back to home'
					className='link-hover link text-xs text-base-content md:text-sm'
					href='/'
					replace
				>
					Back to home
				</Link>
			</div>
		</div>
	);
}
