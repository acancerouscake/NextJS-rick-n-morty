import Image from 'next/image';
import React, {useContext} from 'react';
import {Character} from '../types/Api';
import Link from 'next/link';

interface CharCardProps {
	character: Character;
}

export default function CharCard({character}: CharCardProps) {
	return (
		<Link href={`/character/${character.id}`} key={character.id} prefetch={false}>
			<Image loader={() => character.image} src={character.image} unoptimized width={300} height={300} alt={character.name} />
			<span>{character.name}</span>
			<div></div>
		</Link>
	);
}
