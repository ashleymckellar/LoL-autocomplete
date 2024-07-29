import { useState, useContext } from 'react';
import { Context } from '../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import '../css/search.css';

export const Search = () => {
    const { legends } = useContext(Context);

    const [formData, setFormData] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const leg = legends.map((person) => person.name);
    const navigate = useNavigate();
    // const {id} = useParams()

    const handleChange = (input) => {
        let matches = [];
        if (input.length > 2) {
            const regex = new RegExp(`^${input}`, 'i');

            for (const str of leg) {
                if (regex.test(str)) {
                    matches.push(str);
                }
            }
            // console.log(matches);
            setSuggestions(matches);
        } else {
            setSuggestions([]);
        }
        setFormData(input);
    };

    // console.log(suggestions);
    // console.log(legends);

    const handleChampionClick = (name) => {
        const selectedLegend = legends.find((legend) => legend.name === name);
        if (selectedLegend) {
            navigate(`../champions/${selectedLegend.id}`);
        }
    };

    // const onClick = () => {
    //     handleChampionClick()
    // }

    return (
        <>
            <div className="legend-container">
                <h1 className='search-h1'>Search Champions</h1>
                <form>
                    <input
                        type="text"
                        onChange={(e) => handleChange(e.target.value)}
                        value={formData}
                        className='search-form'
                    />
                </form>
            </div>

            {suggestions.length > 0 && (
                <div className="suggestion-flex">
                    {suggestions.map((suggestion, i) => (
                        <button
                            className="suggestion-btn"
                            key={i}
                            type="button"
                            onClick={() => handleChampionClick(suggestion)}
                        >
                            <p className="suggestion">{suggestion}</p>
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default Search;
