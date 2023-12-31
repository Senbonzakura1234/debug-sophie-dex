import '@total-typescript/ts-reset';

import './globals.css';

import ScrollWrapper from '@root/components/layout/client/ScrollWrapper';
import ThemeWrapper from '@root/components/layout/client/ThemeWrapper';
import { appleMediaConfig } from '@root/constants/server';
import { fontAtelier, fontComicSansMS } from '@root/fonts';
import type { ChildrenProps } from '@root/types/common/props';
import { daisyUIThemeEnumSchema } from '@root/types/common/zod';
import { ContextProvider } from '@root/utils/client/context';
import { getBaseUrl } from '@root/utils/common';
import { env } from '@root/utils/common/env.mjs';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';

const ThemeSwitcher = dynamic(() => import('@root/components/layout/client/ThemeSwitcher'), { ssr: false });

export const metadata: Metadata = {
	appleWebApp: {
		title: 'Apple Web App',
		statusBarStyle: 'black-translucent',
		startupImage: appleMediaConfig.map(({ media, url }) => ({
			media: media
				? `screen and (device-width: ${media.width}px) and (device-height: ${media.height}px) and (-webkit-device-pixel-ratio: ${media.ratio}) and (orientation: ${media.orientation})`
				: undefined,
			url: `/assets/splash_screens/${url}.png`,
		})),
	},
	authors: {
		name: env.NEXT_PUBLIC_APP_AUTHOR,
		url: `https://github.com/${env.NEXT_PUBLIC_APP_AUTHOR}`,
	},
	description: env.NEXT_PUBLIC_APP_DESCRIPTION,
	icons: {
		apple: '/assets/splash_screens/icon.png',
		icon: '/favicon.ico',
		shortcut: '/assets/splash_screens/icon.png',
	},
	keywords: env.NEXT_PUBLIC_APP_KEYWORD?.split(','),
	manifest: '/manifest.json',
	metadataBase: new URL(getBaseUrl(true)),
	other: {
		google: 'notranslate',
		'og:title': `sophie-dex | ${env.NEXT_PUBLIC_APP_DESCRIPTION}`,
		'og:description': env.NEXT_PUBLIC_APP_DESCRIPTION || '',
		'og:url': getBaseUrl(true),
	},
	robots: 'all',
	themeColor: '#996c254d',
	title: `sophie-dex | ${env.NEXT_PUBLIC_APP_DESCRIPTION}`,
	twitter: {
		card: 'summary_large_image',
		description: env.NEXT_PUBLIC_APP_DESCRIPTION,
		images: `${getBaseUrl()}/opengraph-image`,
		title: `sophie-dex | ${env.NEXT_PUBLIC_APP_DESCRIPTION}`,
	},
	viewport: 'width=device-width, initial-scale=1.0',
};

export default async function RootLayout({ children }: ChildrenProps) {
	const cookiesList = cookies();

	return (
		<html lang='en'>
			<body className={`${fontAtelier.variable} ${fontComicSansMS.className}`}>
				<ContextProvider
					defaultState={{
						theme: daisyUIThemeEnumSchema.parse(cookiesList.get('theme')?.value),
					}}
				>
					<ThemeWrapper>
						<ScrollWrapper>
							<ThemeSwitcher />
							{children}
						</ScrollWrapper>
					</ThemeWrapper>
				</ContextProvider>
			</body>
		</html>
	);
}
