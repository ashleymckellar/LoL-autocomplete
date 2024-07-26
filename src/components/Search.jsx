

import { useState, useContext } from 'react';
import { Context } from '../context/ContextProvider';

export const Search = () => {
    const { legends } = useContext(Context);

    const [formData, setFormData] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const leg = legends.map((person) => person.name);
    console.log(leg);

    const handleChange = (input) => {
        let matches = [];
        if (input.length > 2) {
            const regex = new RegExp(`^${input.slice(0, 3)}`, 'i');

            for (const str of leg) {
                if (regex.test(str)) {
                    matches.push(str);
                }
            }
            console.log(matches);
            setSuggestions(matches);
        } else {
            setSuggestions([]);
        }
        setFormData(input);
    };

    return (
        <>
            <h1>Search Legends</h1>
            <form>
                <input
                    type="text"
                    onChange={(e) => handleChange(e.target.value)}
                    value={formData}
                />
            </form>

            {suggestions.length > 0 && (
                <div>
                    {suggestions.map((suggestion, i) => (
                        <p key={i}>{suggestion}</p>
                    ))}
                </div>
            )}
        </>
    );
};

export default Search;

