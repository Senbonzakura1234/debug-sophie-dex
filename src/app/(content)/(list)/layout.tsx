import ContentWrapper from '@root/components/layout/client/ContentWrapper';
import type { ChildrenProps } from '@root/types/common/props';

export default function ListLayout({ children }: ChildrenProps) {
	return <ContentWrapper type='list'>{children}</ContentWrapper>;
}
