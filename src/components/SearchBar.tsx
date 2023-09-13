import {ChangeEvent, FormEvent} from 'react';

interface SearchBarProps {
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSubmitForm: (e: FormEvent) => void;
}

const SearchBar = ({handleInputChange, handleSubmitForm}: SearchBarProps) => {
	return (
		<>
			<form onSubmit={handleSubmitForm}>
				<input type='text' onChange={handleInputChange} name='search' />
				<button type='submit'>Submit search</button>
			</form>
		</>
	);
};

export default SearchBar;
