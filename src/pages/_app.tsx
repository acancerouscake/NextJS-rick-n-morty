import MyLayout from '@/components/mylayout';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';

export default function App({Component, pageProps}: AppProps) {
	return (
		<MyLayout>
			<Component {...pageProps} />;
		</MyLayout>
	);
}
