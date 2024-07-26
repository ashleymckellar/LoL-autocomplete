import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleLeagueChampion } from "../http"
import '../css/champ-details.css'

export default function ChampionDetails() {

    const { id } = useParams()

    const [champion, setChampion] = useState(null)

    useEffect(() => {
        getSingleLeagueChampion(id).then(data => setChampion(data[id]))
    }, [id])

    if (!champion) {
        return <div>Loading...</div>;
    }

    const {
        allytips,
        enemytips,
        image,
        lore,
        name,
        passive,
        spells,
        stats,
        tags,
        title
    } = champion;

    console.log(champion)

    const fullImageUrl = `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${image.full}`;
    const passiveImageUrl = `https://ddragon.leagueoflegends.com/cdn/11.9.1/img/passive/${passive.image.full}`;

    return (
        <div className="champ-detail-container">
            <img src={fullImageUrl} />
            <div className="text-container">
                <div>
                    <h1>{name} {title}</h1> 
                    {tags.map(tag => <span key={tag}>#{tag} </span>)}
                    <h2>Lore</h2>
                    <p>{lore}</p>
                </div>
                <div>
                    <h2>Ally Tips</h2>
                    <ul>
                        {allytips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Enemy Tips</h2>
                    <ul>
                        {enemytips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Stats</h2>
                    <ul>
                        <li>HP: {stats.hp}</li>
                        <li>HP per level: {stats.hpperlevel}</li>
                        <li>MP: {stats.mp}</li>
                        <li>MP per level: {stats.mpperlevel}</li>
                        <li>Move Speed: {stats.movespeed}</li>
                        <li>Armor: {stats.armor}</li>
                        <li>Armor per levl: {stats.armorperlevel}</li>
                        <li>Attack Damage: {stats.attackdamage}</li>
                        <li>Attack Range: {stats.attackrange}</li>
                        <li>Attack Speed: {stats.attackspeed}</li>
                    </ul>
                </div>
                <div>
                    <h2>Spells</h2>
                    {spells.map(spell => {
                        const spellImageUrl = `https://ddragon.leagueoflegends.com/cdn/11.9.1/img/spell/${spell.image.full}`;
                        return (
                            <div className="spell" key={spell.id}>
                                <img src={spellImageUrl} />
                                <div>
                                    <h3>Spell: {spell.name}</h3>
                                    <p>{spell.description}</p>
                                    <p>Spell Cost Burn: {spell.costBurn}</p>
                                    <p>Spell Range: {spell.rangeBurn}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="passive">
                    <h2>Passive</h2>
                    {passive.image.full && <img src={passiveImageUrl} />}
                    <div>
                        <h3>{passive.name}</h3>
                        <p>{passive.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}