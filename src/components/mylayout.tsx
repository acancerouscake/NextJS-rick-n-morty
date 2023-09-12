import React, {ReactNode} from 'react';
import Nav from '../components/Nav';
import Footer from './Footer';

type Props = {children: ReactNode; contentStyle?: string};

const MyLayout = (props: Props) => {
	return (
		<>
			<Nav />
			<section className={'defaultContent'}>{props.children}</section>
			<Footer />
		</>
	);
};

export default MyLayout;
