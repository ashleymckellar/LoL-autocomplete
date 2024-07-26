import { useContext, useState } from "react"
import { Context } from "../context/ContextProvider"
import Legend from "./Champion"
import '../css/champion.css'

export default function ChampionList() {

    const { legends } = useContext(Context)
    const [filteredArr, setFilteredArr] = useState(legends);

    const tagsArr = []

    legends.forEach(legend => {
        legend.tags.forEach(tag => {
            if (!tagsArr.includes(tag)) {
                tagsArr.push(tag)
            }
        })
    })


    function handleChange(e) {
        const { value } = e.target;
        if (value !== 'all') {
            setFilteredArr(legends.filter(legend => legend.tags.includes(value)));
        } else {
            setFilteredArr(legends);
        }
    }

    console.log(filteredArr)

    const legendElements = filteredArr.map(legend => {
        return (
            <Legend {...legend} key={legend.id} />
        )
    })

    return (
        <div className="champion-container">
            <form>
                <select onChange={handleChange}>
                    <option value='all'>All</option>
                    {tagsArr.map(tag => <option key={tag} value={tag}>{tag}</option>)}
                </select>
            </form>
            <div className="champion-list">
                {legendElements}
            </div>
        </div>
    )
}