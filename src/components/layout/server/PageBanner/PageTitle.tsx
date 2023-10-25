'use client';

import usePageSegment from '@root/hooks/usePageSegment';

export default function PageTitle() {
	const { segment } = usePageSegment();

	return (
		<div className='text-shadow-dark text-5xl font-bold capitalize tracking-widest text-slate-50 xl:text-6xl 2xl:text-7xl'>
			{segment}
		</div>
	);
}
