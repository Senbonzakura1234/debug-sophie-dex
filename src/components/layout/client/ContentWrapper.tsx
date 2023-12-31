'use client';

import type { ChildrenProps } from '@root/types/common/props';

type ContentWrapperProps = ChildrenProps & { type: 'detail' | 'list' | 'about' };

export default function ContentWrapper({ children, type }: ContentWrapperProps) {
	return (
		<section
			className={`container mx-auto grid grid-cols-1 gap-6 max-2xl:px-4
				${type === 'detail' ? 'my-auto lg:max-w-3xl' : ''}
				${type === 'list' ? ' my-auto' : ''}
				${type === 'about' ? 'm-auto max-w-6xl' : ''}
			`}
		>
			{children}
		</section>
	);
}
