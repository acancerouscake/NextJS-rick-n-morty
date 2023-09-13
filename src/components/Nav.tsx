import Image from 'next/image';
import React from 'react';

type Props = {};

const Nav = (props: Props) => {
	return (
		<div>
			<div>
				<Image src='/logo.png' alt='Rick and Morty' width={150} height={84} />

				<div>
					<div>
						<input type='checkbox' className='input' />
						<span className='slider'></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
